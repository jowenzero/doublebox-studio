import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  Drawer,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  paperNav: {
    width: "100%",
    background: '#494747',
  },
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
  },
  "@keyframes move-left-xl": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-10vw)",
    }
  },
  "@keyframes move-left-lg": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-7.5vw)",
    }
  },
  "@keyframes move-left-md": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-12.5vw)",
    }
  },
  "@keyframes move-left-sm": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-9vw)",
    }
  },


  "@keyframes move-right-xl": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(9vw)",
    }
  },
  "@keyframes move-right-lg": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(6.5vw)",
    }
  },
  "@keyframes move-right-md": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(12.5vw)",
    }
  },
  "@keyframes move-right-sm": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(9vw)",
    }
  },


  "@keyframes divider-left": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-35vw)",
    }
  },
  "@keyframes divider-right": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(35vw)",
    }
  },
  buttomAnimLeft: {
    animationFillMode: "forwards",
    [theme.breakpoints.down("lg")]: {
      animationName: "$move-left-xl",
    },
    [theme.breakpoints.down("md")]: {
      animationName: "$move-left-lg",
    },
    [theme.breakpoints.down("sm")]: {
      animationName: "$move-left-md",
    },
    [theme.breakpoints.down("xs")]: {
      animationName: "$move-left-sm",
    },
    animationDuration: "0.4s",
  },
  buttomAnimRight: {
    animationFillMode: "forwards",
    [theme.breakpoints.down("lg")]: {
      animationName: "$move-right-xl",
    },
    [theme.breakpoints.down("md")]: {
      animationName: "$move-right-lg",
    },
    [theme.breakpoints.down("sm")]: {
      animationName: "$move-right-md",
    },
    [theme.breakpoints.down("xs")]: {
      animationName: "$move-right-sm",
    },
    animationDuration: "0.4s",
  },
  dividerAnimLeft: {
    animationFillMode: "forwards",
    animationName: "$divider-left",
    animationDuration: "0.6s",
  },
  dividerAnimRight: {
    animationFillMode: "forwards",
    animationName: "$divider-right",
    animationDuration: "0.6s",
  },
}));

const LoginDrawerComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleDrawer, open } = props;

  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);

  const SideList = () => (
    <Container maxWidth="xl" disableGutters>
      <Grid
        container
        style={{ paddingLeft: isMobile ? 50 : 200, paddingRight: isMobile ? 50 : 200, width: '100%', marginTop: 15 }}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <img
          src="/icons/plus-orange.svg"
          className={clsx(
            register && "icon-anim-reverse"
          )}
          alt=""
          style={{ width: isMobile ? 18 : 28, height: isMobile ? 18 : 28, transform: 'rotate(45deg)' }}
        />
        { !register && 
          <ButtonBase 
            disableRipple 
            style={{marginLeft: isMobile ? 15: 40, marginRight: isMobile ? 15: 40 }}
            onClick={() => setLogin(true)}
            className={clsx(
              login && classes.buttomAnimRight,
            )}
          >
            { isMobile ?
              <Typography 
                variant="body2" 
                style={{
                  color: "#D09CBF",
                  fontSize: 20
                }}
              >
                LOG
                <br/>
                IN
              </Typography> :
              <Typography 
                variant="body2" 
                style={{
                  color: "#D09CBF",
                  fontSize: 36,
                }}
              >
                LOG IN
              </Typography>
            }
          </ButtonBase>
        }
        <img
          src="/icons/login-divider.svg"
          alt=""
          style={{ width: 3, height: 52 }}
          className={clsx(
            login && classes.dividerAnimRight,
            register && classes.dividerAnimLeft,
          )}
        />
        { !login && 
          <ButtonBase 
            disableRipple
            onClick={() => setRegister(true)}
            className={clsx(
              register && classes.buttomAnimLeft,
            )}
          >
            { isMobile ? 
              <Typography 
                variant="body2" 
                style={{
                  color: "#DBB098",
                  fontSize: 20
                }}
              >
                CREATE
                <br/>
                NEW
              </Typography> :
              <Typography 
                variant="body2" 
                style={{
                  color: "#DBB098",
                  fontSize: 36,
                }}
              >
                CREATE NEW
              </Typography>
            }
          </ButtonBase>
        }
        <img
          src="/icons/plus-purple.svg"
          alt=""
          className={clsx(
            login && "icon-anim-forward"
          )}
          style={{ width: isMobile ? 18 : 28, height: isMobile ? 18 : 28 }}
        />
      </Grid>

      <style jsx>{`
        .icon-anim-forward {
          animation-fill-mode: forwards;
          animation-name: rotate;
          animation-duration: 0.4s;
        }
        .icon-anim-reverse {
          animation-fill-mode: forwards;
          animation-name: rotate-reverse;
          animation-duration: 0.4s;
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @keyframes rotate-reverse {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(0deg);
          }
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
      transitionDuration={300}
      anchor="top"
    >
      <div>
        <main className={classes.mainWrap} style={{ minHeight: 144 }}>
          <SideList />
        </main>
      </div>
    </Drawer>
  );
}

LoginDrawerComponent.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default LoginDrawerComponent;
