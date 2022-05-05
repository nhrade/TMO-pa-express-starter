const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let books = [];
let id = 1;

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});


app.post("/api/books", (req, res) => {
  const book = req.body;
  book.id = id;
  books.push(book);
  id++;
  res.status(201).send(book);
});

app.get("/api/books", (req, res) => {
  books.sort((a, b) => (a.title > b.title) ? 1 : -1);
  res.status(200).send(books);
});

app.delete("/api/books", (req, res) => {
  books = [];
  res.status(204).send();
});

module.exports = app;
