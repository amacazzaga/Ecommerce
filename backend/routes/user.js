const express = require(`express`);
const { createUser ,getUsers,getUser} = require(`../controllers/userController`);

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id",getUser);
module.exports = router;
