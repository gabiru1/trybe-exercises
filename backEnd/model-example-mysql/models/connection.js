const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: "trybe",
  password: "69151269",
  host: "localhost",
  database: "model_example"
});

module.exports = connection;
