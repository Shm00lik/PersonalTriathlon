import { Button, Card, CardActions, CardHeader, Grid } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
    subheader?: string;
    defaultIsRunning?: boolean;
}

const Stopwatch = ({ subheader, defaultIsRunning = false }: Props) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [currentLapStartTime, setCurrentLapStartTime] = useState(0);

    useEffect(() => {
        let id: number;

        if (isRunning) {
            id = setInterval(() => {
                addTime(1);
            }, 10);
        }

        return () => clearInterval(id);
    }, [isRunning]);

    useEffect(() => {
        setIsRunning(defaultIsRunning);
    }, [defaultIsRunning]);

    const formatTime = (time: number) => {
        let millis = time % 100;
        let seconds = Math.floor(time / 100) % 60;
        let minutes = Math.floor(time / 6000) % 60;

        let strMinutes = minutes < 10 ? "0" + minutes : minutes;
        let strSeconds = seconds < 10 ? "0" + seconds : seconds;
        let strMillis = millis < 10 ? "0" + millis : millis;

        return `${strMinutes}:${strSeconds}.${strMillis}`;
    };

    const addTime = (dt: number) => {
        setTime((prevTime) => prevTime + dt);
    };

    const toggleIsRunning = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const lap = () => {
        setCurrentLapStartTime(time);
    };

    return (
        <Card sx={{ mb: 1 }}>
            <CardHeader
                title={
                    <Grid container>
                        <Grid item xs>
                            {formatTime(time)}
                        </Grid>
                        <Grid item xs>
                            {formatTime(time - currentLapStartTime)}
                        </Grid>
                    </Grid>
                }
                subheader={subheader}
            />

            <CardActions sx={{ justifyContent: "center" }}>
                <Button
                    fullWidth
                    color={!isRunning ? "success" : "error"}
                    onClick={toggleIsRunning}
                >
                    {!isRunning ? "START" : "STOP"}
                </Button>

                <Button fullWidth onClick={lap}>
                    LAP
                </Button>
            </CardActions>
        </Card>
    );
};

export default Stopwatch;
