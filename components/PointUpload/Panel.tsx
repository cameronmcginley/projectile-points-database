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
import { countries } from "../../constants/countries";
import { shapes } from "../../constants/shapes";
import StatesMap from "../StatesMap";
import Dropdown from "./Dropdown";
import TextField from "./TextField";

const Panel = () => {
  const [name, setName] = React.useState("");

  return (
    <>
      <TextField
        label={"Name"}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <Button
        onClick={() => {
          alert("test");
        }}
      >
        Click Me
      </Button>
    </>
  );
};

export default Panel;
