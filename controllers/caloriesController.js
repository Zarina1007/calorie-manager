const Calorie = require('../models/Calorie');
const User = require('../models/User');

const addCalorie = async (req, res) => {
    const { user_id, year, month, day, description, category, amount } = req.body;
    try {
        // Check if the user exists
        const userExists = await User.findOne({ id: user_id });
        if (!userExists) {
            return res.status(400).json({ error: "User not found." });
        }

        // Create new Calorie entry
        const newCalorie = new Calorie({ user_id, year, month, day, description, category, amount });

        // Save the new Calorie entry
        const calorie = await newCalorie.save();

        // Fetch and return the saved Calorie entry without __v and _id fields
        const responseCalorie = await Calorie.findById(calorie._id).select('-__v -_id -id');
        res.send(responseCalorie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addCalorie,
};
