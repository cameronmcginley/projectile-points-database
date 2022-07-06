import React from "react";
import { Container, Paper } from "@mui/material";

const ContainerMain = ({ children, ...props }) => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Display Paper if bg is true */}
      {props.bg ? (
        <Paper square sx={{ minHeight: "70vh" }}>
          {children}
        </Paper>
      ) : (
        <div>{children}</div>
      )}
    </Container>
  );
};

export default ContainerMain;
