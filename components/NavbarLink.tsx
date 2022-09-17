import { Button } from "@mui/material";

const NavbarLink = (props: any) => {
  return (
    <>
      <Button
        sx={{
          height: "100%",
          border: 0,
          //   borderRight: 1,
          //   borderLeft: 1,
          borderRadius: 0,
          p: 2,
          "&:hover": {
            borderTop: 0,
            borderBottom: 0,
          },
        }}
        href={props.link}
        variant="outlined"
      >
        {props.text}
      </Button>
    </>
  );
};
export default NavbarLink;
