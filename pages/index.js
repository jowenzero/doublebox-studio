import Layout from "../components/Layout";
import {
  Grid,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NextSeo } from "next-seo"

import Slider from "react-slick";
import SliderWrapper from "../components/SlickSliderStyle"
import MiniSliderWrapper from "../components/MiniSlickSliderStyle"

const useStyles = makeStyles(theme => ({
  quoteWrap: {
    overflow: "hidden",
    marginLeft: 0,
    marginRight: 0
  },
}));

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  speed: 500,
  arrows: false,
  adaptiveHeight: true,
  appendDots: dots => <ul>{dots}</ul>,
  customPaging: i => (
    <div className="ft-slick__dots--custom">
    </div>
  )
};

const homeImg = [
  {
    image: "/images/home-1.png",
  },
  {
    image: "/images/home-2.png",
  },
  {
    image: "/images/home-3.png",
  },
];

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Layout>
        <NextSeo title="Home" />

        <Grid container style={{marginBottom: 70}}>
          <Grid item xs={12}>
            <div className={classes.quoteWrap}>
              { isMobile ?
                <MiniSliderWrapper>
                  <Slider {...settings}>
                    {homeImg.map((item, index) => (
                      <img src={item.image} alt="" style={{ width: '100%', height: 'auto' }} />
                    ))}
                  </Slider>
                </MiniSliderWrapper> :
                <SliderWrapper>
                  <Slider {...settings}>
                    {homeImg.map((item, index) => (
                      <img src={item.image} alt="" style={{ width: '100%', height: 'auto' }} />
                    ))}
                  </Slider>
                </SliderWrapper>
              }
            </div>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              style={{ 
                paddingLeft: isMobile ? 20 : 50, 
                paddingRight: isMobile ? 20 : 50, 
              }}
              direction="row"
              justify="center"
              alignItems="center"
            >  
              <Typography 
                variant="body2" 
                style={{
                  color: "#D89C7A", 
                  fontSize: isMobile ? 34 : 64, 
                  marginBottom: 15,
                }}
              >
                N<span style={{color: "#C689B2"}}>E</span>WS
              </Typography>

              <ButtonBase style={{ width: '100%', height: '100%', marginBottom: isMobile ? 10 : 25 }}>
                <img
                  src="/images/news-1.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </ButtonBase>

              <Grid item xs={4} style={{ textAlign: 'left' }}>
                <ButtonBase style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
                  <img
                    src="/images/news-2.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                  />
                </ButtonBase>
              </Grid>

              <Grid item xs={4} style={{ textAlign: 'center' }}>
                <ButtonBase style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
                  <img
                    src="/images/news-3.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                  />
                </ButtonBase>
              </Grid>

              <Grid item xs={4} style={{ textAlign: 'right' }}>
                <ButtonBase style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
                  <img
                    src="/images/news-4.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                  />
                </ButtonBase>
              </Grid>

              <ButtonBase style={{ 
                width: isMobile ? 180 : 300, 
                height: isMobile ? 40 : 57, 
                background: 'rgba(217, 101, 34, 0.2)', 
                marginTop: isMobile ? 35 : 50
              }}>
                <Typography 
                  variant="body1" 
                  style={{
                    color: "#fff", 
                    fontSize: isMobile ? 18 : 24, 
                  }}
                >
                  VIEW ALL
                </Typography>
              </ButtonBase>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} style={{ marginTop: 50 }}>
            <Grid
              container
              style={{ 
                paddingLeft: isMobile ? 20 : 50, 
                paddingRight: isMobile ? 20 : 50, 
              }}
              direction="row"
              justify="center"
              alignItems="center"
            >  
              <Typography 
                variant="body2" 
                style={{
                  color: "#D89C7A", 
                  fontSize: isMobile ? 34 : 64, 
                  marginBottom: 15,
                }}
              >
                N<span style={{color: "#C689B2"}}>E</span>WS
              </Typography>

              <ButtonBase style={{ width: '100%', height: '100%', marginBottom: isMobile ? 10 : 25 }}>
                <img
                  src="/images/news-1.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </ButtonBase>

              <Grid item xs={4} style={{ textAlign: 'left' }}>
                <ButtonBase style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
                  <img
                    src="/images/news-2.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                  />
                </ButtonBase>
              </Grid>

              <Grid item xs={4} style={{ textAlign: 'center' }}>
                <ButtonBase style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
                  <img
                    src="/images/news-3.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                  />
                </ButtonBase>
              </Grid>

              <Grid item xs={4} style={{ textAlign: 'right' }}>
                <ButtonBase style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
                  <img
                    src="/images/news-4.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                  />
                </ButtonBase>
              </Grid>

              <ButtonBase style={{ 
                width: isMobile ? 180 : 300, 
                height: isMobile ? 40 : 57, 
                background: 'rgba(217, 101, 34, 0.2)', 
                marginTop: isMobile ? 35 : 50
              }}>
                <Typography 
                  variant="body1" 
                  style={{
                    color: "#fff", 
                    fontSize: isMobile ? 18 : 24, 
                  }}
                >
                  VIEW ALL
                </Typography>
              </ButtonBase>
            </Grid>
          </Grid> */}
        </Grid>
      </Layout>
    </>
  );
}

export default Home;