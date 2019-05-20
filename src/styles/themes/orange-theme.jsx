import { createMuiTheme } from "@material-ui/core/styles";

const orangeTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff7b1c",
      dark: "#cf6112",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#1c68ff",
      dark: "#1753cc",
      contrastText: "#ffffff"
    },
    error: {
      main: "#ed0400",
      dark: "#c70300",
      contrastText: "#ffffff"
    }
  },
  typography: { useNextVariants: true }
});

export default orangeTheme;
