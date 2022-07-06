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
          { title: "Courses", description: "Yo", link: "/courses" },
          { title: "Departments", description: "Yo", link: "/departments" },
          { title: "Faculty", description: "Yo", link: "/faculty" },
          { title: "Students", description: "Yo", link: "/students" },
        ]}
      />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Home;
