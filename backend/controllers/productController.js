const Product = require(`../models/productModels`);
const Stock = require("../models/stockModels");
const mongoose = require(`mongoose`);

//get all products//
const getProducts = async (req, res) => {
  try {
    //pagination
    const page = req.query.page;
    const productsPerPage = 15;
    const product = await Product.find()
      .sort({ name: 1 }) //sort products by in the front
      .skip(page * productsPerPage)
      .limit(productsPerPage);
    //
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//
const getProductsByCategory = async (req, res) => {
  try {
    const productsPerPage = 20;
    const category = req.query.category;
    const product = await Product.find({ category }).limit(productsPerPage);
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
      category,
    });
    const stock = await Stock.create({
      idProduct: product._id,
      stock: amount,
    });
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
//get many products by id product//
const getManyProductsById = async (req, res) => {
  const parsed = req.query.ids;
  try {
    const product = await Product.find({
      _id: {
        $in: parsed.split(","),
      },
    });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};
//// get a product by name
const getProductsByName = async (req, res) => {
  const name = req.query.name;
  console.log("name", name);
  try {
    const product = await Product.find({ name });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};
//delete product///
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const product = await Product.findByIdAndDelete(id);
  const findStockAndDelete = await Stock.findOneAndDelete({ idProduct: id });
  if (!product) {
    return res.status(404).json(`no such product`);
  }
  res.status(200).json(product);
};
//update product///
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, amount, category, imageNameArray } =
    req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const product = await Product.findByIdAndUpdate(id, {
    name,
    price,
    description,
    category,
    imageNameArray,
  });
  if (amount) {
    const stock = await Stock.findOneAndUpdate(
      { idProduct: id },
      { $inc: { stock: amount } }
    );
  }
  if (!product) {
    return res.status(404).json(`no such product`);
  }
  res.status(200).json(product);
};
//update imageArrayName
const updateImageProduct = async (req, res) => {
  const { id } = req.params;
  const { imageNameArray } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const product = await Product.findByIdAndUpdate(id, {
    imageNameArray,
  });
  if (!product) {
    return res.status(404).json(`no such product`);
  }
  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getManyProductsById,
  getProductsByName,
  getProductsByCategory,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  updateImageProduct,
};
