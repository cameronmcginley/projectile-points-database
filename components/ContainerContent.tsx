import { Container, Paper } from "@mui/material";
import React from "react";

// Returns the main container for all content
const ContainerContent = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  bg: Boolean;
}) => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Display Paper if bg is true */}
      {props.bg ? (
        <Paper square sx={{ minHeight: "70vh", p: 4 }}>
          {children}
        </Paper>
      ) : (
        <div>{children}</div>
      )}
    </Container>
  );
};

export default ContainerContent;
