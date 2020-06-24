const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Look = new Schema(
    {
        lookname: { type: String, required: true },
        username: {type: String, required: true},
        img: {type: String, required:true}
    },
    { timestamps: true },
);

module.exports = mongoose.model('looks', Look);