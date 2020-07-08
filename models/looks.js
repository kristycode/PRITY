const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Look = new Schema(
    {
        imgURL: {type: String},
        eyes:{type: String, required: true},
        eyeshadow:{type: String},
        cls_42:{type: String},
        hair:{type: String, required: true},
        skin:{type: String, required: true},
        blush:{type: String},
        bronzer:{type: String},
        eyeliner:{type: String},
        lipstick:{type: String},
        eyebrowR:{type: String},
        eyebrowL:{type: String},
        cls_6: {type: String},
        cls_7: {type: String},
        cls_1: {type: String},
        cls_8: {type: String},
        cls_9: {type: String},
        cls_5: {type: String},
        cls_11: {type: String},
        cls_4F: {type: String},
        cls_4S: {type: String},
        _creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true },
);

// Look.associate = function (models) {
//     Look.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
// };

module.exports = mongoose.model('looks', Look);