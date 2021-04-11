import React from "react";
import {
  Typography,
  Box,
  Grid,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

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

const Home = () => {
  const classes = useStyles();
  return (
    // <Box
    //   height="100vh"
    //   justifyContent="center"
    //   justifyItems="center"
    //   alignItems="center"
    //   flexDirection="column"
    //   className={classes.alignItemsAndJustifyContent}
    // >
    // </Box>
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ThemeProvider theme={theme}>
        {/* https://css-tricks.com/almanac/properties/s/stroke-linecap/ */}
        <Typography
          className={classes.heading}
          variant="h1"
          align="center"
          size="big"
        >
          hacks
        </Typography>

        <Typography
          variant="h5"
          align="center"
          className={classes.alignItemsAndJustifyContent}
        >
          homies that are cool kids
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default Home;
