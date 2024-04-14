const mongoose = require('mongoose');

const task2Schema = new mongoose.Schema({
    n: {
        type: Number,
        required: true,
    },
    product: {
        type: Number,
        required: true,
    }
},  {
    timestamps: true
});

module.exports = mongoose.model('task2', task2Schema);