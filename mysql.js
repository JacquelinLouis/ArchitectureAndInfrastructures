/**
 * Created by Louis on 27/11/2017.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3000",
    user: "",
    password: ""
});
/*
connection.connect(function(err) {
    if (err)
        console.log(err);
    throw err;
    console.log('Mysql Database connected')
});
*/
module.exports = {
    GetMessages: function()
    {
        /*
        connection.connect(function (err) {
            if (err)
                throw err;
            connection.query("SELECT * FROM TABLE Messages", function (err, results) {
                if (err)
                    throw err;
                console.log(results);
            });
        });
        */
        const listMessages = [];
        for (var i = 0; i < 5; ++i) {
            listMessages.push({
                id: i,
                author: "author" + i,
                message: "message" + i,
                date: Date.now()
            });
        }
        return listMessages;
    },
    AddMessage: function (date, author, message) {
        /*
        connection.connect(function (err) {
            if (err)
                throw err;
            const values = {author, message, date};
            connection.query("INSERT INTO TodoList VALUES ?", values, function (err, result) {
                if (err)
                    throw err;
                console.log(result);
            });
        });
        */
    }
}