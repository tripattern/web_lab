import Box from '@mui/material/Box';
import Item from '@mui/material/Box';

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
                        alt="The house from the offer."
                        src="https://openclipart.org/image/400px/119833"
                    />
                </Item>
                <Item></Item>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center'}}>
                <Item></Item>
                <Item>
                    <Box sx={{m: 5}}/>
                    <div><b>Information</b></div>
                    <Box sx={{m: 2}}/>
                    <Box
                        component="img"
                        sx={{
                            mx: "auto",
                            height: 350,
                            width: 450,
                        }}
                        alt="The house from the offer."
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Moon_Phase_Diagram_for_Simple_English_Wikipedia.GIF"
                    />
                    <div>Reference: https://simple.wikipedia.org/wiki/Phases_of_the_Moon</div>
                </Item>
                <Item></Item>
            </Box>

        </div>
    );
}
//                    https://openclipart.org/search/?query=moonphase
export default MoonPhase;