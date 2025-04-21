import { AppBar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ height: "64px" }}>
      <AppBar position="static" sx={{ height: "100%" }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Projects
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
