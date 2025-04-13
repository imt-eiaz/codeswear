import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";
import Employees from "../pages/Employees/Employees.js";
// import PageHeader from "../components/PageHeader";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      light: "#6fbf73",
    },
    secondary: {
      main: "#ffeb3b",
      light: "#ffef62",
    },
    background: {
      default: "#fff",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
        flexDirection: "row-reverse",
      },
    },
  },
  components: {
    MuiIconButton: {
      // defaultProps: {
      // MuiIconButton: {
      disableRipple: false,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        {/* <DataTable /> */}
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
