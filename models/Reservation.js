const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    guests: { type: Number, required: true },
    tableNumber: { type: Number }, // 👉 बस यह नई लाइन ऐड हुई है
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', reservationSchema);