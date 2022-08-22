const SalesDetail = require(`../models/salesDetailModels`);
const mongoose = require(`mongoose`);

//get all sales detail//
const getTotalSalesDetail = async (req, res) => {
  try {
    const totalSalesDetail = await SalesDetail.find();
    res.status(200).json(totalSalesDetail);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//create new sales detail//
const createSaleDetail = async (req, res) => {
  const { idSale, idProduct, amount } = req.body; //destructuring
  try {
    const salesDetail = await SalesDetail.create({ idSale, idProduct, amount });
    res.status(200).json(salesDetail);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//get a single sale detale//
const getSaleDetail = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`not a valid id`);
  }
  const salesDetail = await SalesDetail.findById(id);
  if (!salesDetail) {
    return res.status(400).json(`no such sales`);
  }
  res.status(200).json(salesDetail);
};
//delete a sale detail///
const deleteSalesDetail = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`not a valid id`);
  }
  const salesDetail = await SalesDetail.findByIdAndDelete(id);
  if (!salesDetail) {
    return res.status(400).json(`no such sales`);
  }
  res.status(200).json(sales);
};
//update sales detail///
const updateSalesDetail = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(404).json(`not a valid id`);
  }
  const salesDetail = await SalesDetail.findOneAndUpdate({id},{...req.body});
  if (!salesDetail) {
   return res.status(400).json(`no such sale detail`);
  }
  res.status(200).json(salesDetail);
};

module.exports = {
  createSaleDetail,
  getSaleDetail,
  getTotalSalesDetail,
  deleteSalesDetail,
  updateSalesDetail
};
