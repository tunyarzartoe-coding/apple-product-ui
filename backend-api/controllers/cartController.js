const Cart = require("../models/cartModel")

//create
module.exports.createCart=  async (req, res,next) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      next(err)
    }
  }

  //update
  module.exports.updateCart= async (req, res,next) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      next(err)
    }
  }

  //delete
  module.exports.deleteCart = async (req, res,next) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      next(err);
    }
  }

  //findByUserId
  module.exports.findCartByUserId = async (req, res,next) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      next(err);
    }
  }

  //getAll
  module.exports.getAllCarts = async(req,res,next) =>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
      } catch (err) {
        next(err);
      }
  }