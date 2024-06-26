const Calorie = require('../models/Calorie');

const getMonthlyReport = async (req, res) => {
    const { user_id, year, month } = req.query;

    try {
        const calories = await Calorie.find({ user_id, year, month });
        
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: [],
        };

        calories.forEach((item) => {
            report[item.category].push({
                day: item.day,
                description: item.description,
                amount: item.amount,
            });
        });

        res.json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getMonthlyReport,
};
