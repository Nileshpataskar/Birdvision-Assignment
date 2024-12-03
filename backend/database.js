const mysql = require("mysql2");

const DbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "NotNilesh@04",
  database: "bird_vision",
});

DbConnection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }
  console.log("Connected to MySQL!");
});

module.exports = DbConnection;
