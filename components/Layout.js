import React from "react";
import NavBar from "./NavBar";
import MiniFooterSocial from "./MiniFooterSocial";
import Footer from "./Footer";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
    background: "#221F1F",
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <main className={classes.mainWrap} style={{ minHeight: "100vh" }}>
        <Container maxWidth="xl" disableGutters>{props.children}</Container>
      </main>
      <MiniFooterSocial />
      <Footer />
    </div>
  );
};

export default Layout;
