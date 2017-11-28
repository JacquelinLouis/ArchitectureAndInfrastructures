/**
 * Created by Louis on 27/11/2017.
 */
const express = require('express');
const app = express();
const port = 3000;

const mysql = require('./mysql');

app.get('/', function(req, res) {
    const listMessages = mysql.GetMessages();
    res.send("GET response : " + JSON.stringify(listMessages));
});

app.post('/', function (req, res) {
    // console.log(req.body);
    const author = req.body.author;
    const message = req.body.message;
    const date = req.body.date;
    res.send("POST response");
})


app.listen(port, () => console.log("Server listening on port " + port));