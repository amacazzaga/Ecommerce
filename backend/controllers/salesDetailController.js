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
  res.status(200).json(sales);
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
//update sales///

module.exports = {
  getSaleDetail,
  getTotalSalesDetail,
  deleteSalesDetail,
};
