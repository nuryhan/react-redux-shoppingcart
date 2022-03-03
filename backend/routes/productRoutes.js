const express = require("express");

const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");
// get all products
//get /api/products
// @access public
router.get("/", getAllProducts);

// get a product
//get /api/products/:id
// @access public
router.get("/:id", getProductById);

module.exports = router;
