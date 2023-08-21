//userService.js
const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');


async function getAllUsers(){
    return userModel.find();
}


async function createUser(userData){
    const hash = bcrypt.hashSync(userData.password, 5)
    const newUser = new userModel({
        ...userData,
        password: hash
    })
    await newUser.save();
    // return userModel.create(userData);
}

async function loginUser(userData){
    
}

async function logout(){

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

async function doesEmailExist(email){
    const existingEmail = await userModel.findOne({email});
    return existingEmail !== null;
}



module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    doesUserExist,
    doesEmailExist
};