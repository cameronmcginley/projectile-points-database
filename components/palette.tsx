import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1769aa",
      main: "#2196f3",
      dark: "#4dabf5",
      contrastText: "#fff",
    },
    text: "#444444",
    highlight: {
      main: "#c2e4ff",
      hover: "#F1F1F1",
    },
  },
});

export default theme;
