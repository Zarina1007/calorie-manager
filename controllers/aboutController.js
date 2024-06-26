const getAboutInfo = async (req, res) => {
    try {
        const developers = [
            { firstname: 'dave', lastname: 'cohen', id: 234234, email: 'daddd@gmail.com' },
            { firstname: 'tal', lastname: 'levy', id: 34534544, email: 'tal@gmail.com' },
        ];

        // Simulating a delay if needed, otherwise this part of code is synchronous
        await new Promise(resolve => setTimeout(resolve, 1));

        res.json(developers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getAboutInfo,
};
