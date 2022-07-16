import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import LayoutData from "../../components/layouts/data";
import { useRouter } from "next/router";

import React from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getCourseByID } from "../../src/api";

// Get params from URL
export async function getServerSideProps({ params }) {
  // Fetch course
  await queryClient.prefetchQuery("course", () =>
    getCourseByID({ id: parseInt(params.id) })
  );

  // Return dehydrated state
  return {
    props: {
      id: parseInt(params.id),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Courses: NextPageWithLayout = ({ id }) => {
  // Fetch data
  const { data } = useQuery("course", () => getCourseByID({ id }));
  console.log(data);
  console.log("test");
  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
