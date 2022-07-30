import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

// Returns the single card with given title, desc, link
const DetailTable = (props) => {
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

    // if (data[0][0] === "Named By" && typeof data[0][1] === "object") {
    //   console.log("Wut");
    //   let dataCopy = [...data];
    //   dataCopy[0][1] = "Names";
    //   setData(dataCopy);
    // }
  }, []);

  return (
    <Paper>
      <TableContainer sx={{ p: 1 }}>
        <Table size="small" aria-label="simple table">
          <TableBody>
            {props.data.map((item) => {
              console.log(item);
              if (item[1])
                return (
                  <TableRow key={item[0]}>
                    <TableCell>{item[0]}</TableCell>
                    <TableCell>{item[1]}</TableCell>
                  </TableRow>
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DetailTable;
