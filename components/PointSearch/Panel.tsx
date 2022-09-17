import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { countries } from "../../constants/countries";
import theme from "../palette";
import Dropdown from "./Dropdown";
import TextField from "./TextField";

interface StateOption {
  state_name: string;
  country_name: string;
}

const Panel = () => {
  const [searchName, setSearchName] = React.useState([]);
  const [searchShape, setSearchShape] = React.useState([]);
  const [searchSize, setSearchSize] = React.useState([]);
  const [searchCulturalPeriod, setSearchCulturalPeriod] = React.useState([]);
  const [searchValidity, setSearchValidity] = React.useState([]);
  const [searchStates, setSearchStates] = React.useState([]);

  // Convert states to array of objs
  const state_options: StateOption[] = [];
  countries.forEach((country_obj) => {
    country_obj["states"].forEach((state_str) => {
      state_options.push({
        state_name: state_str,
        country_name: country_obj.name,
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            fontWeight: 700,
            color: theme.palette.text,
            textDecoration: "none",
          }}
        >
          Search
        </Typography>
      </Box>
      <TextField options={state_options} label={"Name"} />
      {/* <Dropdown options={state_options} label={"State"} /> */}
      <Dropdown options={state_options} label={"Shape"} />
      <Dropdown options={state_options} label={"Size"} />
      <Dropdown options={state_options} label={"Cultural Period"} />
    </Paper>
  );
};

export default Panel;
