const User = require(`../models/userModels`);
const Sales = require(`../models/salesModels`);
const Product = require(`../models/productModels`);
const mongoose = require(`mongoose`);

//get all sales//
const getSales = async (req, res) => {
  try {
    const sales = await Sales.find();
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//create new sales//
const createSales = async (req, res) => {
  const { idUser, details } = req.body; //destructuring
  try {
    const detailsMap = details.map((d) => {
      return Product.findById(d.idProduct);
    });
    const productsResult = await Promise.all(detailsMap);
    const user = await User.findById(idUser);
    console.log("productsResult", productsResult);
    if (productsResult.some((p) => p == null) || !user) {
      return res.status(404).json(`invalid product or user not found`);
    }//buscar tb stock de cada producto y actualizar la tablda de stock
    const sales = await Sales.create({ idUser, details });
    res.status(201).json(sales);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//get a single sale//
const getSale = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const sales = await Sales.findById(id);
  if (!sales) {
    return res.status(404).json(`no such sales`);
  }
  res.status(200).json(sales);
};
//get shopping by client//
const getPurchase = async (req, res) => {
  const { idUser } = req.params;
  if (!mongoose.Types.ObjectId.isValid(idUser)) {
    return res.status(400).json(`not a valid id`);
  }
  const purchase = await Sales.find({ idUser });
  if (!purchase) {
    return res.status(404).json(`you have no purchase`); //bring
    //empty array
  }
  res.status(200).json(purchase);
};
//delete sales///
const deleteSales = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const sales = await Sales.findByIdAndDelete(id);
  if (!sales) {
    return res.status(404).json(`no such sales`);
  }
  res.status(200).json(sales);
};

module.exports = {
  getSale,
  createSales,
  getSales,
  deleteSales,
  getPurchase,
};
