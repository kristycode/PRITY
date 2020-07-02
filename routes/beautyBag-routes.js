const express = require("express");
const ColorCtrl = require("../controllers/beautyBag");
//Select multiple similar elements: ctrl + d
const router = express.Router();

router.post("/color", ColorCtrl.captureColor);
router.get("/colors", ColorCtrl.getColors);

module.exports = router;
