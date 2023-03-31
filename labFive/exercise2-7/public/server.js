const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/calculator/add', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 + num2;
  res.json({ result });
});

app.get('/calculator/subtract', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 - num2;
  res.json({ result });
});

app.get('/calculator/multiply', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 * num2;
  res.json({ result });
});

app.get('/calculator/divide', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 / num2;
  res.json({ result });
});

app.get('/calculator/exponentiation', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = Math.pow(num1, num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
