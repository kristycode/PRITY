const express = require('express');

const AvatarCtrl = require('../controllers/avatar');

const router = express.Router()

router.post('/avatar', AvatarCtrl.createAvatar);
router.get('/avatar/:id', AvatarCtrl.getAvatarById);
router.get('/avatars', AvatarCtrl.getAvatars);

module.exports = router;