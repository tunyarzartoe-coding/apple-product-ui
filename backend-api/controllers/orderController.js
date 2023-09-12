const Order = require("../models/orderModel")

module.exports.createOrder = async (req, res,next) => {
    const newOrder = new Order(req.body);
  
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      next(err);
    }
  }

  module.exports.updateOrder =  async (req, res,next) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      next(err);
    }
  };
  
  //DELETE
  module.exports.deleteOrder = async (req, res,next) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      next(err);
    }
  }

  //getUserOrder
  module.exports.getUserOrder =  async (req, res,next) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }
  

  //getAll

  module.exports.getAllOrders =  async (req, res,next) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }

  //get monthly income

  module.exports.getIncome =  async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  }