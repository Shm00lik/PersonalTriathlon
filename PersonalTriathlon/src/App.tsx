import { useEffect, useState } from "react";
import Home from "./pages/Home.tsx";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Icon from "@mui/material/Icon";

const darkTheme = createTheme({
    typography: {
        fontFamily: "Heebo",
    },
    palette: {
        mode: "dark",
    },
});

function App() {
    const [user, setUser] = useState({ name: "Yoav", id: "123456789" });

    const [navBarValue, setNavBarValue] = useState("history");

    const handleNavBarChange = (
        _event: React.SyntheticEvent,
        newValue: string
    ) => {
        setNavBarValue(newValue);
    };

    useEffect(() => {
        let tempUser = JSON.parse(localStorage.getItem("user") || "{}");

        if (!tempUser.name || !tempUser.id) return;

        setUser(tempUser);
    }, []);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                {user && <Home user={user} />}

                <BottomNavigation
                    value={navBarValue}
                    onChange={handleNavBarChange}
                    sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                >
                    <BottomNavigationAction
                        label="History"
                        value="history"
                        icon={<Icon>history_outlined</Icon>}
                    />

                    <BottomNavigationAction
                        label="New"
                        value="new"
                        icon={<Icon>add_circle_outline_outlined</Icon>}
                    />

                    <BottomNavigationAction
                        label="Account"
                        value="account"
                        icon={<Icon>person_outlined</Icon>}
                    />
                </BottomNavigation>
            </ThemeProvider>
        </>
    );

    return <></>;
}

export default App;
