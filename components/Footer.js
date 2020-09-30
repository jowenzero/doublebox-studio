import { 
  Typography, 
  Link, 
  Grid, 
  Container
 } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pattern from "../public/images/pattern.svg";

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    paddingTop: 40,
    background: "#221f1f",
    backgroundImage: `url(${Pattern})`,
  }
}));

const Footer = () => {
  const classes = useStyles();

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
      label: "Products",
      path: "#"
    },
    {
      label: "Support",
      path: "#"
    },
    {
      label: "Terms Of Service",
      path: "#"
    }
  ];

  return (
    <div className={classes.mainWrap}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="space-between">
          <Grid item style={{marginLeft: 50}}>
            <img
              style={{ width: 127, height: 'auto' }}
              src="/icons/doublebox-logo-vertical.svg"
            />
            <br/>
            <Typography
              gutterBottom
              variant="body2"
              style={{ color: "#FFF", marginTop: 40 }}
            >
              v0.1
            </Typography>
          </Grid>

          <Grid item style={{ marginBottom: 40, borderLeft: "2px solid #C43895" }}>
            {menus.map((item, i) => (
              <Link href={item.path} key={i}>
                <Typography
                  gutterBottom
                  variant="body2"
                  style={{ color: "#FFF", marginLeft: 25, marginBottom: 10 }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Grid>

          <Grid item style={{ marginBottom: 40, borderLeft: "2px solid #DA6724" }}>
            <Typography
              gutterBottom
              variant="body2"
              style={{ color: "#FFF", marginLeft: 25, marginBottom: 8 }}
            >
              Follow Us
            </Typography>
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: 8,
              }}
              href="#"
            >
              <img
                style={{ height: 16, width: 16, marginLeft: 25 }}
                src="/icons/facebook.svg"
                alt=""
              />
              <Typography
                gutterBottom
                variant="body2"
                style={{
                  color: "#FFF",
                  fontWeight: "normal",
                  marginLeft: 5,
                  marginTop: 5,
                }}
              >
                Facebook
              </Typography>
            </Link>
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: 8,
              }}
              href="#"
            >
              <img
                style={{ height: 16, width: 16, marginLeft: 25 }}
                src="/icons/instagram.svg"
                alt=""
              />
              <Typography
                gutterBottom
                variant="body2"
                style={{
                  color: "#FFF",
                  fontWeight: "normal",
                  marginLeft: 5,
                  marginTop: 5
                }}
              >
                Instagram
              </Typography>
            </Link>
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: 8,
              }}
              href="#"
            >
              <img
                style={{ height: 16, width: 16, marginLeft: 25 }}
                src="/icons/twitter.svg"
                alt=""
              />
              <Typography
                gutterBottom
                variant="body2"
                style={{
                  color: "#FFF",
                  fontWeight: "normal",
                  marginLeft: 5,
                  marginTop: 5
                }}
              >
                Twitter
              </Typography>
            </Link>
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: 8,
              }}
              href="#"
            >
              <img
                style={{ height: 16, width: 16, marginLeft: 25 }}
                src="/icons/youtube.svg"
                alt=""
              />
              <Typography
                gutterBottom
                variant="body2"
                style={{
                  color: "#FFF",
                  fontWeight: "normal",
                  marginLeft: 5,
                  marginTop: 5
                }}
              >
                Youtube
              </Typography>
            </Link>
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
              href="#"
            >
              <img
                style={{ height: 16, width: 16, marginLeft: 25 }}
                src="/icons/linkedin.svg"
                alt=""
              />
              <Typography
                gutterBottom
                variant="body2"
                style={{
                  color: "#FFF",
                  fontWeight: "normal",
                  marginLeft: 5,
                  marginTop: 5
                }}
              >
                LinkedIn
              </Typography>
            </Link>
          </Grid>
          
          <Grid item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
