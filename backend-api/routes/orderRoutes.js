const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getIncome,
  getUserOrder,
} = require("../controllers/orderController");
const {
  isAuthenticated,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../middleware/auth");

const router = require("express").Router();

//CREATE

router.post("/order/create", isAuthenticated, createOrder);

//UPDATE
router.put("/order/edit/:id", verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete("/order/delete/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get("/order/find/:userId", verifyTokenAndAuthorization, getUserOrder);

// //GET ALL
router.get("/orders", verifyTokenAndAdmin, getAllOrders);

// GET MONTHLY INCOME
router.get("/order/income", verifyTokenAndAdmin, getIncome);

module.exports = router;
