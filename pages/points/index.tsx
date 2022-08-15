import React from "react";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutData from "../../components/layouts/data";

import { dehydrate, useQuery } from "react-query";
import { queryClient, getPoints } from "../../src/api";

import { AppBar, Box, Typography, Container, Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import PointSearch from "../../components/PointSearch";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    renderCell: (params) => (
      <a href={"/points/" + params.row.name_id}>{params.row.name}</a>
    ),
  },
  { field: "shape", headerName: "Shape", flex: 1 },
  { field: "size", headerName: "Size", flex: 1 },
  { field: "culture", headerName: "Cultural Period", flex: 1 },
  { field: "point_validity", headerName: "Validity", flex: 1 },
];

export async function getServerSideProps() {
  await queryClient.prefetchQuery("points", () => getPoints());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Courses: NextPageWithLayout = () => {
  const [pageSize, setPageSize] = React.useState<number>(30);

  const { data } = useQuery(["points"], () => getPoints());

  return (
    <>
      {/* <p>Points Index</p> */}
      {/* {data.points.map((item) => {
        return <p>{item.name}</p>;
      })} */}
      {/* <div>{JSON.stringify(data)}</div> */}
      {/* <Box sx={{ display: "flex", width: "90%" }}> */}

      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Grid
          container
          spacing={2}
          sx={{
            minHeight: "70vh",
            width: "90%",
          }}
        >
          <Grid item xs>
            <Paper sx={{ height: "100%", p: 1 }}>
              <DataGrid
                autoHeight
                disableSelectionOnClick
                // Disables menu for filtering, hiding cols, etc.
                disableColumnMenu
                getRowId={(row) => row.name}
                rows={data.points}
                columns={columns}
                // Handle table size for changing height
                rowsPerPageOptions={[10, 30, 50, 100]}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pageSize={pageSize}
              />
            </Paper>
          </Grid>
          <Grid item sx={{ width: "20rem" }}>
            <PointSearch />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
