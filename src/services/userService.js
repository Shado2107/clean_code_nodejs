//userService.js
const userModel = require("../models/userModel");


async function getAllUsers(){
    return userModel.find();
}

async function createUser(userData){
    return userModel.create(userData);
}

async function updateUser(userID, userData){
    return userModel.findByIdAndUpdate(
        userID,
        userData,
        {new: true}
    )
}

async function deleteUser(userId){
    return userModel.findByIdAndDelete(userId);
}

async function doesUserExist(userId) {
    const existingUser = await userModel.findOne({ _id: userId });
    return existingUser !== null;
}


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    doesUserExist
};