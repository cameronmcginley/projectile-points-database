import React from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useRouter } from "next/router";
import theme from "./palette";

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
  const router = useRouter();
  const [newExpanded, setNewExpanded] = React.useState(
    router.pathname !== props.link
  );
  // const { pathname } = useLocation();

  return (
    <Accordion expanded={props.expanded} sx={{ py: 1 }}>
      {/* Text */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Opens page */}
        <Button
          className="sidebar-accordion"
          fullWidth
          href={props.link}
          sx={{
            justifyContent: "flex-start",
            m: 0,
            p: 0.25,
            pl: 3,
            // Highligh the current active page
            // borderBottom: router.pathname === props.link ? 1 : 0,
            backgroundColor:
              router.pathname === props.link
                ? theme.palette.highlight.main
                : "none",
          }}
        >
          {props.text}
        </Button>
        {/* Replaces default accordion opening with icon button */}
        <Button
          className="sidebar-accordion"
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
                className="sidebar-accordion"
                fullWidth={true}
                key={item.text}
                variant="text"
                href={item.link}
                sx={{
                  justifyContent: "flex-start",
                  m: 0,
                  p: 0.25,
                  pl: 6,
                  backgroundColor:
                    router.pathname === item.link
                      ? theme.palette.highlight.main
                      : "none",
                }}
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
