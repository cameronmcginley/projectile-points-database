import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layouts/projectile_point";
import { useRouter } from "next/router";
import HeaderData from "../../components/PointDataPage/HeaderData";
import Description from "../../components/PointDataPage/Description";
import DetailTable from "../../components/PointDataPage/DetailTable";
import {
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getPointByName } from "../../src/api";

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
  // Fetch data
  const { data } = useQuery("point", () => getPointByName({ name }));
  console.log(data);
  console.log("test");

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
      {/* <div>{JSON.stringify(data)}</div> */}
      {/* <div>{JSON.stringify(data)}</div> */}
      {/* <Paper square sx={{ minHeight: "70vh", p: 4 }}>
        <p>test</p>
      </Paper> */}
      {data && data.point && (
        <>
          {/* Header */}
          <HeaderData headerData={headerData} name={data.point.name} />

          {/* Main grid */}
          <Grid container columnSpacing={2}>
            {/* Col 1, Description */}
            <Grid xs item style={{ minWidth: "16rem" }}>
              <Description description={data.point.description} />
            </Grid>

            {/* Col 2, Projectile point details */}
            <Grid item style={{ minWidth: "24rem" }}>
              <DetailTable data={pointDetails} />
              <DetailTable data={nameDetails} />
              {/* <Paper>
                <TableContainer sx={{ p: 1 }}>
                  <Table size="small" aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell>{"Date"}</TableCell>
                        <TableCell>{data.point.date_info}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{"Cultural Period"}</TableCell>
                        <TableCell>{data.point.cultural_period}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{"Glacial Period"}</TableCell>
                        <TableCell>{data.point.glacial_period}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{"Culture"}</TableCell>
                        <TableCell>{data.point.culture}</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{"Tradition"}</TableCell>
                        <TableCell>{data.point.tradition}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper> */}

              {/* Name details */}
              {/* <Paper sx={{ mt: 2 }}>
                <TableContainer sx={{ p: 1 }}>
                  <Table size="small" aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell>{"Named By"}</TableCell>
                        <TableCell>{data.point.date_info}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{"Named For"}</TableCell>
                        <TableCell>{data.point.cultural_period}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{"Year Identified"}</TableCell>
                        <TableCell>{data.point.glacial_period}</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{"Type Site"}</TableCell>
                        <TableCell>{data.point.tradition}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper> */}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

Points.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Points;
