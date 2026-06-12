// https://todo-backend-gl1o.onrender.com
//render backend link
// http://localhost:5000


const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors(
  {
  origin: 'https://phobiaytodoapp.netlify.app'
}
));
app.use(express.json());

const dbUrl = new URL(process.env.MYSQL_PUBLIC_URL);

const db = mysql.createConnection({
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.slice(1),
  port: dbUrl.port,
});

// const db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'turasqlMine13adow@',
//   database: 'taskdb',
//   port: 3306,
// });

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected!");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a task
app.post("/tasks", (req, res) => {
  const { title, category, status, description } = req.body;
  db.query("INSERT INTO tasks (title, category, status, description) VALUES (?, ?, ?, ?)", 
    [title, category, status, description], 
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId });
    }
  );
});

app.delete("/tasks/:id", (req, res) => {
  db.query("DELETE FROM tasks WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Task deleted" });
  });
});

app.put("/tasks/:id", (req, res) => {
  const { title, category, description, status } = req.body;
  db.query("UPDATE tasks SET title=?, category=?, description=?, status=? WHERE id=?",
    [title, category, description, status, req.params.id],
    (err) => {
      if (err) throw err;
      res.json({ message: "Task updated" });
    }
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));