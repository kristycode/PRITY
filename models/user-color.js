const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Creates layout for db
const Color = new Schema(
  {
    hexColor: { type: String, required: true },
    productType: { type: String, required: true },
  },
  { timestamps: true }
);

// Avatar.associate = function (models) {
//     Avatar.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
// };

module.exports = mongoose.model("colors", Color);
