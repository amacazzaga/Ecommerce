const express = require(`express`);
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
} = require(`../controllers/userController`);

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete(`/:id`,deleteUser)
module.exports = router;
