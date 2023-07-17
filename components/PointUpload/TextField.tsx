import { TextField } from "@mui/material";

const Dropdown = (props: any) => {
  // const [selection, setSelection] = React.useState("");

  return (
    <>
      {/* <p>{JSON.stringify(selection)}</p> */}
      <TextField
        id="outlined-required"
        fullWidth
        label={props.label}
        // onChange={(e) => {
        //   setSelection(e.target.value);
        // }}
        onChange={props.onChange}
        InputLabelProps={{ shrink: true }}
        required={props.required}
        multiline={props.multiline}
        rows={4}
        value={props.value}
      />
    </>
  );
};

export default Dropdown;
