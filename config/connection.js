// require('dotenv').config();
var mysql = require("mysql");
var connection;

if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "",
        password: "root",
        database: "burgers_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;