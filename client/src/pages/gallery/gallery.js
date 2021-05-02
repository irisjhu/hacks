import React from "react";

import { Box, Container, Typography } from "@material-ui/core";

import FormDialog from "../../components/FormDialog/FormDialog";
import UserForm from "../../components/MultiStepForm/UserForm";

import useStyles from "./styles";

const Gallery = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h1" align="center">
        <Box paddingTop={10} paddingBottom={5} letterSpacing={6}>
          gallery
        </Box>
      </Typography>
      <Container className={classes.centerItems}>
        <FormDialog
          buttonText="Upload Image"
          title="Upload Image"
          content={<UserForm />}
        />
      </Container>
      {/* TODO: fetch images from database and display in grid */}
    </Container>
  );
};

export default Gallery;
