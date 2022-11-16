const express = require("express");
const router = express.Router();
const ProductController = require('../app/controllers/ProductController')

router.get('/products',ProductController.index);

module.exports = router;
