const express = require(`express`);
const {
  createSaleDetail,
  getSaleDetail,
  getTotalSalesDetail,
  deleteSalesDetail,
  updateSalesDetail
} = require(`../controllers/salesDetailController`);

const router = express.Router();

router.get("/", getTotalSalesDetail);
router.post(`/`,createSaleDetail)
router.get("/:id", getSaleDetail);
router.patch(`/:id`,updateSalesDetail)
router.delete(`/:id`, deleteSalesDetail);

module.exports = router;
