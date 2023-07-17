import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const Dropdown = (props: any) => {
  const [selections, setSelections] = React.useState(props.value);

  // Read in props.values to values
  React.useEffect(() => {
    setSelections(props.value);
  }, [props.value]);

  return (
    <>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={props.options}
        // Weird error on render with empty selections, default it to empty array
        value={selections ? selections : []}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            InputLabelProps={{ shrink: true }}
            sx={{ width: "20rem" }}
          />
        )}
        onChange={props.onChange}
      />
    </>
  );
};

export default Dropdown;
