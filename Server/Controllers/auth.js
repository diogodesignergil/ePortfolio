var mysql = require("./connection").pool;

const login = (req, res) => {
  mysql.getConnection(function (err, conn) {
    if (err) {
      conn.release();
      next(err);
    } else
      conn.query("SELECT * FROM teste", function (err, rows) {
        console.log(rows);
        conn.release();
        if (!(rows.length === 0)) {
          res.status(200).json({ rows });
        } else {
          res.status(500).json({ message: err });
        }
      });
  });
};

module.exports = { login };
