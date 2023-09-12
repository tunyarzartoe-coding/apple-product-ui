const { createCart, updateCart, deleteCart, findCartByUserId, getAllCarts } = require('../controllers/cartController');
const { isAuthenticated, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/auth');

const router = require('express').Router()


//CREATE
router.post("/cart/create", isAuthenticated,createCart);
//UPDATE
router.put("/cart/edit/:id", verifyTokenAndAuthorization, updateCart);
  
  //DELETE
  router.delete("/cart/:id", verifyTokenAndAuthorization, deleteCart);
  
  //GET USER CART
  router.get("/cart/find/:userId", verifyTokenAndAuthorization,findCartByUserId);
  
  //GET ALL
  router.get("/carts", verifyTokenAndAdmin,getAllCarts);


module.exports = router