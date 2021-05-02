import mongoose from "mongoose";

// example schema from tutorial
const MemeSchema = mongoose.Schema({
  meme: {
    type: Buffer,
  },
});

MemeSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.image;
  return result;
};

const Meme = mongoose.model("Meme", MemeSchema);

export default Meme;
