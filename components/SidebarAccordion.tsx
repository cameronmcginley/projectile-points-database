import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box, Button } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import React from "react";
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

interface SidebarAccordionProps {
  panelKey: string;
  link: string;
  expanded: boolean;
  text: string;
  handleChange: (panel: string, newExpanded: boolean) => void;
  items: { text: string; link: string }[];
}

const SidebarAccordion = (props: SidebarAccordionProps) => {
  const router = useRouter();
  const [newExpanded, setNewExpanded] = React.useState(
    !router.asPath.includes(props.link)
  );

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
            // borderBottom: router.asPath === props.link ? 1 : 0,
            backgroundColor:
              router.asPath === props.link
                ? // router.asPath.includes(props.link)
                  theme.palette.highlight.main
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
                    router.asPath === item.link
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
