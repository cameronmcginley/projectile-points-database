import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

// Returns the single card with given title, desc, link
const HeaderData = (props: any) => {
  return (
    <Box
      className="datapage-box"
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h3">{props.name}</Typography>

      {/* Header data */}
      <TableContainer sx={{ p: 1, width: "auto" }}>
        <Table size="small" aria-label="simple table" style={{ width: "auto" }}>
          <TableBody>
            {props.headerData.map((item) => {
              // Only show the field if value not null
              if (item[1]) {
                // Check arrays are actually populated
                if (typeof item[1] === "object" && item[1][0]) {
                  return (
                    <TableRow key={item[0]} sx={{ "& td": { border: 0 } }}>
                      {/* Name */}
                      <TableCell sx={{ pb: 0 }} align="right">
                        {item[0] + ":"}
                      </TableCell>

                      {/* String fields */}
                      {item[0] !== "AKA" && (
                        <TableCell sx={{ pl: 0, pb: 0 }}>{item[1]}</TableCell>
                      )}

                      {/* Array fields */}
                      {item[0] === "AKA" && (
                        <TableCell sx={{ pl: 0, pb: 0 }}>
                          {/* {item[1].map((aka, index) => {
                            return (index ? ", " : "") + aka;
                          })} */}
                          {item[1].join(", ")}
                          {/* {console.log(item[1])}  */}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                }
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HeaderData;
