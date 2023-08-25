// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
},
{
    timestamps: true,
}

);

module.exports = mongoose.model('User', userSchema);
