const express = require("express");
const makeupctrl = require("../controllers/makeup");
//Select multiple similar elements: ctrl + d
const router = express.Router();

router.get("/products/:productType/:brand", makeupctrl.getProducts);

module.exports = router;
