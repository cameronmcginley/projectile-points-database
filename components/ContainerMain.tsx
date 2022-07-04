import React from "react";
import { Container, Paper } from "@mui/material";

const ContainerMain = ({ children }) => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper square sx={{ minHeight: "70vh" }}>
        {children}
      </Paper>
    </Container>
  );
};

export default ContainerMain;
