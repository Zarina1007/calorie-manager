const Calorie = require('../models/Calorie');

const addCalorie = async (req, res) => {
    const { user_id, year, month, day, description, category, amount } = req.body;
    const newCalorie = new Calorie({ user_id, year, month, day, description, category, amount });

    try {
        const calorie = await newCalorie.save();
        const responseCalorie = await Calorie.findById(calorie._id).select('-__v -_id');
        res.send(responseCalorie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addCalorie,
};
