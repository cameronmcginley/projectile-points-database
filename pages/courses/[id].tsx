import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import LayoutData from "../../components/layouts/data";
import { useRouter } from "next/router";

import React from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient, courseByName } from "../../src/api";

// Get params from URL
export async function getServerSideProps({ params }) {
  // Fetch course
  await queryClient.prefetchQuery("course", () =>
    courseByName({ name: params.id })
  );

  // Return dehydrated state
  return {
    props: {
      name: params.id,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Courses: NextPageWithLayout = ({ name }) => {
  // Fetch data
  const { data } = useQuery("course", () => courseByName({ name }));
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
