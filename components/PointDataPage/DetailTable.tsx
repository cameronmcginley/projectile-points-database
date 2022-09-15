import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

// Returns the single card with given title, desc, link
const DetailTable = (props: any) => {
  // Preprocess all data into strings
  const test = () => {
    console.log("y");
  };
  console.log(props.data);

  const [data, setData] = React.useState(props.data);

  // Convert known non-strings into strings
  React.useEffect(() => {
    // Convert Date
    // Originally stored as: [[ 'Date', [ <dateStart>, 'BP', <dateEnd>, 'BP' ] ], ...]
    if (data[0][0] === "Date" && typeof data[0][1] === "object") {
      let dataCopy = [...data];
      dataCopy[0][1] =
        dataCopy[0][1][0] +
        " " +
        dataCopy[0][1][1] +
        " - " +
        dataCopy[0][1][2] +
        " " +
        dataCopy[0][1][3];

      setData(dataCopy);
    }

    if (data[0][0] === "Named By" && typeof data[0][1] === "object") {
      let dataCopy = [...data];
      dataCopy[0][1] = dataCopy[0][1].join(", ");
      setData(dataCopy);
    }
  }, []);

  return (
    // Dont render if completely empty
    <>
      {data && (
        <Box
          className="datapage-box"
          sx={{
            mb: 2,
          }}
        >
          <TableContainer sx={{ p: 1 }}>
            <Table size="small" aria-label="simple table">
              <TableBody>
                {props.data.map((item) => {
                  if (item[1])
                    return (
                      <TableRow
                        key={item[0]}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{item[0]}</TableCell>
                        <TableCell>{item[1]}</TableCell>
                      </TableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default DetailTable;
