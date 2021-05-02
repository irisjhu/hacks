import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import FormDialog from "../../components/FormDialog/FormDialog";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import UserForm from "../../components/MultiStepForm/UserForm";
import { getMemes, uploadMeme } from "../../actions/memes";

const memeLinks = [
  {
    url:
      "https://cabutcher.weebly.com/uploads/1/1/9/1/119135892/published/expanding-brain-for-identity-meme-activity.png?1608181161",
    alt: "gg bruh",
  },
  {
    url:
      "https://64.media.tumblr.com/668f8fa044b09642396ee8be9846b449/tumblr_olspqaVPMy1u9ru6ro1_500.png",
    alt: "gg bruh",
  },
  {
    url:
      "https://64.media.tumblr.com/668f8fa044b09642396ee8be9846b449/tumblr_olspqaVPMy1u9ru6ro1_500.png",
    alt: "gg bruh",
  },
  {
    url:
      "https://qph.fs.quoracdn.net/main-qimg-6d32bddfb0b0e98a46bb87d8cfafa8e1.webp",
    alt: "gg bruh",
  },
];

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
