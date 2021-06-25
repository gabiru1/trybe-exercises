let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 1) {
    impar.push(numbers[index]);
  }
}

console.log(impar);
