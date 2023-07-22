// useWebSocketProgress.ts
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTaskId } from "../../redux/taskSlice";
import { RootState } from "../../redux/store";

const useWebSocketProgress = () => {
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const taskId = useSelector((state: RootState) => state.taskId.taskId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!taskId) {
                    // If task ID is not available, fetch it from the backend
                    const response = await axios.get(
                        "http://127.0.0.1/api/blog/enqueue_load_posts"
                    );
                    const { task_id } = response.data;
                    dispatch(setTaskId(task_id));
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [dispatch, taskId]);

    useEffect(() => {
        if (!taskId) {
            return; // Wait for the taskId to be available
        }

        const socket = new WebSocket(`ws://127.0.0.1/ws/progress/${taskId}/`);
        console.log(`WebSocket connection URL: ${socket.url}`);

        socket.onopen = () => {
            console.log("WebSocket connected");
        };

        socket.onmessage = (event: MessageEvent) => {
            const data = event.data;
            console.log("Received data:", data);

            if (data === "completed") {
                setProgress(100);
            } else {
                setProgress(parseInt(data));
            }
        };

        socket.onclose = () => {
            console.log("WebSocket disconnected");
        };

        return () => {
            // Clean up the WebSocket event listener and close the socket
            socket.onmessage = null;
            socket.onclose = null;
            socket.close();
        };
    }, [taskId]);

    return progress;
};

export default useWebSocketProgress;
