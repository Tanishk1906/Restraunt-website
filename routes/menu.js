const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// GET all menu items
router.get('/', async (req, res) => {
    try {
        const menu = await MenuItem.find();
        res.json(menu);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new menu item (Admin use)
router.post('/', async (req, res) => {
    const item = new MenuItem(req.body);
    try {
        const savedItem = await item.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;