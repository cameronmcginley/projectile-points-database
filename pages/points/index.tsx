import React from "react";
import theme from "../../components/palette";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutNavbar from "../../components/layouts/navbar";

import { dehydrate, useQuery } from "react-query";
import { queryClient, getPoints } from "../../src/api";

import { AppBar, Box, Typography, Container, Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import PointSearchPanel from "../../components/PointSearch/Panel";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 2,
    renderCell: (params) => (
      <a href={"/points/" + params.row.name_id}>{params.row.name}</a>
    ),
  },
  {
    field: "shape",
    headerName: "Shape",
    flex: 2,
    renderCell: (params) => {
      return params.row.shape.join(", ");
    },
  },
  { field: "size", headerName: "Size", flex: 1 },
  {
    field: "cultural_period",
    headerName: "Cultural Period",
    flex: 2,
    // cultural_period is array with 1 or 2 elements
    // 2 elements mean range of periods
    renderCell: (params) => {
      if (params.row.cultural_period.length > 1) {
        return (
          <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {params.row.cultural_period[0] +
              " to " +
              params.row.cultural_period[1]}
          </p>
        );
      }
    },
  },
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
  console.log(data);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Grid
          container
          spacing={2}
          sx={{
            minHeight: "70vh",
            width: "90%",
          }}
        >
          <Grid item xs className="points-table">
            <Paper sx={{ height: "100%", p: 1 }}>
              {/* Title */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text,
                    textDecoration: "none",
                  }}
                >
                  Projectile Points
                </Typography>
                <p>Select the three dots to filter columns.</p>
              </Box>

              {/* Datagrid */}
              {data && (
                <DataGrid
                  autoHeight
                  disableSelectionOnClick
                  // Disables menu for filtering, hiding cols, etc.
                  // disableColumnMenu
                  getRowId={(row) => row.name}
                  rows={data.points}
                  columns={columns}
                  // Handle table size for changing height
                  rowsPerPageOptions={[10, 30, 50, 100]}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  pageSize={pageSize}
                />
              )}
            </Paper>
          </Grid>
          {/* <Grid item className="points-search">
            <PointSearchPanel />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Courses;
