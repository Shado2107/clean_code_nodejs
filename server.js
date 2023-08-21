// index.js
const express = require('express');
const Routes = require('./src/routes');
const dotenv = require("dotenv").config();
const connectDB = require('./src/utils/db')

const app = express();
const PORT = process.env.PORT || 3000;


connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', Routes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
