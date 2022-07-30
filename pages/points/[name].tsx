import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layouts/projectile_point";
import { useRouter } from "next/router";
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
import ReactMarkdown from "react-markdown";

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

  const header_data = [
    ["Variant", "test"],
    ["AKA", "test"],
    ["Short For", "test"],
  ];
  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      {/* <div>{JSON.stringify(data)}</div> */}
      {/* <Paper square sx={{ minHeight: "70vh", p: 4 }}>
        <p>test</p>
      </Paper> */}
      {data && data.point && (
        <>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            {/* Title */}
            <Typography variant="h3">{data.point.name}</Typography>

            {/* Header data */}
            <TableContainer sx={{ p: 1, width: "auto" }}>
              <Table
                size="small"
                aria-label="simple table"
                style={{ width: "auto" }}
              >
                <TableBody>
                  {header_data.map((item) => {
                    return (
                      <TableRow key={item[0]} sx={{ "& td": { border: 0 } }}>
                        <TableCell sx={{ pb: 0 }} align="right">
                          {item[0] + ":"}
                        </TableCell>
                        <TableCell sx={{ pl: 0, pb: 0 }}>{item[1]}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* Main grid */}
          <Grid container columnSpacing={2}>
            <Grid xs item style={{ minWidth: "16rem" }}>
              <Paper sx={{ p: 1 }}>
                {/* <h1>{data.point.name}</h1>
              <div>{JSON.stringify(data)}</div> */}
                <ReactMarkdown>{data.point.description}</ReactMarkdown>
              </Paper>
            </Grid>
            <Grid item style={{ minWidth: "24rem" }}>
              {/* Main details */}
              <Paper>
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
              </Paper>

              {/* Name details */}
              <Paper sx={{ mt: 2 }}>
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
              </Paper>
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
