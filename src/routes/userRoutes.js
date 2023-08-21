// taskRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userkId', userController.deleteUser);

module.exports = router;
