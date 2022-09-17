import { TextField } from "@mui/material";
import React from "react";

const Dropdown = (props: any) => {
  const [selection, setSelection] = React.useState("");

  return (
    <>
      {/* <p>{JSON.stringify(selection)}</p> */}
      <TextField
        id="outlined-required"
        fullWidth
        label="Name"
        onChange={(e) => {
          setSelection(e.target.value);
        }}
      />
    </>
  );
};

export default Dropdown;
