//userController.js
const userService = require("../services/userService");
const response = require("../utils/response");
const validation = require("../utils/validation");

async function getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    response.sendSuccess(res, users);
}

async function createUser(req, res) {
    const userData = req.body;

    if(!validation.isValidUser(userData)){
        response.sendError(res, 400, 'Invalid user data');
    }

    const user = await userService.createUser(userData);
    response.sendSuccess(res, user)
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

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};