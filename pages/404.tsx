import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import LayoutNavbar from "../components/layouts/navbar";

const Courses: NextPageWithLayout = () => {
  return (
    <>
      <p>Page not found</p>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Courses;
