import Box from '@mui/material/Box';
import Item from '@mui/material/Box';

function MoonPhase() {
    return (
        <div>
            <Box sx={{m: 2}}/>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center'}}>
                <Item></Item>
                <Item>
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

        </div>
    );
}

export default MoonPhase;