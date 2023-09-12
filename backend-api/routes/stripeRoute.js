const { makePayment } = require("../controllers/paymentController");

const router = require("express").Router();

router.post("/payment",makePayment);

module.exports = router;