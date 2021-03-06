var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;