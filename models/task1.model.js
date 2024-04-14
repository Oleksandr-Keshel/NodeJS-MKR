const mongoose = require('mongoose');

const task1Schema = new mongoose.Schema({
    side: {
        type: Number,
        required: true,
    },
    angleDeg: {
        type: Number,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    perimetr: {
        type: Number,
        required: true,
    },
},  {
    timestamps: true
});

module.exports = mongoose.model('task1', task1Schema);