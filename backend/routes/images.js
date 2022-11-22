const express = require(`express`);
const multer = require(`multer`);
const router = express.Router();
const { postImage } = require(`../controllers/imageController`);
const { authToken } = require(`../middlewares/tokenMiddleware`);
const { rolAdmin } = require(`../middlewares/rolAdminMiddleware`);
//MIDDLEWARE!!!
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
upload.single(`image`);
//

router.post("/", upload.single(`image`), authToken, rolAdmin, postImage);

module.exports = router;
