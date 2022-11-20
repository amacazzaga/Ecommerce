require(`dotenv`).config();
const express = require(`express`);
const multer = require(`multer`);
const router = express.Router();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
upload.single(`image`);
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
router.post("/", upload.single(`image`), async (req, res) => {
  console.log("req.body", req.body);
  console.log("file.file", req.file);
  req.file.buffer;
  const params = {
    Bucket: bucketName,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };
  const command = new PutObjectCommand(params);

  await s3.send(command);
});

module.exports = router;
