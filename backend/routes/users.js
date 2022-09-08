const express = require(`express`);
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
} = require(`../controllers/userController`);
const {
  userPostAuth,
  userPatchAuth,
} = require(`../middlewares/userMiddleware`);
const { authToken } = require(`../middlewares/tokenMiddleware`);
const { rolAdmin } = require(`../middlewares/rolAdminMiddleware`);
const router = express.Router();
const userPostSchema = require(`../validations/userPostValidation`);
const userPatchSchema = require(`../validations/userPatchValidation`);

router.get("/", authToken,rolAdmin, getUsers); /*user, admin*/
router.post(`/login`, loginUser); /*loggin route*/
router.post("/", userPostAuth(userPostSchema), createUser); /*libre*/
router.get("/:id", getUser); /*user,admin*/
router.delete(`/:id`, deleteUser); /*user,admin*/
router.patch(
  `/:id`,
  userPatchAuth(userPatchSchema),
  updateUser
); /*user, admin*/
/*update user itself function missing*/
module.exports = router;
