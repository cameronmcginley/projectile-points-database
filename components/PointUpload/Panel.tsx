import React from "react";
import theme from "../palette";
import {
  Paper,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
  Typography,
  Button,
  Box,
  SelectChangeEvent,
  FormControl,
  TextField,
} from "@mui/material";
import Dropdown from "./Dropdown";
import CustomTextField from "./TextField";
import MultiTextField from "./MultiTextField";

const Panel = () => {
  const [point_name, set_point_name] = React.useState("");
  const [point_shape, set_point_shape] = React.useState([]);
  const [point_size, set_point_size] = React.useState([]);
  const [point_namers, set_point_namers] = React.useState([]);
  const [point_named_for, set_point_named_for] = React.useState("");
  const [point_year_identified, set_point_year_identified] = React.useState(0);
  const [point_type_site, set_point_type_site] = React.useState("");
  const [point_glacial_period, set_point_glacial_period] = React.useState([]);
  // const [point_canadian_period, set_point_canadian_period] = React.useState([]);
  const [point_cultural_period, set_point_cultural_period] = React.useState([]);
  // const [point_culture, set_point_culture] = React.useState([]);
  // const [point_environment, set_point_environment] = React.useState([]);
  // const [point_phase, set_point_phase] = React.useState([]);
  // const [point_tradition, set_point_tradition] = React.useState([]);
  const [point_year_range_start, set_point_year_range_start] =
    React.useState(0);
  const [point_year_range_start_type, set_point_year_range_start_type] =
    React.useState("BP");
  const [point_year_range_end, set_point_year_range_end] = React.useState(0);
  const [point_year_range_end_type, set_point_year_range_end_type] =
    React.useState("BP");
  const [point_variant, set_point_variant] = React.useState("");
  const [point_short_for, set_point_short_for] = React.useState("");
  const [point_aka, set_point_aka] = React.useState([]);
  // const [point_cluster, set_point_cluster] = React.useState("");
  const [point_point_validity, set_point_point_validity] = React.useState("");
  const [point_description, set_point_description] = React.useState("");
  // const [point_similar_point, set_point_similar_point] = React.useState([]);

  return (
    <>
      <Box
        sx={{
          maxWidth: "50rem",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        {/* Column One */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",
          }}
        >
          <CustomTextField
            required={true}
            label={"Name"}
            onChange={(e) => {
              set_point_name(e.target.value);
            }}
          />

          <Dropdown
            label={"Shape"}
            onChange={(e, new_val) => {
              set_point_shape(new_val);
            }}
            options={["1", "2", "3"]}
          />

          <Dropdown
            label={"Size"}
            onChange={(e, new_val) => {
              set_point_size(new_val);
            }}
            options={["1", "2", "3"]}
          />

          <MultiTextField
            label={"Named By (Press Enter to Separate Names)"}
            returnValues={(values) => {
              set_point_namers(values);
            }}
          />

          <CustomTextField
            label={"Named For"}
            onChange={(e) => {
              set_point_named_for(e.target.value);
            }}
          />

          <CustomTextField
            label={"Year Identified"}
            onChange={(e) => {
              set_point_year_identified(e.target.value);
            }}
          />

          <CustomTextField
            label={"Type Site"}
            onChange={(e) => {
              set_point_type_site(e.target.value);
            }}
          />

          <Dropdown
            label={"Glacial Period"}
            onChange={(e, new_val) => {
              set_point_glacial_period(new_val);
            }}
            options={["1", "2", "3"]}
          />

          <Dropdown
            label={"Cultural Period"}
            onChange={(e, new_val) => {
              set_point_cultural_period(new_val);
            }}
            options={["1", "2", "3"]}
          />

          {/* Column Two */}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",
          }}
        >
          {/* Year Start */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CustomTextField
              label={"Year Range Start"}
              onChange={(e) => {
                set_point_year_range_start(e.target.value);
              }}
            />

            <Select
              value={point_year_range_start_type}
              onChange={(e: SelectChangeEvent) => {
                set_point_year_range_start_type(e.target.value);
              }}
            >
              <MenuItem value={"BP"}>BP</MenuItem>
              <MenuItem value={"AD"}>AD</MenuItem>
            </Select>
          </Box>

          {/* Year End */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CustomTextField
              label={"Year Range End"}
              onChange={(e) => {
                set_point_year_range_end(e.target.value);
              }}
            />

            <Select
              value={point_year_range_start_type}
              onChange={(e: SelectChangeEvent) => {
                set_point_year_range_end_type(e.target.value);
              }}
            >
              <MenuItem value={"BP"}>BP</MenuItem>
              <MenuItem value={"AD"}>AD</MenuItem>
            </Select>
          </Box>

          <CustomTextField
            label={"Variant"}
            onChange={(e) => {
              set_point_variant(e.target.value);
            }}
          />

          <CustomTextField
            label={"Short For"}
            onChange={(e) => {
              set_point_short_for(e.target.value);
            }}
          />

          <MultiTextField
            label={"AKA (Press Enter to Separate Multiple)"}
            returnValues={(values) => {
              set_point_aka(values);
            }}
          />

          {/*
            <MenuItem value={"Valid Type"}>Valid</MenuItem>
            <MenuItem value={"Collector Type"}>Collector</MenuItem>
            <MenuItem value={"Provisional Type"}>Provisional</MenuItem>
            <MenuItem value={"Variant Type"}>Variant</MenuItem>
            <MenuItem value={"AKA Type"}>AKA</MenuItem>
            <MenuItem value={"Cultural Type"}>Cultural</MenuItem>
        */}
          <TextField
            select
            value={point_point_validity}
            onChange={(e: SelectChangeEvent) =>
              set_point_point_validity(e.target.value)
            }
            label="Point Validity"
            InputLabelProps={{ shrink: true }}
          >
            <MenuItem key={1} value="test">
              Test 1
            </MenuItem>
            <MenuItem key={2} value="test2">
              Test 2
            </MenuItem>
          </TextField>

          <CustomTextField
            label={"Description (Supports Markdown)"}
            onChange={(e) => {
              set_point_description(e.target.value);
            }}
            multiline={true}
          />

          {/* Submit button */}
          <Button
            onClick={() => {
              // alert("test");
              console.log(point_namers);
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Panel;
