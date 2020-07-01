const express = require("express");
const ColorCtrl = require("../controllers/userColor");
//Select multiple similar elements: ctrl + d
const router = express.Router();

router.post("/color", ColorCtrl.captureColor);

module.exports = router;
