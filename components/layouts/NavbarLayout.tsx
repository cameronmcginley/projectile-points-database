import React from "react";
import Navbar from "../Navbar";

// Layout that includes Navbar, Sidebar, and visible content container
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
