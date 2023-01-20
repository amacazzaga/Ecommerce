const User = require(`../models/userModels`);
const Sales = require(`../models/salesModels`);
const Product = require(`../models/productModels`);
const Stock = require("../models/stockModels");
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
      return Product.findById(d.idProduct).then((p) => {
        return Stock.find({ idProduct: p._id }).then((s) => {
          return { product: p, amount: d.amount, stock: s[0].stock };
        });
      });
    });
    const productsResult = await Promise.all(detailsMap);
    const user = await User.findById(idUser);
    const isStockEnough = productsResult.some((p) => p.stock < p.amount);
    if (isStockEnough === true) {
      return 
    }

    const sales = await Sales.create({ idUser, details });
    const mapById = productsResult.map((s) => {
      return Stock.findOneAndUpdate(
        { idProduct: s.product._id },
        { $inc: { stock: -s.amount } }
      );
    });
    res.status(201).json(sales);
  } catch (err) {
    res.status(400).json({ msg: "product or user not found: missing data" });
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
