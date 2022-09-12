import React from "react";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutNavbar from "../../components/layouts/navbar";
import { AppBar, Box, Typography, Container, Grid, Paper } from "@mui/material";
import ContainerContent from "../../components/ContainerContent";
import Panel from "../../components/PointUpload/Panel";

const Upload: NextPageWithLayout = () => {
  return (
    <>
      <ContainerContent bg={true}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p className="text-title">Create New Projectile Point</p>
        </Box>

        {/* Upload */}
        <Panel />
        {/*   name_id               String   @id
        name                  String
        shape                 String[]
        size                  String[]
        // Name details
        namers                String[]
        named_for             String?
        year_identified       Int?
        type_site             String?
        // Background
        glacial_period        String[]
        canadian_period       String[]
        cultural_period       String[]
        culture               String[]
        environment           String[]
        phase                 String[]
        tradition             String[]
        year_range_start      Int?
        // BP or AD
        year_range_start_type String?
        year_range_end        Int?
        year_range_end_type   String?
        // Projectile point info
        variant               String?
        short_for             String?
        // Akas should link here when searching for them
        aka                   String[]
        cluster               String?
        point_validity        String?
        description           String?
        // List of similar points, stores name_id's
        similar_point         String[] */}
      </ContainerContent>
    </>
  );
};

Upload.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Upload;
