import React from "react";
import {
  Box,
  Paper,
  TextField,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
  Autocomplete,
} from "@mui/material";

const Dropdown = (props) => {
  // const [selection, setSelection] = React.useState("");

  return (
    <>
      {/* <p>{JSON.stringify(selection)}</p> */}
      <TextField
        id="outlined-required"
        fullWidth
        label={props.label}
        // onChange={(e) => {
        //   setSelection(e.target.value);
        // }}
        onChange={props.onChange}
        InputLabelProps={{ shrink: true }}
        required={props.required}
        multiline={props.multiline}
        rows={4}
      />
    </>
  );
};

export default Dropdown;
