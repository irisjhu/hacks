import React from "react";
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

const Memes = () => {
  return (
    <div>
      <Typography variant="h1" align="center">
        dank memes
      </Typography>
      <Grid spacing={5} container direction="column" alignItems="center">
        <Grid item>
          <Button variant="contained" color="primary">
            add a meme
          </Button>
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
