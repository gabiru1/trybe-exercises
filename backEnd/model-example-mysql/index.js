const express = require("express");
const app = express();
const port = 3000;

const author = require("./models/author");

app.get('/authors', async (_req, res) => {
  const authors = await author.getAllAuthors();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const authorById = await author.getAuthorById(id);

  if (!authorById) return res.status(404).json({ message: 'author not found' });

  res.status(200).json(authorById);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));