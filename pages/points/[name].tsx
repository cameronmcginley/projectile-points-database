import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import LayoutData from "../../components/layouts/data";
import { useRouter } from "next/router";

import React from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getPointByName } from "../../src/api";

// Get params from URL
export async function getServerSideProps({ params }) {
  // Fetch point
  await queryClient.prefetchQuery("point", () =>
    getPointByName({ name: params.name })
  );

  // Return dehydrated state
  return {
    props: {
      name: params.name,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Points: NextPageWithLayout = ({ name }) => {
  // Fetch data
  const { data } = useQuery("point", () => getPointByName({ name }));
  console.log(data);
  console.log("test");
  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

Points.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Points;
