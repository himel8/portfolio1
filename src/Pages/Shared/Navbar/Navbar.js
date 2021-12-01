import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { ListItemText, Typography, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { NavHashLink } from "react-router-hash-link";
import file from "../../../files/Resume.pdf";

const Navbar = () => {
  const [state, setState] = useState(false);
  const theme = useTheme();
  const navStyle = makeStyles({
    navIconContainer: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
        color: "black",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navItem: {
      textDecoration: "none",
      color: "#fff",
      marginLeft: "20px",
    },
    mobileNavItem: {
      textDecoration: "none",
      color: "#474747",
    },
  });
  const { navItemContainer, navItem, navIconContainer, mobileNavItem } =
    navStyle();

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ backgroundColor: "#222831", px: 15 }}
          position="fixed"
          className="navBar"
        >
          <Toolbar>
            <Box className={navIconContainer}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ px: 10, mr: 2, color: "#222" }}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: "left" }}>
              <Typography
                sx={{ color: "#fff", mb: 0 }}
                variant="h5"
                gutterBottom
                component="div"
              >
                Borhan Ahmed
              </Typography>
            </Box>
            <Box className={navItemContainer}>
              <NavLink to="/" className={navItem}>
                Home
              </NavLink>
              <NavHashLink smooth to="/#aboutMe" className={navItem}>
                About Me
              </NavHashLink>
              <NavHashLink smooth to="/#project" className={navItem}>
                Projects
              </NavHashLink>

              <NavHashLink smooth to="/#contact" className={navItem}>
                Contact
              </NavHashLink>
              <Link className={navItem} to="/blog">
                Blog
              </Link>
              <span className="navButton">
                <a href={file} download>
                  <Button sx={{ ml: 27 }} className="resumeBtn">
                    Get Resume
                  </Button>
                </a>
              </span>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* resopnsive dawer  */}
      <Box>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="/">
                      Home
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button>
                  <ListItemText>
                    <NavHashLink
                      className={mobileNavItem}
                      smooth
                      to="/#aboutMe"
                    >
                      About Me
                    </NavHashLink>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <NavHashLink
                      className={mobileNavItem}
                      smooth
                      to="/#project"
                    >
                      Projects
                    </NavHashLink>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <NavHashLink
                      className={mobileNavItem}
                      smooth
                      to="/#contact"
                    >
                      Contact
                    </NavHashLink>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <span className="navButtonMobile">
                      <a href={file} download>
                        <Button color="inherit">Resume</Button>
                      </a>
                    </span>
                  </ListItemText>
                </ListItem>
                <Divider />
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      </Box>
    </Box>
  );
};

export default Navbar;
