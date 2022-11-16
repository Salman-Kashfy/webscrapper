const express = require('express');
const app = express();
const bodyParser = require("body-parser");

/**
* Initialize Body parser
* */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
* Register your application routes here
* */
const api = require('./routes/api')
app.use('/api', api)

/*
* 404 Route
* */
app.use((req, res) => {
    const error = new Error("Not found");
    error.status = 404;
    res.status(404).json({status:false,message:'Oops. Page not found!'})
});

module.exports = app
