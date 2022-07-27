import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutData from "../../components/layouts/data";

import { dehydrate, useQuery } from "react-query";
import { queryClient, getPoints } from "../../src/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("points", () => getPoints());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Courses: NextPageWithLayout = () => {
  const { data } = useQuery(["points"], () => getPoints());
  return (
    <>
      <p>Points Index</p>
      {/* {data.points.map((item) => {
        return <p>{item.name}</p>;
      })} */}
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
