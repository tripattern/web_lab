import Box from '@mui/material/Box';
import MoonImage from '../../assets/moon_4.png';

function MoonPhase() {
    return (
        <div>
            <b>Moon Phase</b>
            <Box sx={{m: 1}}/>
            <Box
                component="img"
                sx={{
                    mx: "auto",
                    height: 350,
                    width: 350,
                    maxHeight: {xs: 150, md: 250},
                    maxWidth: {xs: 150, md: 250},
                }}
                alt="The phase of the moon."
                src={MoonImage}
            />
        </div>
    );
}
export default MoonPhase;