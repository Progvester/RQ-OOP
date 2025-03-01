const express = require('express');
const quotes = require('./data/quotes.js');
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/quotes/random-single', (req, res) => {
  res.json(getRandomQuote());
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});
