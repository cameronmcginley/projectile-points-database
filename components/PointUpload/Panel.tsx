import React from "react";
import theme from "../palette";
import {
  Box,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
  Typography,
  Button,
} from "@mui/material";
import Dropdown from "./Dropdown";
import TextField from "./TextField";
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
  const [point_canadian_period, set_point_canadian_period] = React.useState([]);
  const [point_cultural_period, set_point_cultural_period] = React.useState([]);
  const [point_culture, set_point_culture] = React.useState([]);
  const [point_environment, set_point_environment] = React.useState([]);
  const [point_phase, set_point_phase] = React.useState([]);
  const [point_tradition, set_point_tradition] = React.useState([]);
  const [point_year_range_start, set_point_year_range_start] =
    React.useState(0);
  const [point_year_range_start_type, set_point_year_range_start_type] =
    React.useState("");
  const [point_year_range_end, set_point_year_range_end] = React.useState(0);
  const [point_year_range_end_type, set_point_year_range_end_type] =
    React.useState("");
  const [point_variant, set_point_variant] = React.useState("");
  const [point_short_for, set_point_short_for] = React.useState("");
  const [point_aka, set_point_aka] = React.useState([]);
  const [point_cluster, set_point_cluster] = React.useState("");
  const [point_point_validity, set_point_point_validity] = React.useState("");
  const [point_description, set_point_description] = React.useState("");
  const [point_similar_point, set_point_similar_point] = React.useState([]);

  return (
    <>
      <MultiTextField
        label={"Named By"}
        // onChange={(e, new_val) => {
        //   set_point_namers(new_val);
        // }}
        returnValues={(values) => {
          set_point_namers(values);
        }}
      />

      <TextField
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

      {/* How to handle multiple, and textfield going into array? */}
      <TextField
        label={"Named By"}
        onChange={(e) => {
          set_point_namers(e.target.value);
        }}
      />

      <TextField
        label={"Named For"}
        onChange={(e) => {
          set_point_named_for(e.target.value);
        }}
      />

      <TextField
        label={"Year Identified"}
        onChange={(e) => {
          set_point_year_identified(e.target.value);
        }}
      />

      <TextField
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

      <TextField
        label={"Year Range Start"}
        onChange={(e) => {
          set_point_year_range_start(e.target.value);
        }}
      />

      <Dropdown
        label={"BP/AD"}
        onChange={(e, new_val) => {
          set_point_year_range_start_type(new_val);
        }}
        options={["1", "2", "3"]}
      />

      <TextField
        label={"Year Range End"}
        onChange={(e) => {
          set_point_year_range_end(e.target.value);
        }}
      />

      <Dropdown
        label={"BP/AD"}
        onChange={(e, new_val) => {
          set_point_year_range_end_type(new_val);
        }}
        options={["1", "2", "3"]}
      />

      <Button
        onClick={() => {
          // alert("test");
          console.log(point_namers);
        }}
      >
        Click Me
      </Button>
    </>
  );
};

export default Panel;
