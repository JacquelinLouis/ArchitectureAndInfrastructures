/**
 * Created by Louis on 27/11/2017.
 */
const express = require('express');
const app = express();
const port = 3000;

const mysql = require('./mysql');

app.get('/', function(req, res) {
    res.send("GET response");
});

app.post('/', function (req, res) {
    res.send("POST response");
})


app.listen(port, () => console.log("Server listening on port " + port));