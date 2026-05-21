const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// AI Key लोड हुई या नहीं, यह चेक करने के लिए (लॉग्स में दिखेगा)
console.log("Is API Key loaded?", process.env.GEMINI_API_KEY ? "Yes ✅" : "No ❌");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully! 🚀"))
  .catch(err => console.log("DB Connection Error: ", err));

// Routes Import
const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservation');
const orderRoutes = require('./routes/order');
const chatRoutes = require('./routes/chat'); // 👈 AI Chat Route

// Use Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/chat', chatRoutes); // 👈 AI Chat Route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🍽️`); // Closing ) added here
});