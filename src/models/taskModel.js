// taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: String,
    completed: Boolean
});

module.exports = mongoose.model('Task', taskSchema);
