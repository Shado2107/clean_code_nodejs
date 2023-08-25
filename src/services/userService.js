//userService.js
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function getAllUsers(){
    return userModel.find();
} 


async function createUser(username, password, email){
    const hash = await bcrypt.hashSync(password, 10)
    
    const newUser = new userModel({
        username,
        email,
        password: hash
    })
    await newUser.save();
    const data = {user: newUser} ;

    return data;

}


async function loginUser(username, password) {
    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            throw new Error('Incorrect password');
        }

        const token = jwt.sign(
            { 
                userId: user._id 
            },
                process.env.JWT_KEY, // Remplacez par votre véritable clé secrète
            { 
                expiresIn: '1h' 
            }
        );

        const data = {"user": user, "Token":token}
        return data ;

    } catch (error) {
        throw error; // Ré-throw l'erreur pour la traiter en amont si nécessaire
    }
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