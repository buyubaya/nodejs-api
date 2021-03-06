const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// MONGOOSE
mongoose.connect(
    'mongodb://buyubaya:'+encodeURIComponent('By#199215609715417')+'@nodejs-api-shard-00-00-crajj.mongodb.net:27017,nodejs-api-shard-00-01-crajj.mongodb.net:27017,nodejs-api-shard-00-02-crajj.mongodb.net:27017/test?ssl=true&replicaSet=nodejs-api-shard-0&authSource=admin&retryWrites=true', 
    {
        useNewUrlParser: true
    }
);

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HEADERS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

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