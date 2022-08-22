const express = require(`express`);
const {
  createSaleDetail,
  getSaleDetail,
  getTotalSalesDetail,
  deleteSalesDetail,
} = require(`../controllers/salesDetailController`);

const router = express.Router();

router.get("/", getTotalSalesDetail);
router.post(`/`,createSaleDetail)
router.get("/:id", getSaleDetail);
router.delete(`/:id`, deleteSalesDetail);

module.exports = router;
