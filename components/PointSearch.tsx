import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
} from "@mui/material";

const PointSearch = () => {
  const [searchName, setSearchName] = React.useState(null);
  const [searchShape, setSearchShape] = React.useState(null);
  const [searchSize, setSearchSize] = React.useState(null);
  const [searchCulturalPeriod, setSearchCulturalPeriod] = React.useState(null);
  const [searchValidity, setSearchValidity] = React.useState(null);
  const [searchStates, setSearchStates] = React.useState([]);

  // Array of states
  let states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
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

      {/* <TextField
        autoComplete
        value={searchState}
        label="State"
        onChange={(e) => {
          setSearchState(e.target.value);
        }}
      >
        {states.map((state) => {
          return <MenuItem value={state.toLowerCase()}>{state}</MenuItem>;
        })}
      </TextField> */}
      <Autocomplete
        multiple
        options={states}
        renderInput={(params) => <TextField {...params} label="State" />}
      />
    </Box>
  );
};

export default PointSearch;
