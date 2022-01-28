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

module.exports = {
  getAllAuthors,
}