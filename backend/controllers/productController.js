const Product = require(`../models/productModels`);
const mongoose = require(`mongoose`);

//get all products//
const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//create new product//
const createProduct = async (req, res) => {
  const { name,image,price,description,amount } = req.body; //destructuring
  try {
    const product = await Product.create({ name,image,price,description,amount});
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
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
  const product = await Product.findOneAndUpdate({id},req.body);
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
  updateProduct
};