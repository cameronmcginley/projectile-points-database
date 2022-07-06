import Navbar from "../Navbar";
import Hero from "../Hero";
import Sidebar from "../Sidebar";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import React from "react";
import ContainerContent from "../ContainerContent";
import { Container, Box, Grid, Paper } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar />
      <Hero />
      <ContainerMain>{children}</ContainerMain> */}
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
