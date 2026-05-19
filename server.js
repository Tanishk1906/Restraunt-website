const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected Successfully! 🚀"))
  .catch(err => console.log("DB Connection Error: ", err));

// Routes import
const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservation');

// Use Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservation', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🍽️`));