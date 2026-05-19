const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    tableNumber: { type: Number, required: true },
    items: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Preparing' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);