const compare = (bet, drawn) => bet === drawn;

const sort = (bet, callback) => {
  let drawn = Math.floor(Math.random() * 5 + 1);
  console.log(drawn);
  return callback(bet, drawn) ? "Parabéns você ganhou" : "Tente novamente";
};

console.log(sort(5, compare));
