import express from "express";
import multer from "multer";

import { getMemes, getMemeFromId, uploadMeme } from "../controllers/memes.js";

const router = express.Router();

const upload = multer({
  limits: {
    fileSize: 10000000, // max file size 10MB = 1000000 bytes
  },
});

router.get("/", getMemes);
router.get("/:id", getMemeFromId);
router.post("/", upload.single("meme"), uploadMeme, (error, req, res, next) => {
  if (error) {
    res.status(500).send({ upload_error: error.message + " (>10MB)." });
  }
});

export default router;
