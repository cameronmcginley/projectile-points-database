import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutData from "../../components/layouts/data";

const Courses: NextPageWithLayout = () => {
  // const sendData = async () => {
  //   // Define the data to send off, access via req.body.content
  //   let data = { content: ["test_name", "test_instructor"] };

  //   // // Get response after sending
  //   // const res = await fetch("/api/courses", {
  //   //   method: "POST",
  //   //   // Data stored in body
  //   //   body: JSON.stringify(data),
  //   //   // Not sure if this is needed, might be since we send json data?
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // });

  //   // // Not sure if this works, print response?
  //   // const res_data = await res.json();
  //   // console.log(res_data);
  // };

  return (
    <>
      <p>Courses Index</p>
      {/* <button onClick={sendData}>Test</button> */}
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
