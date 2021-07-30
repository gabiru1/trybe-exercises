const namail = (name) => {
  const email = name.split(" ").join("_").toLowerCase();
  return { name, email: `${email}@trybe.com` };
};

const newEmployees = () => {
  const employees = {
    id1: namail("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: namail("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: namail("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};
console.table(newEmployees(namail));

