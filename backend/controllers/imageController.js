require(`dotenv`).config();
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const sharp = require(`sharp`);

// FROM .ENV
const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
//
const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});
//
const postImage = async (req, res) => {
  const buffer = await sharp(req.file.buffer)
    .resize({ height: 1920, width: 1920, fit: "contain" })
    .toBuffer();
  try {
    const params = {
      Bucket: bucketName,
      Key: req.file.originalname,
      Body: buffer,
      ContentType: req.file.mimetype,
    };
    const command = new PutObjectCommand(params);
    if (!command) return;
    await s3.send(command);
    res.status(201).json(command);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//
const deleteImage = async (req, res) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: req.body.imageName,
    };
    const command = new DeleteObjectCommand(params);
    await s3.send(command);
    res.status(200).json(command);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};

module.exports = {
  postImage,
  deleteImage,
};
