const express = require('express');

const LookCtrl = require('../controllers/look');

const router = express.Router()

router.post('/look', LookCtrl.createLook);
router.get('/look/:id', LookCtrl.getLookById);
router.get('/looks', LookCtrl.getLooks);
router.post('/look/populate/:id', LookCtrl.userByLook);

module.exports = router;