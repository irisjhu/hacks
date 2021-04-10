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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Emoji from "./components/Emoji/emoji";
import About from "./pages/about";
import Home from "./pages/home";
import HacksMap from "./pages/map";
import Gallery from "./pages/gallery";
import Memes from "./pages/memes";
import useStyles from "./styles";

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
      <div className={classes.root} height="100%">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Container maxWidth="false" className={classes.navbarDisplayFlex}>
              <Button color="inherit" href="/">
                HACKS
                <Emoji symbol="😩" />
                <Emoji symbol="😤" />
              </Button>
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
        <Container>
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
        </Container>
      </div>
    </Router>
  );
};

export default App;
