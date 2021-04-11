import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const memeLinks = [
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

const Memes = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" align="center">
        dank memes
      </Typography>
      <Grid spacing={5} container direction="column" alignItems="center">
        <Grid item>
          <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </div>
        </Grid>
      </Grid>
      <Grid spacing={5} container direction="column" alignItems="center">
        {memeLinks.map(({ url, alt }) => (
          <Grid item>
            <img src={url} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Memes;
