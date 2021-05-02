import GalleryImage from "../models/galleryImage.js";

export const getImages = async (req, res) => {
  try {
    const galleryImages = await GalleryImage.find();

    console.log(galleryImages);

    res.send(galleryImages);
  } catch (error) {
    res.status(500).send({ get_error: "Error while getting list of images." });
  }
};

export const getImageFromId = async (req, res) => {
  try {
    const result = await GalleryImage.findById(req.params.id);
    res.send(result.image);
  } catch (error) {
    res.status(400).send({ get_error: "Error while getting image." });
  }
};

export const uploadImage = async (req, res) => {
  try {
    const image = new GalleryImage();
    const file = req.file.buffer;
    image.image = file;

    await image.save();

    res.status(201).json(image);
  } catch (error) {
    res
      .status(500)
      .send({ upload_error: "Error while uploading file...Try again later." });
  }
};
