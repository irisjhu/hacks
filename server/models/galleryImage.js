import mongoose from "mongoose";

// example schema from tutorial
const GalleryImageSchema = mongoose.Schema({
  image: {
    type: Buffer,
  },
});

GalleryImageSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.image;
  return result;
};

const GalleryImage = mongoose.model("GalleryImage", GalleryImageSchema);

export default GalleryImage;
