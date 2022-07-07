import Navbar from "../Navbar";
import Hero from "../Hero";
import Sidebar from "../Sidebar";
import React from "react";
import ContainerContent from "../ContainerContent";
import { Grid } from "@mui/material";

// Layout that includes Navbar, Sidebar, and non-visible content container
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Grid container height="94vh">
        <Grid item style={{ width: "16rem" }}>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <ContainerContent bg={false}>{children}</ContainerContent>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
