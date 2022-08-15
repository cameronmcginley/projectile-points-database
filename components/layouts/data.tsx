import Navbar from "../Navbar";
import React from "react";
import Sidebar from "../Sidebar";
import { Grid } from "@mui/material";
import ContainerContent from "../ContainerContent";

// Layout that includes Navbar, Sidebar, and visible content container
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <ContainerContent bg={true}>{children}</ContainerContent> */}
      {/* <Grid container height="94vh">
        <Grid item style={{ width: "16rem" }}>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <ContainerContent bg={true}>{children}</ContainerContent>
        </Grid>
      </Grid> */}
    </>
  );
};

export default Layout;
