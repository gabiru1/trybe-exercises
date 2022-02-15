const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const port = 3000;

const author = require("./models/author");

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await author.getAllAuthors();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const authorById = await author.getAuthorById(id);

  if (!authorById) return res.status(404).json({ message: 'author not found' });

  res.status(200).json(authorById);
});

app.post('/authors', async (req, res) =>{
  const {first_name, middle_name, last_name} = req.body;

  if(!author.isValid(first_name, middle_name, last_name)) return res.status(400).json(
    { message: 'invalid data' }
  );

  await author.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'successfully created'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));