import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "./palette";

const pages = [
  { text: "Courses", link: "/courses" },
  { text: "Departments", link: "/departments" },
  { text: "Faculty", link: "/faculty" },
  { text: "Students", link: "/students" },
];

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
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 6,
              fontWeight: 700,
              color: theme.palette.text,
              textDecoration: "none",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            Dashboard
          </Typography>

          {/* Buttons */}
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            {pages.map((page) => (
              // <HoverDropdown />
              <Typography
                key={page.text}
                component="a"
                href={page.link}
                sx={{
                  mr: 4,
                  textDecoration: "none",
                  color: theme.palette.text,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {page.text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
