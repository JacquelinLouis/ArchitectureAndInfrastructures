/**
 * Created by Louis on 27/11/2017.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3000",
    user: "architecte",
    password: "infrastructure",
    dateStrings: "date"
});

module.exports = {
    GetMessages: function()
    {
        connection.query("SELECT * FROM TABLE Messages", function (err, results) {
            if (err)
                throw err;
            console.log(results);
            return results;
        });
    },
    AddMessage: function (author, message) {
        const values = {author, message};
        connection.query("INSERT INTO messages (author, message, date) VALUES (?, NOW())", values, function (err, result) {
            if (err)
                throw err;
            console.log(result);
            return result;
        });
    }
}