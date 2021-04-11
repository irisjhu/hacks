import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  sizing,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "./images/logo.png";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import HacksMap from "./pages/map/map";
import Gallery from "./pages/gallery/gallery";
import Memes from "./pages/memes/memes";
import useStyles from "./styles";
const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "9rem",
  },
};

const App = () => {
  const classes = useStyles();
  const navLinks = [
    { title: "whomst", path: "/about" },
    { title: "where", path: "/map" },
    { title: "gallery", path: "/gallery" },
    { title: "memes", path: "/memes" },
  ];

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Container maxWidth="false" className={classes.navbarDisplayFlex}>
              <Link width="20%" to="/" className={classes.linkText}>
                <img src={logo} width="20%" />
              </Link>
              <List component="nav" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                  <Link to={path} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Container>
          </Toolbar>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/map">
              <HacksMap />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/memes">
              <Memes />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
