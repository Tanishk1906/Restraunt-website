const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// नया और सही कोड:
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully! 🚀"))
  .catch(err => console.log("DB Connection Error: ", err));

// Routes import
const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservation');
// Routes import (Add this with existing imports)
const orderRoutes = require('./routes/order');

// Use Routes (Add this with existing app.use)
app.use('/api/order', orderRoutes);
// Use Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservation', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🍽️`));