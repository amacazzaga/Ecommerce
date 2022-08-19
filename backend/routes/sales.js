const express = require(`express`);
const {
  createSales,
  getSale,
  getSales,
  deleteSales,
  updateSales
} = require(`../controllers/salesController`);

const router = express.Router();

router.get("/", getSales);
router.post("/", createSales);
router.get("/:id", getSale);
router.delete(`/:id`,deleteSales)
router.patch(`/:id`,updateSales)
module.exports = router;