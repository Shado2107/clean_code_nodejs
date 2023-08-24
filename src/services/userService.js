//userService.js
const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const { generateToken } = require("../utils/functions");


async function getAllUsers(){
    return userModel.find();
} 


async function createUser(username, password){
    const hash = await bcrypt.hashSync(password, 10)
    
    const newUser = new userModel({
        ...userData,
        password: hash
    })
    await newUser.save();
    const data = {user: newUser} ;

    return data;

}

async function loginUser(username, password){
    const user = await userModel.findOne({username});
    if(!user){
        throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect){
        throw new Error('Incorrect password');
    } 

    const token = jwt.sign(
        {userId: user._id},
        "secret-key",
        {expiresIn: '1h'}
    )
    
    return token;

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
    doesEmailExist,
    loginUser
};