import Layout from "../components/Layout";
import {
  Grid,
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

        <Grid container spacing={2} style={{marginBottom: 70}}>
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
            <div className="logo-head">
              <img src="/next-white.svg" alt="Next Logo" className="logo" />
              <img src="/cross.svg" alt="Cross" className="cross" />
              <img src="/icons/doublebox-logo.svg" alt="DoubleBox Studio Logo" className="logo" />
            </div>
          </Grid>
        </Grid>

        <style jsx>{`
          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title-head {
            font-size: 2rem;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: left;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            max-width: 584px;
            padding: 10px;
          }

          code {
            background: #050505;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .logo-head {
            display: flex;
            flex-direction: column;
            padding: 20px;
            align-items: center;
          }

          .logo {
            height: 120px;
          }

          .cross {
            width: 20px;
            height: 20px;
            margin-top: 30px;
            margin-bottom: 30px;
          }
        `}</style>
      </Layout>
    </>
  );
}

export default Home;