
const express = require(`express`);
const multer = require(`multer`);
const router = express.Router();
const { postImage } = require(`../controllers/imageController`);
//JUST STORAGE AS MIDDLEWARE
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
upload.single(`image`);

//
router.post("/", upload.single(`image`), postImage);

module.exports = router;
