const express = require("express");
const app = express();
const port = 3000;

const author = require("./models/author");

app.get('/authors', async (_req, res) => {
  const authors = await author.getAllAuthors();

  res.status(200).json(authors);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));