//userController.js
const userService = require("../services/userService");
const response = require("../utils/response");
const validation = require("../utils/validation");

async function getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    response.sendSuccess(res, users);
}

async function createUser(req, res) {
    const {username, password, email} = req.body
    try {
        const user = await userService.createUser(username, password, email);
        return response.sendSuccess(res, user)

    } catch(err){
        return response.sendError(res, 500, "Error")
    }
}

async function updateUser(req, res) {
    const userData = req.body;
    const userId = req.params.userId;

    if(!validation.isValidUser(userData)){
        response.sendError(res, 400, 'Invalid user data');
    }

    const updateUser = await userService.updateUser(userId, userData);
    response.sendSuccess(res, updateUser)
}

async function deleteUser(req, res){
    const userId = req.params.userId;
    const userExists = await userService.doesUserExist(userId);
    
    if (!userExists) {
      response.sendError(res, 400, 'user doesnt exist');
    }

    await userService.deleteUser(userId);
    response.sendSuccess(res, null, 'User deleted successfully')
}

async function loginUser(req, res) {
    const { username, password } = req.body;

    try {
        const token = await userService.loginUser(username, password);
        

        response.sendSuccess(res, token);
    } catch (err) {
        response.sendError(res, 400, err.message); // Envoyez le message d'erreur à la réponse
    }
}

async function logout(req, res){
    req.session.destroy(err => {
        if(err){

        }
        res.clearCookie()
    })
}


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    loginUser
};