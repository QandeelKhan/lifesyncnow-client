// taskSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
    taskId: string | null;
}

const initialState: TaskState = {
    taskId: null,
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTaskId: (state, action: PayloadAction<string>) => {
            state.taskId = action.payload;
        },
    },
});

export const { setTaskId } = taskSlice.actions;

export default taskSlice.reducer;
