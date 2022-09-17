import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const Dropdown = (props: any) => {
  const [selections, setSelections] = React.useState([]);
  // const [queryType, setQueryType] = React.useState("OR");

  return (
    <>
      {/* <p>{JSON.stringify(selections)}</p> */}
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

      {/* AND or OR for this selection */}
      {/* <Select
        value={queryType}
        onChange={(e: SelectChangeEvent) => {
          setQueryType(e.target.value as string);
        }}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"AND"}>AND</MenuItem>
        <MenuItem value={"OR"}>OR</MenuItem>
      </Select> */}
    </>
  );
};

export default Dropdown;
