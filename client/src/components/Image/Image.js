import React from "react";
import { Box, Card, CardMedia, Grid } from "@material-ui/core";

import { BASE_API_URL } from "../../utils/constants";

const Image = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Card>
          <CardMedia
            component="img"
            image={`${BASE_API_URL}/images/${props.id}`}
          />
        </Card>
      </Box>
    </Grid>
  );
};

export default Image;
