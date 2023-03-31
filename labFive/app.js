const express = require('express');

const app = express();

// Routes
app.get('/calculator/add', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const result = num1 + num2;
  res.json({ result });
});

app.get('/calculator/subtract', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const result = num1 - num2;
  res.json({ result });
});

app.get('/calculator/multiply', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const result = num1 * num2;
  res.json({ result });
});

app.get('/calculator/divide', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const result = num1 / num2;
  res.json({ result });
});

// Serve static files from public folder
app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
