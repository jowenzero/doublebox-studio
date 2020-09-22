import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apolloClient";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../utils/theme";

import "../sass/scroll.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default withData(MyApp);
