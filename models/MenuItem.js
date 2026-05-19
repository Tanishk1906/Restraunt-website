const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: ['Starters', 'Main', 'Drinks'], required: true },
    imageUrl: { type: String, default: 'default-food.jpg' }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);