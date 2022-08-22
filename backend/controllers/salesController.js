const Sales = require(`../models/salesModels`);
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
  const { idUser, finalPrice } = req.body; //destructuring
  try {
    const sales = await Sales.create({ idUser, finalPrice });
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//get a single sale//
const getSale = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`not a valid id`);
  }
  const sales = await Sales.findById(id);
  if (!sales) {
    return res.status(400).json(`no such sales`);
  }
  res.status(200).json(sales);
};
//delete sales///
const deleteSales = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`not a valid id`);
  }
  const sales = await Sales.findByIdAndDelete(id);
  if (!sales) {
    return res.status(400).json(`no such sales`);
  }
  res.status(200).json(sales);
};
//update sales///
const updateSales = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`not a valid id`);
  }
  const sales = await Sales.findOneAndUpdate({ id }, { ...req.body });
  if (!sales) {
    return res.status(400).json(`no such sales`);
  }
  res.status(200).json(sales);
};

module.exports = {
  getSale,
  createSales,
  getSales,
  deleteSales,
  updateSales,
};
