import { Box, Paper } from "@mui/material";
import type { ReactElement } from "react";
import LayoutNavbar from "../../../components/layouts/NavbarLayout";
import PointUploadPanel from "../../../components/PointUpload/Panel";
import type { NextPageWithLayout } from "../../_app";

import React from "react";
import { dehydrate, useQuery } from "react-query";
import { getPointByName, queryClient } from "../../../src/api";

// Get params from URL
export async function getServerSideProps({ params }) {
  // Fetch point
  await queryClient.prefetchQuery("point", () =>
    getPointByName({ name: params.name })
  );

  // Return dehydrated state
  return {
    props: {
      name_id: params.name,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Upload: NextPageWithLayout = ({ name_id }) => {
  const { data } = useQuery("point", () => getPointByName({ name_id }));
  console.log(data);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          square
          sx={{
            mt: 4,
            maxWidth: "1280px",
            minHeight: "70vh",
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-title">Create New Projectile Point</p>
          <PointUploadPanel is_edit={true} point_data={data.point} />
        </Paper>
      </Box>
    </>
  );
};

Upload.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Upload;
