import Meme from "../models/meme.js";

export const getMemes = async (req, res) => {
  try {
    const memes = await Meme.find();

    res.send(memes);
  } catch (error) {
    res.status(500).send({ get_error: "Error while getting list of images." });
  }
};

export const getMemeFromId = async (req, res) => {
  try {
    const result = await Meme.findById(req.params.id);
    res.send(result.meme);
  } catch (error) {
    res.status(400).send({ get_error: "Error while getting image." });
  }
};

export const uploadMeme = async (req, res) => {
  try {
    const meme = new Meme();
    const file = req.file.buffer;
    meme.meme = file;

    await meme.save();

    res.status(201).json(meme);
  } catch (error) {
    res
      .status(500)
      .send({ upload_error: "Error while uploading file...Try again later." });
  }
};
