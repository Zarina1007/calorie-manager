const mongoose = require('mongoose');
const { DateTime } = require('luxon');

// Function to get the ordinal suffix of a number
function getOrdinalSuffix(day) {
    const j = day % 10,
        k = day % 100;
    if (j == 1 && k != 11) {
        return 'st';
    }
    if (j == 2 && k != 12) {
        return 'nd';
    }
    if (j == 3 && k != 13) {
        return 'rd';
    }
    return 'th';
}

const userSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true, 
        unique: true 
    },
    first_name: { 
        type: String, 
        required: true 
    },
    last_name: { 
        type: String, 
        required: true 
    },
    birthday: { 
        type: Date, 
        required: true 
    },
});

// Custom toJSON method to format the birthday
userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    if (obj.birthday) {
        let dt = DateTime.fromJSDate(obj.birthday);
        let day = dt.toFormat('d');
        let month = dt.toFormat('LLLL');
        let year = dt.toFormat('yyyy');
        obj.birthday = `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
    }
    return obj;
};

module.exports = mongoose.model('User', userSchema);