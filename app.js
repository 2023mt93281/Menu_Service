const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const menuRoutes = require('./routes/menuRoutes');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/menu', menuRoutes);  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
