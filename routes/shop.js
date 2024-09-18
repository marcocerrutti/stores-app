const path = require('path');
const routDir = require("../util/path");
const express = require("express");
const router = express.Router();

const productController = require('../controllers/products');

router.get("/", productController.getProducts);

module.exports = router;
