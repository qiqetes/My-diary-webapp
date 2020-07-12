const mongoose = require('mongoose');
const { model } = require('./user');

const DaySchema = mongoose.Schema({
    dayId: Number,
    date: {
        type: Date,
        required: true
    },
    diarys: [{ diary: String, date: Date }],
    // Valid dates are written with this format "yyyy-mm-dd"

});

module.exports = mongoose.model('Day', DaySchema);