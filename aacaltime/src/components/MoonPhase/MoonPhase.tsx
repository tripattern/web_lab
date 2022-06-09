import Box from '@mui/material/Box';
import Item from '@mui/material/Box';
import {GetCorrectedGregorianDateAsString} from "../../utils/DateTimeHelpers";
import MoonImage from '../../assets/moon_4.png';

const myHebDate: string = GetCorrectedGregorianDateAsString(new Date());

function MoonPhase() {
    return (
        <div>
            <Box sx={{m: 2}}/>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center'}}>
                <Item></Item>
                <Item>
                    <div><b>Moon Phase</b></div>
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
                    <Box sx={{m: 5}}/>
                    <div><b>Jerusalem</b></div>
                    <Box sx={{m: 2}}/>
                    <div><b>{myHebDate}</b></div>
                </Item>
                <Item></Item>
            </Box>
        </div>
    );
}

//                    https://openclipart.org/search/?query=moonphase
export default MoonPhase;