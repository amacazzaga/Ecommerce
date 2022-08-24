const express = require(`express`);
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require(`../controllers/productController`);
const router = express.Router();
const productSchema = require(`../validations/productValidation`);
const productAuth = async (req, res, next) => {
  const body = req.body;
  try {
    await productSchema.validate(body);
    next();
   
  } catch (err) {
    res.status(400).json(err)
  }
};
router.get("/", getProducts); /*libre*/
router.post("/",productAuth, createProduct); /*user,admin*/
router.get("/:id", getProduct); /*libre*/
router.delete(`/:id`, deleteProduct); /*user ,admin*/
router.patch(`/:id`,productAuth, updateProduct); /*user,admin*/

module.exports = router;
