const mongoose = require('mongoose');

const adminScema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 250
    },
    email: {
        type: String,
        required: true,
        min: 8,
        max: 250
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 550
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: Data.now
    }
});

module.exports = mongoose.model('Admin', adminScema);
