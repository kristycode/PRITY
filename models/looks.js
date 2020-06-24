const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Look = new Schema(
    {
        lookname: { type: String, required: true },
        username: {type: String, required: true},
        imgURL: {type: String, required:true}
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