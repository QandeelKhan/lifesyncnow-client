import ProgressBar from "../components/ProgressBars/ProgressBar";
import TaskHandler from "../components/ProgressBars/useWebsocketProgress";
import useWebSocketProgress from "../components/ProgressBars/useWebsocketProgress";

const Playground = () => {
    console.log("Parent component rendered");

    return (
        <div>
            <h3>Playground</h3>
            <ProgressBar />
        </div>
    );
};

export default Playground;
