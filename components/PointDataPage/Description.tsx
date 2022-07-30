import React from "react";
import { Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";

// Returns the single card with given title, desc, link
const Description = (props) => {
  return (
    <Paper sx={{ p: 1 }}>
      <ReactMarkdown>{props.description}</ReactMarkdown>
    </Paper>
  );
};

export default Description;
