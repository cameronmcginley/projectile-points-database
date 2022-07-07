import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface CardData {
  title: string;
  description: string;
  link: string;
}

interface CardProps {
  key: string;
  data: CardData;
}

// Returns the single card with given title, desc, link
const CardComponent = (props: CardProps) => {
  return (
    <Card
      component={"a"}
      href={props.data.link}
      sx={{
        textDecoration: "none",
        height: "100%",
        width: "100%",
        "&:hover": {
          mt: "-1rem",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ pb: 2 }}>
          {props.data.title}
        </Typography>
        <Typography variant="body2" sx={{ pb: 2 }}>
          {props.data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
