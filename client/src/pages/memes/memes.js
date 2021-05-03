import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import FormDialog from "../../components/FormDialog/FormDialog";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import UserForm from "../../components/MultiStepForm/UserForm";
import { getMemes, uploadMeme } from "../../actions/memes";

const Memes = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.memes);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getMemes());
  }, [dispatch]);

  useEffect(() => {
    if (memes.length > 0) {
      setIsLoading(false);
    }
  }, [memes]);

  return (
    <Container maxWidth="false">
      <Typography variant="h1" align="center">
        <Box paddingTop={10} paddingBottom={5} letterSpacing={6}>
          dank memes
        </Box>
      </Typography>
      <Container className={classes.centerItems}>
        <FormDialog
          buttonText="Upload a Meme"
          title="Upload a Meme"
          content={<UserForm uploadActionFunc={uploadMeme} images={memes} />}
        />
      </Container>
      <Container
        className={`${classes.centerItems} ${classes.topBottomPadding}`}
        maxWidth="false"
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <ImageGallery images={memes} endpoint="memes" />
        )}
      </Container>
    </Container>
  );
};

export default Memes;
