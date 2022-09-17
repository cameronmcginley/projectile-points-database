import { Box } from "@mui/material";
import type { ReactElement } from "react";
import Layout from "../../components/layouts/ProjectilePointData";
import Description from "../../components/PointDataPage/Description";
import DetailTable from "../../components/PointDataPage/DetailTable";
import HeaderData from "../../components/PointDataPage/HeaderData";
import type { NextPageWithLayout } from "../_app";

import React from "react";
import { dehydrate, useQuery } from "react-query";
import { getPointByName, queryClient } from "../../src/api";

// Get params from URL
export async function getServerSideProps({ params }) {
  // Fetch point
  await queryClient.prefetchQuery("point", () =>
    getPointByName({ name: params.name })
  );

  // Return dehydrated state
  return {
    props: {
      name: params.name,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Points: NextPageWithLayout = ({ name }) => {
  // Fetch da
  const { data } = useQuery("point", () => getPointByName({ name }));

  const [headerData, setHeaderData] = React.useState([
    ["Variant", data.point.variant],
    ["AKA", data.point.aka],
    ["Short For", data.point.short_for],
  ]);

  const [pointDetails, setPointDetails] = React.useState([
    [
      "Date",
      [
        data.point.year_range_start,
        data.point.year_range_start_type,
        data.point.year_range_end,
        data.point.year_range_end_type,
      ],
    ],
    ["Cultural Period", data.point.cultural_period],
    ["Glacial Period", data.point.glacial_period],
    ["Canadian Period", data.point.canadian_period],
    ["Culture", data.point.culture],
    ["Phase", data.point.phase],
    ["Tradition", data.point.tradition],
  ]);

  const [nameDetails, setNameDetails] = React.useState([
    ["Named By", data.point.namers],
    ["Named For", data.point.named_for],
    ["Year Identified", data.point.year_identified],
    ["Type Site", data.point.type_site],
  ]);

  return (
    <>
      {data && data.point && (
        <>
          {/* Header */}
          <HeaderData headerData={headerData} name={data.point.name} />

          {/* Main grid */}
          {/* <Grid container columnSpacing={2} className="point-data-grid">
                      <Grid xs item style={{ minWidth: "16rem" }}>
              <Description description={data.point.description} />
            </Grid>

            <Grid item style={{ maxWidth: "24rem" }}>
              <DetailTable data={pointDetails} />
              <DetailTable data={nameDetails} />
            </Grid>
          </Grid> */}

          <Box
            className="point-data-grid"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              mb: "5rem",
            }}
          >
            {/* Col 1, Description */}
            <Box sx={{ minWidth: "16rem" }}>
              <Description description={data.point.description} />
            </Box>
            {/* Col 2, Projectile point details */}
            <Box className="point-data-detail-table" sx={{ minWidth: "24rem" }}>
              <DetailTable data={pointDetails} />
              <DetailTable data={nameDetails} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

Points.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Points;
