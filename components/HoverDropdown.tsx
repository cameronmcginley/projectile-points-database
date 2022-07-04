import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const HoverDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button href="#text-buttons" variant="outlined" sx={{ color: "white" }}>
        Outlined
      </Button>
    </div>
  );
};

export default HoverDropdown;
