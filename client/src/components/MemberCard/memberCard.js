import React, { useState } from "react";
import { Grid, Card, CardMedia, Fade, Typography } from "@material-ui/core";

import useStyles from "./styles";

const MemberCard = (props) => {
  const classes = useStyles();
  const [showInfo, setShowInfo] = useState(false);

  const onMouseHover = () => {
    if (!showInfo) {
      setShowInfo(true);
    }
  };

  const onMouseLeave = () => {
    if (showInfo) {
      setShowInfo(false);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={props.member}
          onMouseOver={onMouseHover}
        />
        <Fade in={showInfo} timeout={500}>
          <div onMouseLeave={onMouseLeave}>
            <div className={classes.overlayPic}>
              <CardMedia component="img" image={props.shape} />
            </div>
            <Typography variant="h5" className={classes.overlayText}>
              {props.name}
            </Typography>
          </div>
        </Fade>
      </Card>
    </Grid>
  );
};

export default MemberCard;
