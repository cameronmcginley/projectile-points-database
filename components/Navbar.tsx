import * as React from "react";
import { AppBar, Box, Typography, Container } from "@mui/material";
import theme from "./palette";

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
