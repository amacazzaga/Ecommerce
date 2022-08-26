const express = require(`express`);
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require(`../controllers/productController`);
const router = express.Router();
const productPostSchema = require(`../validations/productPostValidation`);

const productPostAuth = async (req, res, next) => {
  const body = req.body;
  try {
    await productPostSchema.validate(body);
    next();
   
  } catch (err) {
    res.status(400).json(err)
  }
};
router.get("/", getProducts); /*libre*/
router.post("/",productPostAuth, createProduct); /*user,admin*/
router.get("/:id", getProduct); /*libre*/
router.delete(`/:id`, deleteProduct); /*user ,admin*/
router.patch(`/:id`, updateProduct); /*user,admin*/

module.exports = router;
