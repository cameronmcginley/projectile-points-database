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
  const [expandedList, setExpandedList] = React.useState([]);

  React.useEffect(() => {
    if (!router.isReady) return;
    setExpandedList([...expandedList, router.asPath]);
  }, [router.isReady]);

  const handleChange = (panel: string, newExpanded: boolean) => {
    newExpanded
      ? console.log("Adding ", panel)
      : console.log("Removing", panel, router.asPath);
    setExpandedList(
      newExpanded
        ? [...expandedList, panel]
        : [
            ...expandedList.filter(function (e) {
              return !(
                // Remove the panel
                (
                  e === panel ||
                  // Remove pathname if we are removing the panel for it
                  (e === router.asPath && router.asPath.includes(panel))
                )
              );
            }),
          ]
    );
  };

  // Check if the panelKey is in any elements of expandedList
  const isExpanded = (panelKey) => {
    for (let i = 0; i < expandedList.length; i++) {
      if (expandedList[i].includes(panelKey)) {
        return true;
      }
    }
    return false;
  };

  return (
    <Paper square sx={{ width: 1, height: "100%" }} noWrap>
      <SidebarAccordion
        handleChange={handleChange}
        panelKey="/courses"
        expanded={isExpanded("/courses")}
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
        expanded={isExpanded("/departments")}
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
        expanded={isExpanded("/faculty")}
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
        expanded={isExpanded("/students")}
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
