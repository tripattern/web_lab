import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MoonPhase from './components/MoonPhase/MoonPhase';
import {createTheme, ThemeProvider} from '@mui/material';

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
                <MoonPhase/>
            </div>
        </ThemeProvider>
    );
}

export default App;
