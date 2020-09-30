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
    background: '#221f1f',
    backgroundImage: `url(${Pattern})`,
  }
}));

const MiniFooter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.mainWrap}>
      <Container maxWidth="xl" disableGutters>
        <Grid
          container
          style={{ paddingLeft: 0, paddingRight: 0, marginTop: 0 }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item style={{ flexDirection: "row", marginTop: 17, marginLeft: 21, marginRight: 9 }}>
            <Link href="/">
              <a>
                <img
                  style={{ width: 21, height: 21 }}
                  src="/icons/doublebox-logo.svg"
                  alt=""
                />
              </a>
            </Link>
            { isMobile && 
              <Typography 
                variant="body1" 
                style={{
                  color: "#fff", 
                  fontWeight: 'normal', 
                  fontSize: 18, 
                  marginLeft: 30,
                  marginTop: -28,
                }}
              >
                DoubleBox Studio
              </Typography>
            }
          </Grid>

          { isMobile && 
            <Grid item>
              <Typography 
                variant="body1" 
                style={{
                  color: "#fff", 
                  opacity: '50%',
                  fontWeight: 'normal', 
                  fontSize: 12, 
                  marginTop: 12,
                  marginLeft: 21,
                }}
              >
                DoubleBox StudioTM est.2020
              </Typography>
            </Grid>
          }
            
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
                marginRight: 21 
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
