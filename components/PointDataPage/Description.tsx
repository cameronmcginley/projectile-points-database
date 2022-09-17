import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

// Returns the single card with given title, desc, link
const Description = (props: any) => {
  return (
    <Box
      className="datapage-box"
      sx={{
        p: 1,
      }}
    >
      <ReactMarkdown>{props.description}</ReactMarkdown>
    </Box>
  );
};

export default Description;
