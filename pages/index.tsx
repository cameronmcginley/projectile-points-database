import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/layouts/main";

const Home: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
