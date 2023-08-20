// taskService.js
const taskModel = require('../models/taskModel');

async function getAllTasks() {
    return taskModel.find();
}

async function createTask(taskData) {
    return taskModel.create(taskData);
}

async function updateTask(taskId, taskData) {
    return taskModel.findByIdAndUpdate(taskId, taskData, { new: true });
}

async function deleteTask(taskId) {
    return taskModel.findByIdAndDelete(taskId);
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
