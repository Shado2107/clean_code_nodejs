// taskController.js
const taskService = require('../services/taskServices');
const response = require('../utils/response');

async function getAllTasks(req, res) {
    try{
        const tasks = await taskService.getAllTasks();
        response.sendSuccess(res, tasks);
    } catch(err){
        response.sendError(res, 500, err.message)
    }
    
}

async function createTask(req, res) {
    try{

        const {title, description, priority, dueDate, shareWith, createdBy,completed} = req.body;
                
        const task = await taskService.createTask(title, description, priority, dueDate, shareWith, createdBy, completed);
        response.sendSuccess(res, task);

    }catch(err){

        response.sendError(res, 500, err.message)

    }
    
}

async function updateTask(req, res) {
    const updatedTask = await taskService.updateTask(req.params.taskId, req.body);
    response.sendSuccess(res, updatedTask);
}

async function deleteTask(req, res) {
    await taskService.deleteTask(req.params.taskId);
    response.sendSuccess(res, null, 'Task deleted successfully.');
}

async function shareTaskWith(req, res){
    const taskId = req.params.taskId;
    const userId = req.body.userId
    
    try{
        const task = await taskService.shareTaskWith(taskId, userId);

        return response.sendSuccess(task, 200)
    } catch(err){
        return response.sendError(res, 400, err.message)
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    shareTaskWith
};
