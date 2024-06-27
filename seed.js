const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(
    process.env.MONGODB_CONNECTIONSTRING,
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Seed function
async function seed() {
    try {
        await User.deleteMany(); // Make sure to clear existing users if needed

        const userData = [
            {
                id: 123123,
                first_name: 'moshe',
                last_name: 'israeli',
                birthday: new Date('1990-01-10')
            },
        ];

        for (let user of userData) {
            await new User(user).save();
        }

        console.log('Initial users created');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.connection.close();
    }
}

// Run the seed function
seed();
