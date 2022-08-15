import React from "react";
import {
  Box,
  Paper,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import { states } from "../constants/states";

interface StateOption {
  state_key: string;
  state_name: string;
  country_name: string;
}

const PointSearch = () => {
  const [searchName, setSearchName] = React.useState(null);
  const [searchShape, setSearchShape] = React.useState(null);
  const [searchSize, setSearchSize] = React.useState(null);
  const [searchCulturalPeriod, setSearchCulturalPeriod] = React.useState(null);
  const [searchValidity, setSearchValidity] = React.useState(null);
  const [searchStates, setSearchStates] = React.useState([]);

  // Create state options array, where each state has associated
  // country in object
  const state_options: StateOption[] = [];
  Object.keys(states).forEach((country) => {
    states[country].forEach((state: string) => {
      state_options.push({
        state_key: state.toLowerCase(),
        state_name: state,
        country_name: country,
      });
    });
  });

  return (
    <Paper
      sx={{
        p: 1,
        height: "100%",
        "& .MuiTextField-root": { mb: 1 },
      }}
    >
      {/* <p>{searchState}</p> */}

      <TextField
        id="outlined-required"
        label="Name"
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />

      <TextField
        select
        value={searchShape}
        label="Shape"
        onChange={(e) => {
          setSearchShape(e.target.value);
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>

      <TextField
        select
        value={searchShape}
        label="Size"
        onChange={(e) => {
          setSearchShape(e.target.value);
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>

      <TextField
        select
        value={searchShape}
        label="Cultural Period"
        onChange={(e) => {
          setSearchShape(e.target.value);
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>

      <TextField
        // sx={{ width: "80%" }}
        // fullWidth
        select
        value={searchShape}
        label="Validity"
        onChange={(e) => {
          setSearchShape(e.target.value);
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>

      <Autocomplete
        multiple
        disableCloseOnSelect
        options={state_options}
        getOptionLabel={(option) => option.state_name}
        groupBy={(option) => option.country_name}
        renderInput={(params) => <TextField {...params} label="State" />}
      />
    </Paper>
  );
};

export default PointSearch;
