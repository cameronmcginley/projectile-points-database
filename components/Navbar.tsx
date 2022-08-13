import * as React from "react";
import { AppBar, Box, Typography, Container, Paper } from "@mui/material";
import theme from "./palette";

const Navbar = () => {
  return (
    <>
      {/* Main title */}
      <Box sx={{
        width: "100%", height: "5vh", backgroundColor: "white", display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // boxShadow: 2,
        zIndex: 1,
        position: "relative"
      }}>
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
          Projectile Points Revamped
        </Typography>
      </Box>

      {/* Links */}
      <Box className="inset-shadow" sx={{
        width: "100%",
        height: "5vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        Title
      </Box>

      <Box className="bottom-shadow" sx={{ width: "100%", height: ".8vh", backgroundColor: theme.palette.primary.main }} />
    </>

  );
};
export default Navbar;
