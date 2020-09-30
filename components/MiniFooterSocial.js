import { 
  Typography, 
  Link, 
  Grid, 
  Container,
  IconButton
 } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Pattern from "../public/images/pattern.svg";

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    minHeight: "54px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    background: '#302d2d',
    backgroundImage: `url(${Pattern})`,
  }
}));

const MiniFooter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.mainWrap}>
      <Container maxWidth="xl">
        <Grid
          container
          style={{ paddingLeft: 0, paddingRight: 0, marginTop: 0 }}
          direction="row"
          justify="center"
          alignItems="center"
        >  
          <Grid item style={{ marginTop: 10 }}>
            <IconButton
              style={{ 
                background: 'rgba(196, 196, 196, 0.2)', 
                height: 34, 
                width: 34, 
                borderRadius: 0, 
                marginRight: 19 
              }}
              disableRipple
            >
              <img
                src="/icons/twitter.svg"
                alt=""
              />
            </IconButton>
            <IconButton
              style={{ 
                background: 'rgba(196, 196, 196, 0.2)', 
                height: 34, 
                width: 34, 
                borderRadius: 0, 
                marginRight: 19 
              }}
              disableRipple
            >
              <img
                src="/icons/facebook.svg"
                alt=""
              />
            </IconButton>
            <IconButton
              style={{ 
                background: 'rgba(196, 196, 196, 0.2)', 
                height: 34, 
                width: 34, 
                borderRadius: 0, 
                marginRight: 19 
              }}
              disableRipple
            >
              <img
                src="/icons/twitch.svg"
                alt=""
              />
            </IconButton>
            <IconButton
              style={{ 
                background: 'rgba(196, 196, 196, 0.2)', 
                height: 34, 
                width: 34, 
                borderRadius: 0, 
                marginRight: 19 
              }}
              disableRipple
            >
              <img
                src="/icons/youtube.svg"
                alt=""
              />
            </IconButton>
            <IconButton
              style={{ 
                background: 'rgba(196, 196, 196, 0.2)', 
                height: 34, 
                width: 34, 
                borderRadius: 0,
              }}
              disableRipple
            >
              <img
                src="/icons/instagram.svg"
                alt=""
              />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MiniFooter;
