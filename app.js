const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 80;
const mysql = require('mysql');
const fs = require('fs');

function GetMySQLIP() {
    return fs.readFileSync('MySQL_IP', 'utf8');
}

var str = GetMySQLIP().replace(/(\r\n|\n|\r)/gm, "");


const db_config = {
    host: str,
    user: "user",
    password: "user",
    dateStrings: "date",
    database: "TodoList"
};

fs.writeFileSync('TEST', db_config.host);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var connection = mysql.createConnection(db_config);

function HandleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since
    // the old one cannot be reused.

    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(HandleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            HandleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

HandleDisconnect();

app.get('/', function(error, result) {
   result.sendFile('public/page_up.html', { root: __dirname })
});

app.get('/service', function(req, res) {
    res.setHeader("Content-Type", "application/json");
	
		connection.query('SELECT * FROM Messages',
      function (err, rows, fields) {
				res.status(!err ? 200 : 400).end(JSON.stringify(!err ? rows : err));
    });
});

// use x-www-form-urlencoded format to post data
app.post('/service', function (req, res) {
    // console.log(req.body);
    const author = req.body.author;
    const message = req.body.message;
		
		const values = [[author, message]];
    connection.query("INSERT INTO Messages (author, message, date) VALUES (?, NOW())", values, function (err, result) {
				res.status(!err ? 200 : 400).end(JSON.stringify(!err ? result : err));
    });
});

app.listen(port, function() { console.log("Server listening on port " + port) });