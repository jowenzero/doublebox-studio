import Layout from "../components/Layout";
import {
  Grid,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NextSeo } from "next-seo"
import clsx from "clsx";

import Slider from "react-slick";
import SliderWrapper from "../components/SlickSliderStyle"
import MiniSliderWrapper from "../components/MiniSlickSliderStyle"

import StudioBG from "../public/images/studio-bg.png"
import ScrollMenu from 'react-horizontal-scrolling-menu';

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

const studioData = [
  {
    image: "/images/studio-1.png",
    title: "THE ULTIMATE GOAL",
    subtitle: "OUR GOALS FOR THE PASSIONATE",
    text: `Lorem ipsum dolor sit amet, nec case nusquam minimum no, ius id dolor verterem ullamcorper. Elitr regione no eos. Ullum populo vel no, viderer placerat accommodare ad pro. Mel quem illud instructior no, ex denique sapientem vix.

    Est veri choro id. Per stet homero et, sed falli phaedrum elaboraret et, ius elit inani pericula ea. An legere noster his, pri eripuit expetenda dissentiunt an, vim justo prompta argumentum id. Et sed nisl elit constituto, pro mutat primis equidem et, per ne laoreet facilisi phaedrum.`,
  },
  {
    image: "/images/studio-2.png",
    title: "THE WORKPLACE",
    subtitle: "WORKPLACE FOR THE COMFORT",
    text: `Mollis aliquando necessitatibus te vel. Cum purto mundi copiosae in, ut saperet dolorem volutpat pro. Id sit aperiam vivendo, ea mea facer petentium. No facilis corpora honestatis eam, et ridens dolorum qui. Mel causae reprimique an, convenire explicari deterruisset.

    Malis nominavi eloquentiam ea est, ius ei ancillae phaedrum vituperatoribus. Ut graece aliquando eos, ex fastidii verterem duo, sed cu sonet officiis periculis.`,
  },
  {
    image: "/images/studio-3.png",
    title: "THE FACILITIES",
    subtitle: "EVERYTHING THAT WE PROVIDE IS FOR USE",
    text: `Te pri iudico facilisi, has eu utamur equidem alienum. Quem iudicabit imperdiet duo an, esse necessitatibus at sed, zril eruditi ornatus id usu. Sententiae theophrastus vix an, ei utamur partiendo scribentur qui. Ad nam vitae eloquentiam. Eu purto graeci vis, qui possim everti splendide ei, ut pri velit ponderum scribentur.

    Lorem ipsum dolor sit amet, nec case nusquam minimum no, ius id dolor verterem ullamcorper. Mel quem illud instructior no, ex denique sapientem vix.`,
  },
  {
    image: "/images/studio-4.png",
    title: "THE COMMUNITY",
    subtitle: "ENCOURAGING COMPETITIVE MATES",
    text: `Est veri choro id. Per stet homero et, sed falli phaedrum elaboraret et, ius elit inani pericula ea. An legere noster his, pri eripuit expetenda dissentiunt an, vim justo prompta argumentum id. Et sed nisl elit constituto, pro mutat primis equidem et, per ne laoreet facilisi phaedrum. Solet delectus dignissim sea ut, at mei nonumes deterruisset, eos habeo dicit populo at. Ut ius case fugit constituam, eum an graeco repudiare.

    Mollis aliquando necessitatibus te vel. Cum purto mundi copiosae in, ut saperet dolorem volutpat pro.`,
  },
];

const featuredData = [
  {
    image: "/images/featured-1.png",
    title: "Podcast",
    text: `Malis nominavi eloquentiam ea est, ius ei ancillae phaedrum vituperatoribus. Ut graece aliquando eos, ex fastidii verterem duo, sed cu sonet officiis periculis. No graecis denique constituam sit, eros disputando per no. Ius eu docendi pertinax. Ei pri inermis conclusionemque. Qui no tamquam fierent maluisset, vidisse moderatius quo ut. Ullum fabellas in ius.`,
  },
  {
    image: "/images/featured-2.png",
    title: "Trailer",
    text: `Est veri choro id. Per stet homero et, sed falli phaedrum elaboraret et, ius elit inani pericula ea. An legere noster his, pri eripuit expetenda dissentiunt an, vim justo prompta argumentum id. Et sed nisl elit constituto, pro mutat primis equidem et, per ne laoreet facilisi phaedrum. Solet delectus dignissim sea ut, at mei nonumes deterruisset, eos habeo dicit populo at. `,
  },
  {
    image: "/images/featured-3.png",
    title: "Released",
    text: `Lorem ipsum dolor sit amet, nec case nusquam minimum no, ius id dolor verterem ullamcorper. Elitr regione no eos. Ullum populo vel no, viderer placerat accommodare ad pro. Mel quem illud instructior no, ex denique sapientem vix.`,
  },
  {
    image: "/images/featured-4.png",
    title: "Game",
    text: `Mollis aliquando necessitatibus te vel. Cum purto mundi copiosae in, ut saperet dolorem volutpat pro. Id sit aperiam vivendo, ea mea facer petentium. No facilis corpora honestatis eam, et ridens dolorum qui. Mel causae reprimique an, convenire explicari deterruisset ne vis. Cum an solet mollis deleniti, eius dignissim.`,
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

        <Grid container style={{marginBottom: 40}}>
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
                      <img src={item.image} alt="" key={index} style={{ width: '100%', height: 'auto' }} />
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
                paddingLeft: isMobile ? 20 : 200, 
                paddingRight: isMobile ? 20 : 200, 
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

              <ButtonBase disableRipple style={{ width: '100%', height: '100%', marginBottom: isMobile ? 10 : 25 }}>
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
                <ButtonBase disableRipple style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
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
                <ButtonBase disableRipple style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
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
                <ButtonBase disableRipple style={{ width: isMobile ? '92%' : '95%', height: 'auto' }}>
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

              <ButtonBase disableRipple style={{ 
                width: isMobile ? 180 : 300, 
                height: isMobile ? 40 : 57, 
                background: 'rgba(217, 101, 34, 0.2)', 
                marginTop: isMobile ? 35 : 50,
                marginBottom: isMobile ? 35 : 50,
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

          <Grid item xs={12} style={{ marginTop: 60 }}>
            <Grid
              container
              style={{ 
                background: '#403B3B',
                backgroundImage: `url(${StudioBG})`,
              }}
              direction="row"
              justify="center"
              alignItems="center"
            >  
              <Typography 
                variant="body2" 
                style={{
                  color: "#fff", 
                  fontSize: isMobile ? 34 : 64, 
                  marginTop: isMobile ? 25 : 40,
                  marginBottom: isMobile ? 25 : 40,
                }}
              >
                STUDIO
              </Typography>

              <div className={classes.quoteWrap}>
                <ScrollMenu
                  /* arrowLeft={<div style={{ fontSize: "30px", marginRight: 10 }}>{" < "}</div>}
                  arrowRight={<div style={{ fontSize: "30px", marginLeft: 10 }}>{" > "}</div>} */
                  itemStyle={{
                    outline: 'none'
                  }}
                  wheel={false}
                  alignCenter={true}
                  data={studioData.map((item, index) => (
                    <div style={{
                      marginRight: isMobile ? 20 : 30,
                      marginLeft: isMobile ? 20 : 30,
                    }} key={index}>
                      <ButtonBase disableRipple>
                        <div style={{ width: isMobile ? 300 : 400, height: isMobile ? 600 : 694 }}>
                          <img
                            src={item.image}
                            alt=""
                            style={{
                                width: isMobile ? 300 : 400,
                                height: isMobile ? 300 : 400,
                            }}
                          />
                          <Typography
                            variant="body2"
                            style={{
                              color: "#fff", 
                              fontSize: isMobile ? 30 : 36,
                              marginTop: 12,
                              textAlign: 'left',
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{
                              color: "#fff", 
                              fontSize: isMobile ? 12 : 14,
                              textAlign: 'left',
                            }}
                          >
                            {item.subtitle}
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{
                              color: "#fff", 
                              marginTop: 10,
                              fontSize: isMobile ? 12 : 14,
                              textAlign: 'left',
                            }}
                          >
                            {item.text}
                          </Typography>
                        </div>
                      </ButtonBase>
                    </div>
                  ))}
                />
              </div>

              <ButtonBase disableRipple style={{ 
                width: isMobile ? 180 : 300, 
                height: isMobile ? 40 : 57, 
                background: 'rgba(193, 55, 148, 0.2)', 
                marginTop: isMobile ? 35 : 50,
                marginBottom: isMobile ? 35 : 50,
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

          <Grid item xs={12} style={{ marginTop: 60 }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >  
              <Typography 
                variant="body2" 
                style={{
                  color: "#fff", 
                  fontSize: isMobile ? 34 : 64, 
                  marginTop: isMobile ? 25 : 40,
                  marginBottom: isMobile ? 25 : 40,
                }}
              >
                FEATURED
              </Typography>

              <div className={classes.quoteWrap}>
                <ScrollMenu
                  /* arrowLeft={<div style={{ fontSize: "30px", marginRight: 10 }}>{" < "}</div>}
                  arrowRight={<div style={{ fontSize: "30px", marginLeft: 10 }}>{" > "}</div>} */
                  itemStyle={{
                    outline: 'none'
                  }}
                  wheel={false}
                  alignCenter={true}
                  data={featuredData.map((item, index) => (
                    <div style={{
                      marginRight: isMobile ? 20 : 30,
                      marginLeft: isMobile ? 20 : 30,
                    }} key={index}>
                      <ButtonBase disableRipple>
                        <div style={{ width: isMobile ? 300 : 400, height: isMobile ? 585 : 785 }}>
                          <div className={clsx(
                            isMobile ? "img-shadow-mini" : "img-shadow"
                          )}>
                            <img
                              src={item.image}
                              alt=""
                              style={{
                                width: isMobile ? 300 : 400,
                                height: isMobile ? 620 : 785,
                              }}
                            />
                          </div>
                          <Typography
                            gutterBottom
                            variant="body1"
                            style={{
                              position: 'absolute', 
                              top: isMobile ? 280 : 400,
                              marginLeft: isMobile ? 12 : 20,
                              marginRight: isMobile ? 12 : 20,
                              color: "#fff", 
                              fontSize: isMobile ? 14 : 18,
                              textAlign: 'left',
                            }}
                          >
                            <span style={{
                              fontWeight: 'bold',
                              fontSize: isMobile ? 50 : 64,
                            }}>{item.title}</span>
                            <br/>
                            {item.text}
                          </Typography>
                        </div>
                      </ButtonBase>
                    </div>
                  ))}
                />
              </div>

              <ButtonBase disableRipple style={{ 
                width: isMobile ? 180 : 300, 
                height: isMobile ? 40 : 57, 
                background: 'rgba(217, 101, 34, 0.2)', 
                marginTop: isMobile ? 35 : 50,
                marginBottom: isMobile ? 35 : 50,
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
        </Grid>

        <style jsx>{`
          .img-shadow {
            position: relative;
            max-width: 100%;
            float: left;
          }
              
          .img-shadow::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            box-shadow: inset 0 -1180px 1000px -1000px #000000;
          } 
              
          .img-shadow img {
            float: left;
          } 

          .img-shadow-mini {
            position: relative;
            max-width: 100%;
            float: left;
          }
              
          .img-shadow-mini::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            box-shadow: inset 0 -1100px 1000px -1000px #000000;
          } 
              
          .img-shadow-mini img {
            float: left;
          } 
        `}</style>
      </Layout>
    </>
  );
}

export default Home;