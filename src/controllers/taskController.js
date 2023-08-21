// taskController.js
const taskService = require('../services/taskServices');
const response = require('../utils/response');

async function getAllTasks(req, res) {
    const tasks = await taskService.getAllTasks();
    response.sendSuccess(res, tasks);
}

async function createTask(req, res) {
    const task = await taskService.createTask(req.body);
    response.sendSuccess(res, task);
}

async function updateTask(req, res) {
    const updatedTask = await taskService.updateTask(req.params.taskId, req.body);
    response.sendSuccess(res, updatedTask);
}

async function deleteTask(req, res) {
    await taskService.deleteTask(req.params.taskId);
    response.sendSuccess(res, null, 'Task deleted successfully.');
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask 
};
