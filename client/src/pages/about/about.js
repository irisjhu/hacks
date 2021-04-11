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

// member pictures
import irismeme from "../../images/memberPics/irismeme.png";
import allisonmeme from "../../images/memberPics/allisonmeme.png";
import annameme from "../../images/memberPics/annameme.png";
import anniememe from "../../images/memberPics/anniememe.png";
import brianmeme from "../../images/memberPics/brianmeme.png";
import gesnameme from "../../images/memberPics/gesnameme.png";
import jeffreymeme from "../../images/memberPics/jeffreymeme.png";
import kentonmeme from "../../images/memberPics/kentonmeme.png";
import joshmeme from "../../images/memberPics/joshmeme.jpg";
import jason from "../../images/memberPics/jason.jpeg";
import danmeme from "../../images/memberPics/danmeme.jpeg";
import vishal from "../../images/memberPics/vishal.jpeg";

// member shapes
import chevron from "../../images/shapes/chevron.svg";
import bread from "../../images/shapes/bread.svg";
import cat from "../../images/shapes/cat.svg";
import flower from "../../images/shapes/flower.svg";
import heptagon from "../../images/shapes/heptagon.svg";
import hexagon from "../../images/shapes/hexagon.svg";
import pentagon from "../../images/shapes/pentagon.svg";
import rhombus from "../../images/shapes/rhombus.svg";
import spatula from "../../images/shapes/spatula.svg";

import MemberCard from "../../components/MemberCard/memberCard";

const About = () => {
  const classes = useStyles();
  const hacksMembers = [
    { member: irismeme, shape: chevron, name: "Iris Hu" },
    { member: allisonmeme, shape: bread, name: "Allison Wei" },
    { member: anniememe, shape: flower, name: "Annie Lu" },
    { member: brianmeme, shape: pentagon, name: "Brian Chin" },
    { member: annameme, shape: cat, name: "Anna Chan" },
    { member: gesnameme, shape: rhombus, name: "Gesna Aggarwal" },
    { member: jeffreymeme, shape: hexagon, name: "Jeffrey Li" },
    { member: kentonmeme, shape: heptagon, name: "Kenton Wong" },
    { member: joshmeme, shape: chevron, name: "Josh Chen" },
    { member: jason, shape: chevron, name: "Jason Tan" },
    { member: danmeme, shape: spatula, name: "Dan Zou" },
    { member: vishal, shape: chevron, name: "Vishal Patel" },
  ];
  return (
    <div>
      <Typography variant="h1" align="center">
        <Box paddingTop={10} paddingBottom={5} letterSpacing={6}>
          meet hacks
        </Box>
      </Typography>
      <Container>
        <Typography variant="subtitle1" align="center" gutterBottom>
          <Box paddingBottom={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        </Typography>
      </Container>
      <Container>
        <Grid container justify="center" spacing={3} variant="outlined">
          {hacksMembers.map(({ member, shape, name }) => (
            <MemberCard member={member} shape={shape} name={name} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default About;
