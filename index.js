const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.listen(port, ()=> console.log(`Gateway started on port ${port}`))

/*
* Initialize Body parser
* */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',require("./app"))

/*
* 404 Route
* */
app.use((req, res) => {
    const error = new Error("Not found");
    error.status = 404;
    res.status(404).json({status:false,message:'Oops. Page not found!'})
});
