import {
  Button,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import NavButton from "./NavButton";
import { Fragment } from "react";

const navButtons = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
  },
  {
    label: "Products",
  },
  {
    label: "Support",
    lastBorder: true,
  },
  {
    label: "Login",
    noBorder: true,
  },
];

const NavBar = () => {
  return (
    <div className="container">
      <Grid container justify="center">
        <Container maxWidth="xl" disableGutters>
          <Grid
            container
            style={{ paddingLeft: 0, paddingRight: 0 }}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item style={{ flexDirection: "column", marginTop: 10, marginLeft: 50 }}>
              <Link href="/">
                <a>
                  <img
                    style={{ width: 45, height: 'auto' }}
                    src="/icons/doublebox-logo.svg"
                    alt=""
                  />
                </a>
              </Link>
            </Grid>

            <Grid item>
            <Typography 
                variant="body1" 
                style={{
                  color: "#fff", 
                  fontWeight: 'normal', 
                  fontSize: 24, 
                  marginLeft: 25,
                  marginTop: 3
                }}
              >
                DoubleBox Studio
              </Typography>
            </Grid>

            <Grid item justify="flex-end" container spacing={3} xs style={{ paddingTop: 10 }}>
              {navButtons.map((button, i) => (
                <Fragment key={i}>
                  { !button.noBorder ?
                    <Grid 
                      item 
                      key={i} 
                      style={{ 
                        borderRight: button.lastBorder ? "2px solid #D96522" : "2px solid #fff", 
                        height: 55, 
                        width: 110, 
                        marginTop: 15,
                        textAlign: 'center', 
                      }}
                    >
                      <NavButton
                        key={button.path}
                        path={button.path || ""}
                        label={button.label}
                        noBorder={button.noBorder}
                      />
                    </Grid> :
                    <Grid 
                      item 
                      key={i} 
                      style={{ 
                        height: 90, 
                        width: 110, 
                        textAlign: 'center', 
                        background: 'rgba(217, 101, 34, 0.2)',
                      }}
                    >
                      <NavButton
                        key={button.path}
                        path={button.path || ""}
                        label={button.label}
                        noBorder={button.noBorder}
                      />
                    </Grid>
                  }
                </Fragment>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <style jsx>{`
        .container {
          width: 100%;
          height: 88px;
          background-color: #000000;
          background-image: url('images/navbar-bg.svg');
          position: fixed;
          display: flex;
          z-index: 99;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
      `}</style>
    </div>
  )
}

export default NavBar
