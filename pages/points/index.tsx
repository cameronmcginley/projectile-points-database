import React from "react";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutData from "../../components/layouts/data";

import { dehydrate, useQuery } from "react-query";
import { queryClient, getPoints } from "../../src/api";

import { AppBar, Box, Typography, Container } from "@mui/material";
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
      <PointSearch />
      <Box>
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
      </Box>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
