import { Fragment } from "react";
import clsx from "clsx";
import {
  Grid,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";
import NavButton from "./NavButton";
import Drawer from "./Drawer";
import LoginDrawer from "./LoginDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Pattern from "../public/images/pattern.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "fixed",
    width: "100%",
    height: '60px',
    display: "flex",
    justifyContent: "center",
    background: "#221f1f",
    backgroundImage: `url(${Pattern})`,
    zIndex: 1400,
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [initial, setInitial] = React.useState(true);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
    setInitial(true);
  };

  const [openLoginDrawer, setOpenLoginDrawer] = React.useState(false);

  const handleOpenLoginDrawer = () => {
    setOpenLoginDrawer(!openLoginDrawer);
  };
  
  return (
    <div className={clsx(
      "shadow",
      classes.mainWrap,
    )}>
      <Drawer
        open={openDrawer}
        toggleDrawer={handleOpenDrawer}
      />

      <LoginDrawer
        open={openLoginDrawer}
        toggleDrawer={setOpenLoginDrawer}
      />

      <Container maxWidth="xl" disableGutters>
        <Grid
          container
          style={{ paddingLeft: 0, paddingRight: 0, marginTop: 0 }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <IconButton
              onClick={handleOpenDrawer}
              style={{ 
                width: (openDrawer || openLoginDrawer) ? 7 : 33, 
                height: 33, 
                marginLeft: (openDrawer || openLoginDrawer) ? 37 : 33, 
                marginRight: (openDrawer || openLoginDrawer) ? 57 : 53, 
                borderRadius: 0 
              }}
              disableRipple
            >
              <img
                src="/icons/hamburger.svg"
                className={clsx(
                  openDrawer ? "hamburger-anim-forward" : 
                    initial ? "hamburger-anim-backward" :
                    ""
                )}
                alt=""
              />
            </IconButton>
          </Grid>

          <Grid item style={{ flexDirection: "column", marginTop: 3 }}>
            <Link href="/">
              <a>
                <img
                  style={{ width: 37, height: 'auto' }}
                  src="/icons/doublebox-logo.svg"
                  alt=""
                />
              </a>
            </Link>
          </Grid>

          <Grid item>
            <IconButton
              style={{ 
                background: 'rgba(217, 101, 34, 0.2)', 
                height: 60, 
                width: (openDrawer || openLoginDrawer) && isMobile ? 126 : 118, 
                borderRadius: 0 
              }}
              onClick={handleOpenLoginDrawer}
              disableRipple
            >
              <img
                src="/icons/profile.svg"
                alt=""
                style={{ marginRight: (openDrawer || openLoginDrawer) && isMobile ? 8 : 0 }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Container>

      <style jsx>{`
        .container {
          width: 100%;
          height: 88px;
          background-color: #000000;
          background-image: url('images/navbar-bg.svg');
          position: fixed;
          display: flex;
          z-index: 1400;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        .shadow {
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        .hamburger-anim-forward {
          animation-fill-mode: forwards;
          animation-name: scale-down-hor-center;
          animation-duration: 0.4s;
        }
        .hamburger-anim-backward {
          animation-fill-mode: forwards;
          animation-name: scale-up-hor-center;
          animation-duration: 0.4s;
        }
        @keyframes scale-down-hor-center {
          0% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(0.3);
          }
        }
        @keyframes scale-up-hor-center {
          0% {
            transform: scaleX(0.3);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  )
}

export default NavBar
