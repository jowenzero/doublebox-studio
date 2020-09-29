import { createMuiTheme } from "@material-ui/core/styles";

const gothic = {
  fontFamily: "Gothic",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "normal",
  src: `
    url('/fonts/Gothic-Regular.ttf') format("truetype")
  `
};

const gothicBold = {
  fontFamily: "Gothic",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "bold",
  src: `
    url('/fonts/Gothic-Bold.ttf') format("truetype")
  `
};

const gothicItalic = {
  fontFamily: "Gothic",
  fontStyle: "italic",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url('/fonts/Gothic-Italic.ttf') format("truetype")
  `
};

const gothicBoldItalic = {
  fontFamily: "Gothic",
  fontStyle: "italic",
  fontDisplay: "swap",
  fontWeight: "bold",
  src: `
    url('/fonts/Gothic-BoldItalic.ttf') format("truetype")
  `
};

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#221F1F"
    },
    grey: {
      "100": "#F0F2F5",
      "300": "#8A8C90",
      "400": "#8A8C90"
    },
    common: {
      black: "#050505"
    },
    primary: {
      main: "#387AEF"
    },
    text: {
      primary: '#fff'
    }
  },
  typography: {
    body2: {
      fontWeight: "bold",
      fontSize: 14
    },
    button: {
      textTransform: "none"
    },
    h6: {
      fontWeight: "bold"
    },
    fontFamily: "Gothic,Arial"
  },
  overrides: {
    MuiContainer: {
      root: {
        marginLeft: 0,
        marginRight: 0
      }
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          gothic,
          gothicItalic,
          gothicBold,
          gothicBoldItalic
        ]
      }
    }
  }
});

export default theme;
