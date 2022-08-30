const express = require(`express`);
const {
  createSales,
  getSale,
  getSales,
  deleteSales,
  updateSales
} = require(`../controllers/salesController`);
/////
const router = express.Router();
///
router.get("/", getSales); /*user admin*/
router.post("/", createSales); /*system*/
router.get("/:id", getSale); /*user admin*/
router.delete(`/:id`,deleteSales)/*user admin*/
router.patch(`/:id`,updateSales) //borrar update//
//agregar ruta para traer todas las ventas de un user:el mismo user//
module.exports = router;