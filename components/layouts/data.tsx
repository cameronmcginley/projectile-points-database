import Navbar from "../Navbar";
import Hero from "../Hero";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "../Sidebar";
import { Container, Box, Grid, Paper } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Grid container height="94vh">
        <Grid item style={{ width: "16rem" }}>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <Container>
            <Paper square>{children}</Paper>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
