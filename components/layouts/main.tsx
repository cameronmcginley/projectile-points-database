import Navbar from "../Navbar";
import Hero from "../Hero";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>{children}</main>
    </>
  );
};

export default Layout;
