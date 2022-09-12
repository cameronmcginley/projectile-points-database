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
  const [selections, setSelections] = React.useState([]);

  return (
    <>
      <p>{JSON.stringify(selections)}</p>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={props.options}
        getOptionLabel={(option) => option.state_name}
        groupBy={(option) => option.country_name}
        onChange={(e, new_val) => {
          setSelections(new_val);
        }}
        renderInput={(params) => <TextField {...params} label={props.label} />}
      />
    </>
  );
};

export default Dropdown;
