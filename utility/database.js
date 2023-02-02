const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "website",
  password: "55555",
});

module.exports = connection.promise();
