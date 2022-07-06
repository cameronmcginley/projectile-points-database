import React from "react";
import { Container, Paper, Grid, Box } from "@mui/material";
import Card from "./Card";

const ContainerMain = (props) => {
  return (
    <Box
      className="container-cards"
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        py: 3,
        gap: "2rem",
      }}
    >
      {props.cards.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </Box>
  );
};

export default ContainerMain;
