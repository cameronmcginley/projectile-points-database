import React from "react";
import { Paper } from "@mui/material";
import SidebarAccordion from "./SidebarAccordion";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  // Store keys of expanded panels, defaults to current path in useEffect
  const [expandedList, setExpandedList] = React.useState<string[]>([]);

  // Wait for isReady before adding to list, else asPath will not
  // work on dynamic routes
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
              // Remove the panel
              return !(
                e === panel ||
                // Remove pathname too if we are removing the panel for it
                (e === router.asPath && router.asPath.includes(panel))
              );
            }),
          ]
    );
  };

  // Check if the panelKey is in any elements of expandedList
  const isExpanded = (panelKey: string) => {
    for (let i = 0; i < expandedList.length; i++) {
      if (expandedList[i].includes(panelKey)) {
        return true;
      }
    }
    return false;
  };

  return (
    <Paper square sx={{ width: 1, height: "100%" }}>
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
