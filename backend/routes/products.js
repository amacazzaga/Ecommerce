const express = require(`express`);
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
} = require(`../controllers/productController`);

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.delete(`/:id`,deleteProduct)
router.patch(`/:id`,updateProduct)
module.exports = router;
