const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(
    process.env.MONGODB_CONNECTIONSTRING,
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

require('./routes')(app); // Import routes

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Calorie Manager API',
        version: '1.0.0',
        description: 'API for tracking calorie intake',
    },
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js']
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsDoc(options);

// Setup the route to serve the documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
