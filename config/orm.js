var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, burger_name, function(err, res) {
            if (err) throw err;
            cb(res)
        });
    },
    updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, id, function(err,res) {
            if (err) throw err;
            cb(res)
        });
    }
};

module.exports = orm;

