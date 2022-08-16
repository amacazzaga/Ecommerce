const express = require(`express`);

const router = express.Router();

router.get("/", (req, res) => {
  res.json(`user , get`);
});
router.post("/", (req, res) => {
    res.json(`user , post`);
  });
module.exports = router;
