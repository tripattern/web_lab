import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MoonPhase from './components/MoonPhase/MoonPhase';
import {createTheme, ThemeProvider} from '@mui/material';
import HebDate from "./components/BibDate/HebDate";
import Box from "@mui/material/Box";
import Item from "@mui/material/Box";

const minTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={minTheme}>
            <div>
                <NavBar/>
                <Box sx={{m: 2}}/>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center'}}>
                    <Item></Item>
                    <Item>
                        <MoonPhase/>
                        <HebDate/>
                    </Item>
                    <Item></Item>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default App;
