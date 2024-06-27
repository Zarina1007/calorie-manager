const mongoose = require('mongoose');
const AutoIncrementField = require('mongoose-sequence')(mongoose);

const calorieSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        ref: 'User'
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'other'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

calorieSchema.plugin(AutoIncrementField, { inc_field: 'id' });

module.exports = mongoose.model('Calorie', calorieSchema);