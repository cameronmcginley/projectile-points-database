import React from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  margin: 0,
}));

const SidebarAccordion = (props) => {
  const [newExpanded, setNewExpanded] = React.useState(true);

  return (
    <Accordion expanded={props.expanded} sx={{ py: 1 }}>
      {/* Text */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Opens page */}
        <Button
          fullWidth
          href={props.link}
          sx={{ justifyContent: "flex-start", m: 0, p: 0.25, pl: 3 }}
        >
          {props.text}
        </Button>
        {/* Replaces default accordion opening with icon button */}
        <Button
          onClick={() => {
            props.handleChange(props.panelKey, newExpanded);
            setNewExpanded(!newExpanded);
          }}
        >
          <ArrowForwardIosSharpIcon
            sx={{
              transform: props.expanded ? "rotate(90deg)" : "rotate(-90deg)",
              transition: "all 0.25s",
              fontSize: "0.9rem",
            }}
          />
        </Button>
      </Box>

      {/* Opens to list of buttons */}
      <AccordionDetails>
        <Box sx={{ display: "flex", flexDirection: "column", m: 0, p: 0 }}>
          {props.items.map((item) => {
            return (
              <Button
                fullWidth={true}
                key={item.text}
                variant="text"
                href={item.link}
                sx={{ justifyContent: "flex-start", m: 0, p: 0.25, pl: 6 }}
              >
                {item.text}
              </Button>
            );
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SidebarAccordion;
