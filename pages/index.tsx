import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import LayoutMain from "../components/layouts/main";
import Hero from "../components/Hero";
import Card from "../components/Card";
import ContainerCards from "../components/ContainerCards";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <ContainerCards
        cards={[
          {
            title: "Courses",
            description:
              "Create and view courses and sort by semester, department, level, time, or others.",
            link: "/courses",
          },
          {
            title: "Departments",
            description:
              "View all departments with the ability to modify them or create new ones.",
            link: "/departments",
          },
          {
            title: "Faculty",
            description:
              "View and sort through the list of current and past faculty.",
            link: "/faculty",
          },
          {
            title: "Students",
            description:
              "View and sort through the list of current and past students.",
            link: "/students",
          },
        ]}
      />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Home;
