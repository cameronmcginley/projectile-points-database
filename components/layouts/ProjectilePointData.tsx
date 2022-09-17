import React from "react";
import ContainerContent from "../ContainerContent";
import Navbar from "../Navbar";

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
