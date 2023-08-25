// taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { verifyToken } = require('../utils/functions');

router.get('/', taskController.getAllTasks);
router.post('/', verifyToken, taskController.createTask);
router.put('/:taskId', taskController.updateTask);
router.delete('/:taskId', taskController.deleteTask);
router.put('/share/:taskId', taskController.shareTaskWith);


module.exports = router;
 