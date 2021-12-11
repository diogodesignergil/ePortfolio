var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "rever",
  password: "teste123",
  database: "portfolio-group",
});

pool.query("Select * From teste", (error, result, fields) => {
  if (error) {
    return console.log(error);
  }
  return console.log(result);
});

module.exports.pool = pool;
