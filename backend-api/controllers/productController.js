const Product = require("../models/productModel");
const ErrorResponse = require("../utils/errorResponse");

//getAll
module.exports.getProducts = async (req, res, next) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
    next(err);
  }
};

//create
module.exports.createProduct = async (req, res, next) => {
 
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json({
      success:true,
      savedProduct
    });
  } catch (err) {
    next(err)
  }

};

//update
module.exports.editProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    next(new ErrorResponse("server error", 500));
  }
};
//delete
module.exports.deleteProduct = async (req, res, next) => {
  try {
    const deleteProduct = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully!",
    });
  } catch (err) {
    next(new ErrorResponse("server error", 500));
  }
};
