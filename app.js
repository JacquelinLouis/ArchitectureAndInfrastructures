/**
 * Created by Louis on 27/11/2017.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('./mysql');

app.get('/', function(req, res) {
    const listMessages = mysql.GetMessages();
    res.send("GET response : " + JSON.stringify(listMessages));
});

// use x-www-form-urlencoded format to post data
app.post('/', function (req, res) {
    // console.log(req.body);
    const author = req.body.author;
    const message = req.body.message;
    mysql.AddMessage(author, message);
    res.send("POST response");
})


app.listen(port, () => console.log("Server listening on port " + port));