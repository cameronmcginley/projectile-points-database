import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutData from "../../components/layouts/data";

import { queryClient, createCourse } from "../../src/api";

const Courses: NextPageWithLayout = () => {
  const sendNewCourse = async () => {
    await queryClient.fetchQuery("createCourse", () => createCourse());
  };

  return (
    <>
      <p>Courses Index</p>
      <button onClick={sendNewCourse}>Test</button>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
