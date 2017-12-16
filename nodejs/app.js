var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Rajouter tous les routes
const users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);

app.listen(8080);
console.log("Server connected");
module.exports = app;
