// index.js
const express = require('express');
const taskRoutes = require('./src/routes/taskRoutes');
const connectDB = require('./src/utils/db')

const app = express();
const PORT = process.env.PORT || 3000;


connectDB();

app.use(express.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
