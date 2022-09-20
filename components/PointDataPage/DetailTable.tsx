import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

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
                {/* Only map if value is not "" or 0 (0 for both date ranges) */}
                {props.data.map((item: any) => {
                  if (
                    item[1] !== "" &&
                    item[1] !== null &&
                    item[1] !== undefined &&
                    item[1].length > 0
                  ) {
                    console.log(item);
                    return (
                      <TableRow
                        key={item[0]}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {/* Display key */}
                        <TableCell sx={{ width: "10rem" }}>{item[0]}</TableCell>
                        {/* Display the value, seperate if it's an array */}
                        {Array.isArray(item[1]) ? (
                          <TableCell>{item[1].join(", ")}</TableCell>
                        ) : (
                          <TableCell>{item[1]}</TableCell>
                        )}
                      </TableRow>
                    );
                  }
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
