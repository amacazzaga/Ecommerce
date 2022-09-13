const express = require(`express`);
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require(`../controllers/productController`);
const {
  productPostAuth,
  productPatchAuth,
} = require(`../middlewares/productMiddleware`);
const productPostSchema = require(`../validations/productPostValidation`);
const productPatchSchema = require(`../validations/productPatchValidation`);
const { authToken } = require(`../middlewares/tokenMiddleware`);
const { rolAdmin } = require(`../middlewares/rolAdminMiddleware`);
//ROUTES//
router.get("/", getProducts); /*free*/
router.post(
  "/",
  productPostAuth(productPostSchema),
  authToken,
  rolAdmin,
  createProduct
); /*user,admin*/
router.get("/:id", getProduct); /*free*/
router.delete(`/:id`, authToken, rolAdmin, deleteProduct); /*user ,admin*/
router.patch(
  `/:id`,
  productPatchAuth(productPatchSchema),
  authToken,
  rolAdmin,
  updateProduct
); /*user,admin*/

module.exports = router;
