import theme from "./palette";
import React, { useState } from "react";
import { Paper, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarAccordion from "./SidebarAccordion";

const Sidebar = (props) => {
  const [expandedList, setExpandedList] = React.useState([]);

  const handleChange = (panel: string, newExpanded: boolean) => {
    console.log("Adding ", panel);
    setExpandedList(
      newExpanded
        ? [...expandedList, panel]
        : [
            ...expandedList.filter(function (e) {
              return e !== panel;
            }),
          ]
    );
  };

  //   const handleChange =
  //     (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
  //       console.log("Adding ", panel);
  //       setExpandedList(
  //         newExpanded
  //           ? [...expandedList, panel]
  //           : [
  //               ...expandedList.filter(function (e) {
  //                 return e !== panel;
  //               }),
  //             ]
  //       );
  //     };

  return (
    <Paper square sx={{ width: 1, height: "100%" }}>
      <SidebarAccordion
        handleChange={handleChange}
        panelKey="panel1"
        expanded={expandedList.includes("panel1")}
        text={"Courses"}
        link={"/courses"}
        items={[
          { text: "One", link: "/" },
          { text: "Two", link: "/" },
          { text: "Three", link: "/" },
        ]}
      />
      <SidebarAccordion
        handleChange={handleChange}
        panelKey="panel2"
        expanded={expandedList.includes("panel2")}
        text={"Departments"}
        link={"/departments"}
        items={[
          { text: "One", link: "/" },
          { text: "Two", link: "/" },
          { text: "Three", link: "/" },
        ]}
      />
      <SidebarAccordion
        handleChange={handleChange}
        panelKey="panel3"
        expanded={expandedList.includes("panel3")}
        text={"Faculty"}
        link={"/faculty"}
        items={[
          { text: "One", link: "/" },
          { text: "Two", link: "/" },
          { text: "Three", link: "/" },
        ]}
      />
      <SidebarAccordion
        handleChange={handleChange}
        panelKey="panel4"
        expanded={expandedList.includes("panel4")}
        text={"Students"}
        link={"/students"}
        items={[
          { text: "One", link: "/" },
          { text: "Two", link: "/" },
          { text: "Three", link: "/" },
        ]}
      />
    </Paper>
  );
};

export default Sidebar;
