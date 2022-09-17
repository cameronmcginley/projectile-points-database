import { Box, Paper } from "@mui/material";
import type { ReactElement } from "react";
import LayoutNavbar from "../../components/layouts/navbar";
import PointUploadPanel from "../../components/PointUpload/Panel";
import type { NextPageWithLayout } from "../_app";

const Upload: NextPageWithLayout = () => {
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
          <PointUploadPanel />
        </Paper>
      </Box>
    </>
  );
};

Upload.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Upload;
