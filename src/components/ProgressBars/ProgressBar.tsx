// ProgressBar.tsx
import React from "react";
import useWebSocketProgress from "./useWebsocketProgress";

const ProgressBar: React.FC = () => {
    const progress = useWebSocketProgress();

    return <div>Progress: {progress}%</div>;
};

export default ProgressBar;
