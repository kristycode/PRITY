const Look = require('../models/looks');

createLook = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must create a look',
        });
    }

    const look = new Look(body)

    if (!look) {
        return res.status(400).json({ success: false, error: err });
    }

    look
        .save()
        .then(() => {

            async (req,res)=>{
                const { id } = req.params;
                const userByLook = await Look.findById(id).populate('_creator');
                res.send(userByLook);
            }

            return res.status(201).json({
                success: true,
                id: look._id,
                message: 'Look created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Look not created!',
            })
        });
}

getLookById = async (req, res) => {
    await Look.findOne({ _id: req.params.id }, (err, look) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!look) {
            return res
                .status(404)
                .json({ success: false, error: `Look not found` })
        }
        return res.status(200).json({ success: true, data: look })
    }).catch(err => console.log(err))
}

getLooks = async (req, res) => {
    await Look.find({}, (err, looks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!looks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Look not found` })
        }
        return res.status(200).json({ success: true, data: looks })
    }).catch(err => console.log(err))
}

userByLook = async (req,res)=>{
    const { id } = req.params;
    const userByLook = await Look.findById(id).populate('_creator');
    res.send(userByLook);
}

module.exports = {
    createLook,
    getLooks,
    getLookById,
    userByLook
}