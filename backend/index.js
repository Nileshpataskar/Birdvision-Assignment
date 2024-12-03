const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json()); // Native JSON parser

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.post("/employees", (req, res) => {
  const { name, email, position, salary } = req.body;
  const sql =
    "INSERT INTO employees (name, email, position, salary) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, position, salary], (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send("Employee added successfully!");
  });
});

app.get("/employees", (req, res) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results); // Send the results as JSON
  });
});

app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM employees WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err.message);
    if (result.affectedRows === 0)
      return res.status(404).send("Employee not found!");
    res.send("Employee deleted successfully!");
  });
});

app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, position, salary } = req.body;
  const sql = "UPDATE employees SET name = ?, email = ?, position = ?, salary = ? WHERE id = ?";
  db.query(sql, [name, email, position, salary, id], (err, result) => {
    if (err) return res.status(500).send(err.message);
    if (result.affectedRows === 0) return res.status(404).send("Employee not found!");
    res.send("Employee updated successfully!");
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
