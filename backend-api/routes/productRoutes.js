const express = require('express')
const { verifyTokenAndAdmin } = require('../middleware/auth')
const { createProduct, editProduct, deleteProduct, getProducts } = require('../controllers/productController')
const router = express.Router()

//productRoutes
router.post("/product/create",verifyTokenAndAdmin,createProduct)
router.put("/product/edit/:id",verifyTokenAndAdmin,editProduct)
router.delete("/product/delete/:id",verifyTokenAndAdmin,deleteProduct)
router.get("/products",getProducts)



module.exports = router