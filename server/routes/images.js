import express from "express";
import multer from "multer";

import {
  getImages,
  getImageFromId,
  uploadImage,
} from "../controllers/images.js";

const router = express.Router();

const upload = multer({
  limits: {
    fileSize: 10000000, // max file size 10MB = 1000000 bytes
  },
});

router.get("/", getImages);
router.get("/:id", getImageFromId);
router.post(
  "/",
  upload.single("image"),
  uploadImage,
  (error, req, res, next) => {
    if (error) {
      res.status(500).send({ upload_error: error.message });
    }
  }
);

export default router;
