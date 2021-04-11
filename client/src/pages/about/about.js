import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

import iris from "../../images/memberPics/iris.jpg";
import chevron from "../../images/shapes/chevron.svg";
import MemberCard from "../../components/MemberCard/memberCard";

const About = () => {
  const classes = useStyles();
  const hacksMembers = [
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
    { member: iris, shape: chevron },
  ];
  return (
    <div>
      <Typography variant="h1" align="center">
        <Box paddingTop={10} paddingBottom={5} letterSpacing={6}>
          meet hacks
        </Box>
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        <Box paddingBottom={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Typography>
      <Container>
        <Grid container justify="center" spacing={3} variant="outlined">
          {hacksMembers.map(({ member, shape }) => (
            <MemberCard member={member} shape={shape} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default About;
