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
import Slider from "react-slick";
import SliderWrapper from "../components/SlickSliderStyle"

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    background: "#221f1f",
    backgroundImage: `url(${Pattern})`,
  },
  quoteWrap: {
    marginLeft: 0,
    marginRight: 0
  },
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      style={{
        ...style, 
        width: 44, 
        height: 44, 
        opacity: 0.6,
        borderRadius: 0, 
        color: "#fff"
      }}
      className={className}
      onClick={onClick}
      disableRipple
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      style={{
        ...style, 
        width: 44, 
        height: 44, 
        opacity: 0.6,
        borderRadius: 0, 
        color: "#fff"
      }}
      className={className}
      onClick={onClick}
      disableRipple
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
}


const settings = {
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

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

const quotes = [
  {
    text: "The passionate will always be the passionate, and nothing change that",
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic",
  },
  {
    text: "If you find a good move, look for a better one",
  },
  {
    text: "Everybody in this country should learn to program a computer, because it teaches you how to think"
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
                <Grid
                  container
                  style={{ paddingLeft: 0, paddingRight: 0, marginTop: 0, height: 120 }}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <div className={classes.quoteWrap}>
                    <SliderWrapper>
                      <Slider {...settings} style={{width: 270}}>
                        {quotes.map((item, index) => (
                          <div>
                            <Typography
                              variant="body2"
                              style={{
                                color: "#fff", 
                                fontSize: 18, 
                                opacity: 0.6,
                                textAlign: 'center',
                                fontStyle: "italic",
                              }}
                            >
                              “{item.text}”
                            </Typography>
                          </div>
                        ))}
                      </Slider>
                    </SliderWrapper>
                  </div>
                </Grid>
              </Grid>

              <Grid item style={{ flexDirection: "column", textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
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

              <Grid item style={{ flexDirection: "row", width: 440}}>
                <Grid
                  container
                  style={{ paddingLeft: 0, paddingRight: 0, marginTop: 0, height: 100}}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <div className={classes.quoteWrap}>
                    <SliderWrapper>
                      <Slider {...settings} style={{width: 350}}>
                        {quotes.map((item, index) => (
                          <div>
                            <Typography
                              variant="body2"
                              style={{
                                color: "#fff", 
                                fontSize: 18, 
                                opacity: 0.6,
                                textAlign: 'center',
                                fontStyle: "italic",
                              }}
                            >
                              “{item.text}”
                            </Typography>
                          </div>
                        ))}
                      </Slider>
                    </SliderWrapper>
                  </div>
                </Grid>

                <Typography
                  gutterBottom
                  variant="body2"
                  style={{
                    color: "#fff", 
                    fontSize: 24, 
                    opacity: 0.6,
                    marginTop: 20,
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
