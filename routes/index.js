module.exports = (app) => {
    app.use('/addcalories', require('./calories'));
    app.use('/users', require('./users'));
    app.use('/report', require('./report'));
    app.use('/about', require('./about'));
};
