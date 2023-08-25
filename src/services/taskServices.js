// taskService.js
const taskModel = require('../models/taskModel');

async function getAllTasks() {
    return taskModel.find({}).populate("createdBy", "username email");
}

async function createTask(title, description, priority, dueDate, shareWith, createdBy, completed) {
   
    const newTask = await new taskModel({
        title,
        description,
        priority,
        dueDate: new Date(dueDate),
        completed,
        shareWith,
        createdBy,
        completed
    });
    const savedTask = await newTask.save();

    return savedTask;
    
}

async function updateTask(taskId, taskData) {
    return taskModel.findByIdAndUpdate(
        taskId, 
        taskData, 
        { new: true }
    );
}

async function deleteTask(taskId) {
    return taskModel.findByIdAndDelete(taskId);
}

async function shareTaskWith(taskId, userId){
    try{
        const task = await taskModel.findById(taskId);
        if(!task){
            throw new Error("Tache non trouvée");
        }

        if(task.shareWith.includes(userId)){
            throw new Error("cette tache est deja partagée avec cet user")
        }

        task.shareWith.push(userId);
        await task.save();
        return task;

    } catch(err){
        throw err
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    shareTaskWith
};
