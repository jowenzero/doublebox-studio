import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  Drawer,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Background from '../public/images/drawer-bg.svg';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    borderBottom: '1px solid #000000',
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
    borderBottom: '1px solid #000000',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
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
    padding: theme.spacing(2),
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
    paddingTop: 88,
  },
  rootExpand: {
    width: "100%",
    boxShadow: "none",
    backgroundColor: '#252526',
    overflow: 'hidden'
  },
  summary: {
    width: "100%",
    height: 30,
    boxShadow: "none",
    backgroundColor: '#252526',
    borderBottom: '1px solid #000000'
  },
  details: {
    position: 'relative',
    width: "110%",
    left: '-5%',
    boxShadow: "none",
    backgroundColor: '#252526',
    overflow: 'hidden'
  },
}));

const DrawerComponent = (props) => {
  const classes = useStyles();
  const { toggleDrawer, open } = props;

  const SideList = () => (
    <Container maxWidth="xl">
      <Grid container spacing={1} style={{ marginTop: 20, marginBottom: 50 }}>
        <img
          style={{ width: '96%', height: 'auto', marginLeft: '2%' }}
          src="/images/ornament.svg"
          alt=""
        />

        {/* <Accordion square className={classes.rootExpand}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            className={classes.summary}
          >
            <p style={{ color: "#fff" }}>Screens</p>
          </AccordionSummary>
          <AccordionDetails
            className={classes.details}
          >
            <div
              style={{
                display: "flex",
                flexWrap: 'wrap',
                marginLeft: 5,
                marginRight: 5,
                width: '100%'
              }}
            >
              <h1>hi</h1>
            </div>
          </AccordionDetails>
        </Accordion> */}
      </Grid>
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
    >
      <main className={classes.mainWrap} style={{ minHeight: "100vh" }}>
        <SideList />
      </main>
    </Drawer>
  );
}

DrawerComponent.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default DrawerComponent;
