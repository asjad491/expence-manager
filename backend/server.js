const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
const port = 5000;


// Enable CORS
app.use(cors());

// Create connection to MySQL database
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'asjad123',
  database: 'expensedb'
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to save expenses to the database
app.post('/api/save-expenses', (req, res) => {
  const { filename, expenses } = req.body;

  // Insert expenses into database
  expenses.forEach(expense => {
    const { name, amount, date } = expense;
    const sql = `INSERT INTO expenses (expensename, amount, date, filename) VALUES (?, ?, ?, ?)`;
    db.query(sql, [name, amount, date, filename], (err, result) => {
      if (err) {
        console.error('Error saving expense:', err);
        return res.status(500).json({ error: 'An error occurred while saving expenses' });
      }
    });
  });

  res.status(200).json({ message: 'Expenses saved successfully' });
});

// Endpoint to retrieve expenses from the database based on filename
app.get('/api/get-expenses', (req, res) => {
    const { filename } = req.query;
    const sql = `SELECT * FROM expenses WHERE filename = ?`;
    db.query(sql, [filename], (err, results) => {
      if (err) {
        console.error('Error retrieving expenses:', err);
        return res.status(500).json({ error: 'An error occurred while retrieving expenses' });
      }
      console.log('Retrieved expenses:', results); // Log the retrieved data
      res.status(200).json(results);
    });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
