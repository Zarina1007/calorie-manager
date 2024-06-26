const User = require('../models/User');

const getUserDetails = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findOne({ id: userId }).select('-_id -__v');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getUserDetails,
};
