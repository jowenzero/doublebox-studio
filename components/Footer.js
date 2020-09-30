import { 
  Typography, 
  Link, 
  Grid, 
  Container,
  IconButton,
 } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Pattern from "../public/images/pattern.svg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    background: "#221f1f",
    backgroundImage: `url(${Pattern})`,
  }
}));

const policyMenu = [
  {
    label: "ADS AND USAGE",
    path: "#"
  },
  {
    label: "TERMS AND CONDITIONS",
    path: "#"
  },
  {
    label: "TERMS OF SERVICE",
    path: "#"
  },
  {
    label: "PRIVACY POLICY",
    path: "#"
  },
  {
    label: "SUPPORT",
    path: "#"
  }
];

const menus = [
  {
    label: "About Us",
    path: "#"
  },
  {
    label: "FAQ",
    path: "#"
  },
  {
    label: "News",
    path: "#"
  },
  {
    label: "Gallery",
    path: "#"
  },
];

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.mainWrap}>
      <Container maxWidth="xl" disableGutters>
        { isMobile ?
          <>
            <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{
              paddingTop: 35,
              paddingBottom: 30,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
              <Grid item style={{ flexDirection: "row"}}>
                <Grid container direction="row" style={{ flexDirection: "row" }}>
                  <IconButton
                    style={{ 
                      width: 44, 
                      height: 44, 
                      opacity: 0.6,
                      borderRadius: 0, 
                      color: "#fff"
                    }}
                    disableRipple
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#fff", 
                      fontSize: 18, 
                      opacity: 0.6,
                      width: 250,
                      textAlign: 'center',
                      fontStyle: "italic",
                    }}
                  >
                    “The passionate will always be 
                    the passionate, and nothing change that”
                  </Typography>
                  <IconButton
                    style={{ 
                      width: 44, 
                      height: 44, 
                      opacity: 0.6,
                      borderRadius: 0, 
                      color: "#fff"
                    }}
                    disableRipple
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid item style={{ flexDirection: "column", textAlign: 'center', marginTop: 30, marginBottom: 30 }}>
                {menus.map((item, i) => (
                  <Link href={item.path} key={i}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      style={{
                        color: "#fff", 
                        fontSize: 18, 
                        opacity: 0.6,
                        marginBottom: 6,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Grid>

              <Grid item style={{ flexDirection: "row" }}>
                <Link href="/">
                  <a>
                    <img
                      style={{ width: 42, height: 42 }}
                      src="/icons/doublebox-logo.svg"
                      alt=""
                    />
                  </a>
                </Link>
                <Typography 
                  variant="body1" 
                  style={{
                    color: "#fff", 
                    fontWeight: 'normal', 
                    fontSize: 24, 
                    marginLeft: 55,
                    marginTop: -43,
                  }}
                >
                  DoubleBox Studio
                </Typography>

                <div style={{ marginTop: 14 }}>
                  { policyMenu.map((item, key) => (
                    <Link href={item.path} key={key}>
                      <Typography 
                        variant="body1" 
                        style={{
                          color: "#fff", 
                          fontWeight: 'normal', 
                          fontSize: 10, 
                          opacity: 0.5,
                          textDecoration: 'underline',
                          marginBottom: 2,
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  ))}
                </div>

                <Typography
                  gutterBottom
                  variant="body2"
                  style={{
                    color: "#fff", 
                    fontSize: 24, 
                    opacity: 0.6,
                    marginTop: 0,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}
                >
                  contact
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  style={{
                    color: "#fff", 
                    fontWeight: 'normal', 
                    fontSize: 18, 
                    opacity: 0.6,
                    textDecoration: 'underline',
                    marginBottom: 5,
                    textAlign: 'center',
                  }}
                >
                  themaiketsubros@gmail.com
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  style={{
                    color: "#fff", 
                    fontWeight: 'normal', 
                    fontSize: 18, 
                    opacity: 0.6,
                    marginBottom: 5,
                    textAlign: 'center',
                  }}
                >
                  vagousallianceads@gmail.com
                </Typography>
              </Grid>
            </Grid>

            <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
              <Typography
                gutterBottom
                variant="body1"
                style={{
                  color: "#fff", 
                  fontWeight: 'normal', 
                  fontSize: 10, 
                  fontStyle: "italic",
                  opacity: 0.5,
                  marginBottom: 2,
                  textAlign: 'center',
                }}
              >
                Doublebox StudioTM est.2020. All Rights Reserved. 
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                style={{
                  color: "#fff", 
                  fontWeight: 'normal', 
                  fontSize: 10, 
                  fontStyle: "italic",
                  opacity: 0.5,
                  marginBottom: 2,
                  textAlign: 'center',
                }}
              >
                Doublebox.id and the Doublebox Logo are trademarks of DoubleBox Studio internationally
              </Typography>
            </Grid>
          </> :
          <>
            <Grid container item xs={12} direction="row" justify="space-between" style={{
              paddingTop: 45,
              paddingBottom: 30,
              paddingLeft: 50,
              paddingRight: 50,
            }}>
              <Grid item style={{ flexDirection: "row", width: 440 }}>
                <Link href="/">
                  <a>
                    <img
                      style={{ width: 42, height: 42 }}
                      src="/icons/doublebox-logo.svg"
                      alt=""
                    />
                  </a>
                </Link>
                <Typography 
                  variant="body1" 
                  style={{
                    color: "#fff", 
                    fontWeight: 'normal', 
                    fontSize: 24, 
                    marginLeft: 55,
                    marginTop: -43,
                  }}
                >
                  DoubleBox Studio
                </Typography>

                <div style={{ marginTop: 14 }}>
                  { policyMenu.map((item, key) => (
                    <Link href={item.path} key={key}>
                      <Typography 
                        variant="body1" 
                        style={{
                          color: "#fff", 
                          fontWeight: 'normal', 
                          fontSize: 10, 
                          opacity: 0.5,
                          textDecoration: 'underline',
                          marginBottom: 2,
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item style={{ flexDirection: "column", textAlign: 'center' }}>
                {menus.map((item, i) => (
                  <Link href={item.path} key={i}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      style={{
                        color: "#fff", 
                        fontSize: 18, 
                        opacity: 0.6,
                        marginBottom: 6,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Grid>

              <Grid item style={{ flexDirection: "row"}}>
                <Grid container direction="row" style={{ flexDirection: "row" }}>
                  <IconButton
                    style={{ 
                      width: 44, 
                      height: 44, 
                      opacity: 0.6,
                      borderRadius: 0, 
                      color: "#fff"
                    }}
                    disableRipple
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#fff", 
                      fontSize: 18, 
                      opacity: 0.6,
                      width: 350,
                      textAlign: 'center',
                      fontStyle: "italic",
                    }}
                  >
                    “The passionate will always be 
                    the passionate, and nothing change that”
                  </Typography>
                  <IconButton
                    style={{ 
                      width: 44, 
                      height: 44, 
                      opacity: 0.6,
                      borderRadius: 0, 
                      color: "#fff"
                    }}
                    disableRipple
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Grid>

                <Typography
                  gutterBottom
                  variant="body2"
                  style={{
                    color: "#fff", 
                    fontSize: 24, 
                    opacity: 0.6,
                    marginTop: 63,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}
                >
                  contact
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  style={{
                    color: "#fff", 
                    fontWeight: 'normal', 
                    fontSize: 18, 
                    opacity: 0.6,
                    textDecoration: 'underline',
                    marginBottom: 5,
                    textAlign: 'center',
                  }}
                >
                  themaiketsubros@gmail.com
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  style={{
                    color: "#fff", 
                    fontWeight: 'normal', 
                    fontSize: 18, 
                    opacity: 0.6,
                    marginBottom: 5,
                    textAlign: 'center',
                  }}
                >
                  vagousallianceads@gmail.com
                </Typography>
              </Grid>
            </Grid>

            <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{
              paddingBottom: 30,
              paddingLeft: 50,
              paddingRight: 50,
            }}>
              <Typography
                gutterBottom
                variant="body1"
                style={{
                  color: "#fff", 
                  fontWeight: 'normal', 
                  fontSize: 10, 
                  fontStyle: "italic",
                  opacity: 0.5,
                  marginBottom: 2,
                  textAlign: 'center',
                }}
              >
                Doublebox StudioTM est.2020. All Rights Reserved. 
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                style={{
                  color: "#fff", 
                  fontWeight: 'normal', 
                  fontSize: 10, 
                  fontStyle: "italic",
                  opacity: 0.5,
                  marginBottom: 2,
                  textAlign: 'center',
                }}
              >
                Doublebox.id and the Doublebox Logo are trademarks of DoubleBox Studio internationally
              </Typography>
            </Grid>
          </>
        }
      </Container>
    </div>
  );
};

export default Footer;
