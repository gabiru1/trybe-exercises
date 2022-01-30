const connection = require("./connection");
const fullName = require("../services/fullname");

const serialize = (authorData) => {
  const newData = authorData.map((author) => (
    {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name
  }));
  return newData;
}

const getAllAuthors = async () => {
  const [ authors ] = await connection.execute("SELECT id, first_name, middle_name, last_name FROM authors");

  return serialize(authors).map(fullName); // para cada elemento do array sera aplicado a funcao serialize que muda o nome das chaves
}

const getAuthorById = async (id) => {
  const [ authorData ] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?",
    [id]
  );

  if (authorData.length === 0) return null;

  console.log(authorData);

  const { firstName, middleName, lastName } = serialize(authorData)[0]

  return fullName({
    id,
    firstName,
    middleName,
    lastName
  })
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const createAuthor = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
  [firstName, middleName, lastName]
  ); 

module.exports = {
  getAllAuthors,
  getAuthorById,
  isValid,
  createAuthor,
}