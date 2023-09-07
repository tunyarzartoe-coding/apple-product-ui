const { editUser, deleteUser, getUser, getAllUser, getUserStats } = require('../controllers/userController')
const {  verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/auth')

const router = require('express').Router()


//update
router.put("/edit/:id",verifyTokenAndAuthorization,editUser)
router.delete("/delete/:id",verifyTokenAndAuthorization,deleteUser)
router.get("/find/:id",verifyTokenAndAdmin,getUser)
router.get("/users",verifyTokenAndAdmin,getAllUser)
router.get("/users/stats",verifyTokenAndAdmin,getUserStats)



module.exports = router