const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
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
    mobile: {
        type: String,
        required: true,
        min: 9,
        max: 20
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
        default: Date.now()
    }
});

module.exports = mongoose.model('User', userScema);
