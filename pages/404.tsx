import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import LayoutMain from "../components/layouts/main";
import LayoutData from "../components/layouts/data";

const Courses: NextPageWithLayout = () => {
  return (
    <>
      <p>Page not found</p>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
