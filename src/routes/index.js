const express = require('express');
const userRoutes = require('./userRoutes');
const taskRoutes = require("./taskRoutes");
const authRoutes = require("./authRoutes")

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks',taskRoutes);
router.use('/',authRoutes);

module.exports = router;
