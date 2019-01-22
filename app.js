const express = require('express');
const app = express();

// ROUTES
const projectsRoute = require('./routes/projects');

app.use('/projects', projectsRoute);

// ERRORS
app.use((req, res, next) => {
    let error = new Error('NOT FOUND');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});


module.exports = app;