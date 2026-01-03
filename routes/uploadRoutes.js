import express from "express";
import upload from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";
import File from "../models/File.js";

const router = express.Router();

router.post("/", upload.single("file"), async (req, res) => {
    console.log(req.file);
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
  {
    folder: "uploads",
    resource_type: "auto" // 🔥 image + video both
  },
  (error, result) => {
    if (result) resolve(result);
    else reject(error);
  }
);


        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    const file = await File.create({
      url: result.secure_url,
      public_id: result.public_id,
      format: result.format,
      size: result.bytes,
    });

    res.status(201).json({
      message: "File uploaded to Cloudinary",
      file,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", upload.single("file"), async (req, res) => {
  console.log("req.file:", req.file);
  console.log("req.body:", req.body);

  // rest of your code
});

export default router;
