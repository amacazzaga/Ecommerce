const express = require(`express`);
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require(`../controllers/productController`);

const router = express.Router();

router.get("/", getProducts); /*libre*/
router.post("/", createProduct); /*user,admin*/
router.get("/:id", getProduct); /*libre*/
router.delete(`/:id`, deleteProduct); /*user ,admin*/
router.patch(`/:id`, updateProduct); /*user,admin*/

module.exports = router;
