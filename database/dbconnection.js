var mysql = require('mysql');
dbdetails = {
    host     : 'localhost',
    user     : 'root',
    //user password here
    password : '******',
    database : 'mydb' }

var connection = mysql.createConnection(dbdetails);

connection.connect();
// checking connection
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
 if (error) throw error;
 console.log( results[0].solution);
});

module.exports = connection;