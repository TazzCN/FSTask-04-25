import { AppBar, Box, Typography } from "@mui/material"

const Header = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Typography variant="h6" component="div" sx={{flexGrow: 1, padding: 2}}>
                    Projects
                </Typography>
            </AppBar>
        </Box>
    );
};

export default Header;