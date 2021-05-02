import { Grid } from "@material-ui/core";
import React from "react";

import Image from "../Image/Image";

const ImageGallery = (props) => {
  return (
    <Grid container justify="center" spacing={3} variant="outlined">
      {props.images.map((image) => (
        <Image id={image._id} key={image._id} />
      ))}
    </Grid>
  );
};

export default ImageGallery;
