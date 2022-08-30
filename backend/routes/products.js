const express = require(`express`);
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
const router = express.Router();
const productPostSchema = require(`../validations/productPostValidation`);
const productPatchSchema = require(`../validations/productPatchValidation`);

router.get("/", getProducts); /*libre*/
router.post(
  "/",
  productPostAuth(productPostSchema),
  createProduct
); /*user,admin*/
router.get("/:id", getProduct); /*libre*/
router.delete(`/:id`, deleteProduct); /*user ,admin*/
router.patch(
  `/:id`,
  productPatchAuth(productPatchSchema),
  updateProduct
); /*user,admin*/

module.exports = router;
