let num = 10;
let teste = false

if (num === 2) {
  console.log("primo");
}

for (let i = 2; i < num; i++) {
    if (i % 2 === 0) {
        num++
    } else {
        console.log("primo")
    }
}
