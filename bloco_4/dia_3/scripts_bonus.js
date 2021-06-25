let n = 13;
let middle = (n + 1) / 2;
let nl = middle;
let nr = middle;
let symbol = "*";
for (let line = 1; line <= middle; line += 1) {
  let exitLine = "";
  for (let col = 1; col <= n; col += 1) {
    if (col == nl || col == nr || line == middle) {
      exitLine += symbol;
    } else {
      exitLine += " ";
    }
  }
  nl -= 1;
  nr += 1;
  console.log(exitLine);
}
