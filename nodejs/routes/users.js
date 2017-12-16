var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var md5 = require('md5');

/* A CHANGER */
var db_config = {
  host: 'ec2-34-239-114-179.compute-1.amazonaws.com',
    user: 'user',
    password: 'user',
    database: 'archi_db'
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.setHeader("Content-Type", "application/json");
	
  connection.query('SELECT * FROM user',
      function (err, rows, fields) {
        if(!err) {
          res.status(200).end(JSON.stringify({status: 0, rows: rows, message: "Getting successful"}));
          console.log('The solution is: ', rows);
        }
        else {
          res.status(400).send(JSON.stringify({status: 1, message: err}));
          console.log("Error while performing query" + err);
        }
    });
});


module.exports = router;
