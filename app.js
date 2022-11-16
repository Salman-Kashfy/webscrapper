const express = require('express');
const route = express.Router();
const {parse} = require('node-html-parser');
const axios = require('axios');

const api = axios.create({
    baseURL: 'https://www.amazon.com',
    timeout: 10000,
});

route.get('/',async (req, res, next) => {
    res.set('Content-type','text/html')
    api.get('/').then((result) => {
        // console.log(result.data)
        res.write(result.data);
        res.end();
    })
    // res.status(200).json({
    //     message: 'Orders were fetched !'
    // });
    return
});

module.exports = route
