import React from "react";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import LayoutData from "../../components/layouts/data";

import { dehydrate, useQuery } from "react-query";
import { queryClient, getPoints } from "../../src/api";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

const columns: GridColDef[] = [
  // { field: "name", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name" },
  { field: "shape", headerName: "Shape" },
  { field: "size", headerName: "Size" },
  { field: "culture", headerName: "Cultural Period" },
  { field: "point_validity", headerName: "Validity" },
  // { field: "firstName", headerName: "First name", width: 130 },
  // { field: "lastName", headerName: "Last name", width: 130 },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

export async function getServerSideProps() {
  await queryClient.prefetchQuery("points", () => getPoints());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const Courses: NextPageWithLayout = () => {
  const [pageSize, setPageSize] = React.useState<number>(30);

  const { data } = useQuery(["points"], () => getPoints());

  return (
    <>
      <p>Points Index</p>
      {/* {data.points.map((item) => {
        return <p>{item.name}</p>;
      })} */}
      <div>{JSON.stringify(data)}</div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.name}
          rows={data.points}
          columns={columns}
          // pageSize={30}
          rowsPerPageOptions={[10, 30, 50, 100]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pageSize={pageSize}
          // checkboxSelection
        />
      </div>
    </>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <LayoutData>{page}</LayoutData>;
};

export default Courses;
