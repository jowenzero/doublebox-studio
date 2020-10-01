import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  Drawer,
  Typography,
  ButtonBase,
  Link
} from "@material-ui/core";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Background from '../public/images/drawer-bg.svg';
import MiniFooter from "./MiniFooter";
import clsx from "clsx";

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slider from "react-slick";
import ScrollMenu from 'react-horizontal-scrolling-menu';

const games = [
  {
    name: "Run Cube Run",
    image: "/images/rcr-logo.png",
  },
  {
    name: "Reversible",
    image: "/images/reversible-logo.png",
  },
  {
    name: "Sorrow Path of Memoir",
    image: "/images/spom-logo.png",
  },
];

const Accordion = withStyles({
  root: {
    borderBottom: '0px solid #fff',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: '3px solid #fff',
    height: 77,
    '&$expanded': {
      height: 77,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
  paperNav: {
    width: "100%",
    background: '#494747',
    backgroundImage: `url(${Background})`,
  },
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
  },
  rootExpand: {
    width: "96%",
    boxShadow: "none",
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  summary: {
    width: "100%",
    boxShadow: "none",
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  details: {
    width: "100%",
    boxShadow: "none",
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  quoteWrap: {
    overflow: "hidden",
    marginLeft: 0,
    marginRight: 0
  },
}));

const DrawerComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleDrawer, open } = props;

  const SideList = () => (
    <Container maxWidth="xl">
      <Grid
        container
        style={{ marginTop: 30, marginBottom: 50 }}
        direction="column"
        justify="center"
        alignItems="center"
      >  
        <div style={{ 
          color: 'transparent', 
          background: "#DC6624", 
          width: "96%", 
          height: "9px", 
          marginBottom: 20,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ 
            color: 'transparent', 
            background: "#C33795", 
            marginLeft: "99.5%",
            width: "9px",
            height: "30px",
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'right',
          }}>.</div>
        </div>

        <div style={{
          width: "96%",
          borderBottom: '3px solid #fff',
          height: 77,
          marginBottom: 20,
        }}>
          <Link 
            href="#" 
          >
            <Typography
              gutterBottom
              variant="body2"
              style={{
                color: "#fff", 
                fontSize: 32, 
                marginTop: 10,
                marginLeft: 15,
              }}
            >
              News
            </Typography>
          </Link>
        </div>

        <Accordion square className={classes.rootExpand}>
          <AccordionSummary
            aria-label="Expand"
            expandIcon={<ExpandMoreIcon style={{ color: "#fff", fontSize: 40 }} />}
            className={classes.summary}
          >
            <Link 
              href="#" 
              aria-label="Link"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
            >
              <Typography
                gutterBottom
                variant="body2"
                style={{
                  color: "#fff", 
                  fontSize: 32, 
                  marginBottom: 6,
                }}
              >
                Games
              </Typography>
            </Link>
          </AccordionSummary>
          <AccordionDetails
            className={classes.details}
          >
            <div className={classes.quoteWrap}>
              <ScrollMenu
                arrowLeft={<div style={{ fontSize: "30px", marginRight: 10 }}>{" < "}</div>}
                arrowRight={<div style={{ fontSize: "30px", marginLeft: 10 }}>{" > "}</div>}
                itemStyle={{
                  outline: 'none'
                }}
                wheel={false}
                alignCenter={false}
                data={games.map((item, index) => (
                  <div style={{
                    marginRight: 20,
                    marginLeft: 20,
                  }} key={index}>
                    <ButtonBase>
                      <div style={{ width: isMobile ? 115 : 215, height: isMobile ? 115 : 215 }}>
                        { item.image ? 
                          <>
                            <div className={clsx(
                              isMobile ? "img-shadow-mini" : "img-shadow"
                            )}>
                              <img
                                src={item.image}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                              />
                            </div>
                            <Typography
                              gutterBottom
                              variant="body1"
                              style={{
                                position: 'absolute', 
                                bottom: isMobile ? 3 : 8,
                                marginLeft: isMobile ? 6 : 10,
                                color: "#fff", 
                                fontSize: isMobile ? 16 : 24,
                                textAlign: 'left',
                              }}
                            >
                              {item.name}
                            </Typography>
                          </> :
                          <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#303030',
                          }}>
                            <Typography
                                gutterBottom
                                variant="body1"
                                style={{
                                  position: 'absolute', 
                                  bottom: isMobile ? 3 : 8,
                                  marginLeft: isMobile ? 6 : 10,
                                  color: "#fff", 
                                  fontSize: isMobile ? 16 : 24,
                                  textAlign: 'left',
                                }}
                              >
                                {item.name}
                            </Typography>
                          </div>
                        }
                      </div>
                    </ButtonBase>
                  </div>
                ))}
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <div style={{
          width: "96%",
          borderBottom: '3px solid #fff',
          height: 77,
          marginBottom: 20,
        }}>
          <Link 
            href="#" 
          >
            <Typography
              gutterBottom
              variant="body2"
              style={{
                color: "#fff", 
                fontSize: 32, 
                marginTop: 10,
                marginLeft: 15,
              }}
            >
              Blogs
            </Typography>
          </Link>
        </div>

        <div style={{
          width: "96%",
          borderBottom: '3px solid #fff',
          height: 77,
          marginBottom: 20,
        }}>
          <Link 
            href="#" 
          >
            <Typography
              gutterBottom
              variant="body2"
              style={{
                color: "#fff", 
                fontSize: 32, 
                marginTop: 10,
                marginLeft: 15,
              }}
            >
              About Us
            </Typography>
          </Link>
        </div>

        <div style={{
          width: "96%",
          borderBottom: '3px solid #fff',
          height: 77,
          marginBottom: 20,
        }}>
          <Link 
            href="#" 
          >
            <Typography
              gutterBottom
              variant="body2"
              style={{
                color: "#fff", 
                fontSize: 32, 
                marginTop: 10,
                marginLeft: 15,
              }}
            >
              Support
            </Typography>
          </Link>
        </div>
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
          box-shadow: inset 0 -1050px 1000px -1000px #000000;
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
          box-shadow: inset 0 -1030px 1000px -1000px #000000;
        } 
             
        .img-shadow-mini img {
          float: left;
        } 
      `}</style>
    </Container>
  );

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
          paper: classes.paperNav
      }}
      transitionDuration={400}
      anchor="top"
    >
      <div>
        <main className={classes.mainWrap} style={{ minHeight: "100vh" }}>
          <SideList />
        </main>
        <MiniFooter/>
      </div>
    </Drawer>
  );
}

DrawerComponent.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default DrawerComponent;
