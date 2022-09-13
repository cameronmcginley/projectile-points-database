import React from "react";
import { TextField, Chip, InputAdornment } from "@mui/material";

const Dropdown = (props) => {
  const [values, setValues] = React.useState([]);
  const [currValue, setCurrValue] = React.useState();

  const handleKeyUp = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode == 13) {
      setValues((oldState) => [...oldState, e.target.value]);
      props.returnValues((oldState) => [...oldState, e.target.value]); //Copy back to parent
      setCurrValue("");
    }
  };

  const handleChange = (e) => {
    setCurrValue(e.target.value);
  };

  const handleDelete = (item, index) => {
    let arr = [...values];
    arr.splice(index, 1);
    // console.log(item);
    setValues(arr);
    props.returnValues(arr); //Copy back to parent
  };

  return (
    <>
      <TextField
        label={props.label}
        fullWidth
        value={currValue}
        onChange={handleChange}
        onKeyDown={handleKeyUp}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {
                <div>
                  {values.map((item, index) => (
                    <Chip
                      key={index}
                      onDelete={() => handleDelete(item, index)}
                      label={item}
                    />
                  ))}
                </div>
              }
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Dropdown;
