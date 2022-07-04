import Navbar from "../Navbar";
import Hero from "../Hero";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import React from "react";
import ContainerMain from "../ContainerMain";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContainerMain>{children}</ContainerMain>
    </>
  );
};

export default Layout;
