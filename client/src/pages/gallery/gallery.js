import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";

import ImageGallery from "../../components/ImageGallery/ImageGallery";
import FormDialog from "../../components/FormDialog/FormDialog";
import UserForm from "../../components/MultiStepForm/UserForm";

import useStyles from "./styles";
import { getImages, uploadImage } from "../../actions/images";

const Gallery = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  return (
    <Container maxWidth="false">
      <Typography variant="h1" align="center">
        <Box paddingTop={10} paddingBottom={5} letterSpacing={6}>
          gallery
        </Box>
      </Typography>
      <Container className={classes.centerItems}>
        <FormDialog
          buttonText="Upload Image"
          title="Upload Image"
          content={<UserForm uploadActionFunc={uploadImage} images={images} />}
        />
      </Container>
      <Container
        className={`${classes.centerItems} ${classes.topBottomPadding}`}
        maxWidth="false"
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <ImageGallery images={images} endpoint="images" />
        )}
      </Container>
    </Container>
  );
};

export default Gallery;
