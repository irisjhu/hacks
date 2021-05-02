import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import imageRoutes from "./routes/images.js";

const app = express();
dotenv.config();

// may want to change these limits; this is just from the tutorial
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.use("/images", imageRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
