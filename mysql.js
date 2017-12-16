/**
 * Created by Louis on 27/11/2017.
 */
var mysql = require('mysql');
var db_config = mysql.createConnection({
    host: "127.0.0.1",
    port: "3000",
    user: "architecte",
    password: "infrastructure",
    dateStrings: "date",
    database: "todolist"
});

var connection;
function HandleDisconnect() {
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
};

module.exports = {
    GetMessages: function(callback)
    {
        connection.query("SELECT * FROM TABLE Messages", function (err, results) {
            if (err) {
                console.log(err);
                throw err;
            }
            callback(err, results);
        });
    },
    AddMessage: function (author, message, callback) {
        const values = {author, message};
        connection.query("INSERT INTO messages (author, message, date) VALUES (?, NOW())", values, function (err, result) {
            if (err){
                console.log(err);
                throw err;
            }
            callback(result);
        });
    }
}