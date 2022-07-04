import theme from "./palette";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Hero = (props) => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main, height: "1vh" }}
    >
      <Container maxWidth="xl" sx={{ alignItems: "center" }}>
        <Typography
          variant="h6"
          noWrap
          align="center"
          sx={{
            mr: 6,
            my: 1,
            fontWeight: 700,
            color: "white",
            textDecoration: "none",
          }}
        >
          {props.text}
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Hero;
