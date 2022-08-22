const express = require(`express`);
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser
} = require(`../controllers/userController`);

const router = express.Router();
//permisos y validacion de la data (yup)//
router.get("/", getUsers);/*user, admin*/
router.post("/", createUser);/*libre*/
router.get("/:id", getUser);/*user,admin*/
router.delete(`/:id`,deleteUser)/*user,admin*/
router.patch(`/:id`,updateUser)/*user, admin*/
module.exports = router;
