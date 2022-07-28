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
      <ContainerContent bg={false}>{children}</ContainerContent>
    </>
  );
};

export default Layout;
