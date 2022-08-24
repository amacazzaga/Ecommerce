const express = require(`express`);
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require(`../controllers/userController`);
const router = express.Router();
const userSchema = require(`../validations/userValidation`);
const userAuth = async (req, res, next) => {
  const body = req.body;
  try {
    await userSchema.validate(body);
    next();
 
  } catch (err) {
    res.status(400).json(err)
  }
};
//permisos//
router.get("/", getUsers); /*user, admin*/
router.post("/", userAuth, createUser); /*libre*/
router.get("/:id", getUser); /*user,admin*/
router.delete(`/:id`, deleteUser); /*user,admin*/
router.patch(`/:id`,userAuth, updateUser); /*user, admin*/
/*update user itself function missing*/
module.exports = router;
