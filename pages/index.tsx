import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import LayoutMain from "../components/layouts/main";
import Hero from "../components/Hero";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <p>hello world</p>;
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Home;
