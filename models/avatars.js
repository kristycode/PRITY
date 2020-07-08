const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Avatar = new Schema(
    {
        username: { type: String, required: true },
        eye_color: {type: String, required: true},
        face_shape: {type: String, required:true},
        hair_color: {type: String, required: true},
        skin_tone: {type: String, required: true},
        _creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true },
);

// Avatar.associate = function (models) {
//     Avatar.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
// };

module.exports = mongoose.model('avatars', Avatar);