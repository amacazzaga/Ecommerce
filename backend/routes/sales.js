const express = require(`express`);
const router = express.Router();
const {
  createSales,
  getSale,
  getPurchase,
  getSales,
  deleteSales,
} = require(`../controllers/salesController`);
const { authToken } = require(`../middlewares/tokenMiddleware`);
const { rolAdmin } = require(`../middlewares/rolAdminMiddleware`);
///ROUTES//
router.get("/",authToken,rolAdmin, getSales); /*user admin*/
router.post("/", createSales); /*system*/
router.get("/:id",authToken,rolAdmin, getSale); /*user admin*/
router.get("/myshopping/:idUser", getPurchase); /*user client*/
router.delete(`/:id`,authToken,rolAdmin,deleteSales)/*user admin*/

module.exports = router;