const Product = require(`../models/productModels`);
const mongoose = require(`mongoose`);

//get all products//
const getProducts = async (req, res) => {
  try {
    //pagination
    const page = req.query.page;
    const productsPerPage = 15;
    const product = await Product.find()
      .sort({ name: 1 })
      .skip(page * productsPerPage)
      .limit(productsPerPage);
    //
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//create new product//
const createProduct = async (req, res) => {
  const { name, price, description, amount, category } = req.body; //destructuring
  try {
    const product = await Product.create({
      name,
      price,
      description,
      //amount,
      category,
    });
    res.status(201).json(product);
    console.log(product._id);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
// funcion de stock, una tabla nueva, con id de producto y cantidad//

//get a single product//
const getProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json(`no such product`);
  }
  res.status(200).json(product);
};
//delete product///
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json(`no such product`);
  }
  res.status(200).json(product);
};
//update product///
const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const product = await Product.findByIdAndUpdate(id, req.body);
  if (!product) {
    return res.status(404).json(`no such product`);
  }
  res.status(200).json(product);
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
