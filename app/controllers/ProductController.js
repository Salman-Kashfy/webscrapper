const {parse} = require('node-html-parser');
const {amazon} = require('../../utils/axios');

exports.index = (req,res) => {
    res.set('Content-type','text/html')
    amazon.get('/').then((result) => {
        res.write(result.data);
        res.end();
    })
}

