import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Grid,
  Dialog,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePoint, queryClient } from "../../src/api";
import { useRouter } from "next/router";

// Returns the single card with given title, desc, link
const HeaderData = (props: any) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    // Send data
    console.log("Deleting " + props.name_id);

    router.push("/points");

    await queryClient.fetchQuery("deletePoint", () =>
      deletePoint({ name_id: props.name_id })
    );
  };

  const handleEdit = async () => {
    console.log("Editing " + props.name_id);
    router.push("/points/" + props.name_id + "/edit");
  };

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
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3">{props.name}</Typography>
        </Grid>
        <Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
          {/* Edit Button */}
          <Button
            variant="text"
            onClick={() => {
              handleEdit();
            }}
          >
            Edit
          </Button>
          {/* Delete Button */}
          <IconButton
            aria-label="delete"
            onClick={() => {
              setDialogOpen(true);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>

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

      {/* Delete point dialog popup */}
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        <Box
          sx={{
            m: "5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p>Delete this projectile point permanently?</p>
          <Box sx={{ display: "flex", gap: "3rem" }}>
            <Button
              variant="outlined"
              onClick={() => {
                handleDelete();
              }}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setDialogOpen(false);
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default HeaderData;
