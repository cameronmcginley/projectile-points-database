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
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const router = useRouter();
  const [expandedList, setExpandedList] = React.useState([router.pathname]);

  const handleChange = (panel: string, newExpanded: boolean) => {
    newExpanded
      ? console.log("Adding ", panel)
      : console.log("Removing", panel);
    setExpandedList(
      newExpanded
        ? [...expandedList, panel]
        : [
            ...expandedList.filter(function (e) {
              return e !== panel;
              // return !e.includes(panel);
            }),
          ]
    );
  };

  return (
    <Paper square sx={{ width: 1, height: "100%" }}>
      <SidebarAccordion
        handleChange={handleChange}
        panelKey="/courses"
        expanded={expandedList.includes("/courses")}
        text={"Courses"}
        link={"/courses"}
        items={[
          { text: "One", link: "/courses/one" },
          { text: "Two", link: "/courses/two" },
          { text: "Three", link: "/courses/three" },
        ]}
      />
      <SidebarAccordion
        handleChange={handleChange}
        panelKey="/departments"
        expanded={expandedList.includes("/departments")}
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
        panelKey="/faculty"
        expanded={expandedList.includes("/faculty")}
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
        panelKey="/students"
        expanded={expandedList.includes("/students")}
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
