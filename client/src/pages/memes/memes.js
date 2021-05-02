import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const Memes = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" align="center">
        <Box paddingTop={10} paddingBottom={5} letterSpacing={6}>
          dank memes
        </Box>
      </Typography>
      <Grid spacing={5} container direction="column" alignItems="center">
        <Grid item>
          <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple={false}
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload a meme
              </Button>
            </label>
          </div>
        </Grid>
      </Grid>
      <Grid spacing={5} container direction="column" alignItems="center">
        {memeLinks.map(({ url, alt }) => (
          <Grid item>
            <img src={url} alt={alt} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Memes;
