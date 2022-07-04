import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import LayoutMain from "../../components/layouts/main";
import LayoutData from "../../components/layouts/data";
import Hero from "../../components/Hero";

const Courses: NextPageWithLayout = () => {
  return (
    <>
      <p>Courses Index</p>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
