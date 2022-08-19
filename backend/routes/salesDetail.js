const express = require(`express`);
const {
  getSaleDetail,
  getTotalSalesDetail,
  deleteSalesDetail,
} = require(`../controllers/salesDetailController`);

const router = express.Router();

router.get("/", getTotalSalesDetail);
router.get("/:id", getSaleDetail);
router.delete(`/:id`, deleteSalesDetail);

module.exports = router;
