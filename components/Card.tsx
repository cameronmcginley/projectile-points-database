import React from "react";
import {
  Container,
  Paper,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";

const Card2 = (props) => {
  return (
    <Card
      component={"a"}
      href={props.data.link}
      sx={{
        textDecoration: "none",
        width: "100%",
        "&:hover": {
          mt: "-1rem",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.data.title}
        </Typography>
        <Typography variant="body2">{props.data.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Card2;
