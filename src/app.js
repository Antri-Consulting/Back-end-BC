require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
