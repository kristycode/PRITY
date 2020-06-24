const Avatar = require('../models/avatars');

createLook = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must create a avatar',
        });
    }

    const avatar = new Avatar(body)

    if (!avatar) {
        return res.status(400).json({ success: false, error: err });
    }

    avatar
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: avatar._id,
                message: 'Avatar created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Avatar not created!',
            })
        });
}

getLookById = async (req, res) => {
    await Avatar.findOne({ _id: req.params.id }, (err, avatar) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!avatar) {
            return res
                .status(404)
                .json({ success: false, error: `Avatar not found` })
        }
        return res.status(200).json({ success: true, data: avatar })
    }).catch(err => console.log(err))
}

getLooks = async (req, res) => {
    await Avatar.find({}, (err, avatars) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!avatars.length) {
            return res
                .status(404)
                .json({ success: false, error: `Avatar not found` })
        }
        return res.status(200).json({ success: true, data: avatars })
    }).catch(err => console.log(err))
}

module.exports = {
    createAvatar,
    getAvatars,
    getAvatarById,
}