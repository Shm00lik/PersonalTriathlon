import { useState } from "react";
import Stopwatch from "../components/Stopwatch";
import { Button } from "@mui/material";

interface Props {
    user: {
        name: string;
        id: string;
    };
}

const Home = ({ user }: Props) => {
    const [runStopwatchs, setRunStopwatchs] = useState(false);
    console.log(runStopwatchs);

    return (
        <>
            <h1>
                Hello {user.name} {runStopwatchs.toString()}
            </h1>

            <Button
                onClick={() => {
                    setRunStopwatchs((prev) => !prev);
                }}
            >
                {runStopwatchs ? "STOP ALL" : "START ALL"}
            </Button>

            <Stopwatch
                subheader="Yoav The King"
                defaultIsRunning={runStopwatchs}
            />
            <Stopwatch
                subheader="Yoav The King"
                defaultIsRunning={runStopwatchs}
            />
            <Stopwatch
                subheader="Yoav The King"
                defaultIsRunning={runStopwatchs}
            />
            <Stopwatch
                subheader="Yoav The King"
                defaultIsRunning={runStopwatchs}
            />
            <Stopwatch
                subheader="Yoav The King"
                defaultIsRunning={runStopwatchs}
            />
        </>
    );
};

export default Home;
