const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//var mongoose-bcrypt = require("mongoose-bcrypt");

const User = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: {type: String, required: true/*, bcrypt: true*/},
        email: {type: String, required:true, unique: true},
        looks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'looks'
        }],
        avatars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'avatars'
        }],
        color: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'colors'
        }],
    },
    { timestamps: true },
);


  // Attach to predefined password and secret field
// User.plugin(require('mongoose-bcrypt'));

// User.associate = function (models) {
//     User.hasMany(models.Look, {
//         onDelete: "cascade"
//     });
//     User.hasMany(models.Avatar, {
//         onDelete: "cascade"
//     });
// };

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// User.prototype.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
// User.addHook("beforeCreate", function (user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });

module.exports = mongoose.model('users', User);