const express = require(`express`);
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require(`../controllers/userController`);
const router = express.Router();
const userSchema = require(`../validations/uservalidation`);
const auth = async (req, res, next) => {
  const body = req.body;
  try {
    await userSchema.validate(body);
    next();
    res.status(200)
  } catch (err) {
    res.status(400).json(err)
  }
};

//permisos y validacion de la data (yup)//
router.get("/", getUsers); /*user, admin*/
router.post("/", auth, createUser); /*libre*/
router.get("/:id", getUser); /*user,admin*/
router.delete(`/:id`, deleteUser); /*user,admin*/
router.patch(`/:id`,auth, updateUser); /*user, admin*/
/*update user itself function missing*/
module.exports = router;
