import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const sectionMargin = margin => margin * 15;
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    paddingTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50
    }
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <main className={classes.mainWrap} style={{ minHeight: "100vh" }}>
        <Container maxWidth="xl">{props.children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
