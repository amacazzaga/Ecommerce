const express = require(`express`);
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require(`../controllers/userController`);
const router = express.Router();
const userPostSchema = require(`../validations/userPostValidation`);
const userPatchSchema = require(`../validations/userPatchValidation`)
//userpost yup auth///
const userPostAuth = async (req, res, next) => {
  const body = req.body;
  try {
    await userPostSchema.validate(body);
    next();
 
  } catch (err) {
    res.status(400).json(err)
  }
};
//userpatch yup auth//
const userPatchAuth = async (req, res, next) => {
  const body = req.body;
  try {
    await userPatchSchema.validate(body);
    next();
 
  } catch (err) {
    res.status(400).json(err)
  }
};
//permisos//
router.get("/", getUsers); /*user, admin*/
router.post("/", userPostAuth, createUser); /*libre*/
router.get("/:id", getUser); /*user,admin*/
router.delete(`/:id`, deleteUser); /*user,admin*/
router.patch(`/:id`,userPatchAuth, updateUser); /*user, admin*/
/*update user itself function missing*/
module.exports = router;
