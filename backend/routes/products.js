const express = require(`express`);
const router = express.Router();
const {
  createProduct,
  getProductsByName,
  getProducts,
  getManyProductsById,
  getProduct,
  deleteProduct,
  updateProduct,
  updateImageProduct,
} = require(`../controllers/productController`);
const {
  productPostAuth,
  productPatchAuth,
} = require(`../middlewares/productMiddleware`);
const productPostSchema = require(`../validations/productPostValidation`);
const productPatchSchema = require(`../validations/productPatchValidation`);
const { authToken } = require(`../middlewares/tokenMiddleware`);
const { rolAdmin } = require(`../middlewares/rolAdminMiddleware`);
const {
  isValidAmount,
} = require(`../middlewares/amountMiddleware`);
//ROUTES//
router.get("/", getProducts); /*free*/
router.get("/many", getManyProductsById); /*free*/
router.get("/search",getProductsByName)
router.post(
  "/",
  productPostAuth(productPostSchema),
  isValidAmount,
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
router.patch(`/image/:id`, authToken, rolAdmin, updateImageProduct);

module.exports = router;
