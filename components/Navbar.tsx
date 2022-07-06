import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "./palette";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        height: "5vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              color: theme.palette.text,
              textDecoration: "none",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            School Administrative Dashboard
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
