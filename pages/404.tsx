import type { ReactElement } from "react";
import LayoutNavbar from "../components/layouts/NavbarLayout";
import type { NextPageWithLayout } from "./_app";

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
