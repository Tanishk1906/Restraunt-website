const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// POST: Create a new reservation
router.post('/', async (req, res) => {
    const reservation = new Reservation(req.body);
    try {
        const savedReservation = await reservation.save();
        res.status(201).json({ message: "Table booked successfully!", data: savedReservation });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;