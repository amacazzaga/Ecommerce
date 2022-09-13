const express = require(`express`);
const router = express.Router();
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
  userUpdateItself,
} = require(`../middlewares/userMiddleware`);
const { authToken } = require(`../middlewares/tokenMiddleware`);
const { rolAdmin } = require(`../middlewares/rolAdminMiddleware`);
const userPostSchema = require(`../validations/userPostValidation`);
const userPatchSchema = require(`../validations/userPatchValidation`);
//ROUTES//
router.get("/", authToken, rolAdmin, getUsers); /*user, admin*/
router.post(`/login`, loginUser); /*login route*/
router.post("/", userPostAuth(userPostSchema), createUser); /*free*/
router.get("/:id",authToken, rolAdmin, getUser); /*user,admin*/
router.delete(`/:id`,authToken, rolAdmin, deleteUser); /*user,admin*/
router.patch(
  `/:id`,
  userPatchAuth(userPatchSchema),authToken, rolAdmin, //validate schema//
  updateUser
); /*user, admin*/
router.patch(
  `/edit/:id`,
  userPatchAuth(userPatchSchema), //validate schema//
  userUpdateItself,//middleware uses token here//
  updateUser
); /*user*/
module.exports = router;
