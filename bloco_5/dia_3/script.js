function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function criaDays() {
  for (let i = 0; i < dezDaysList.length; i++) {
    const element = dezDaysList[i];

    let elementDay = document.createElement("li");
    elementDay.innerText = element;
    elementDay.className = "day";

    let ulDays = document.querySelector("#days");

    ulDays.appendChild(elementDay);

    if (elementDay === 24 || elementDay === 31) {
      ulDays.classList = "holyday";
    } else if (elementDay === 25) {
      ulDays.className = "day holyday friday";
    } else if (elementDay === 4 || elementDay === 11 || elementDay === 18) {
      ulDays.className = "day friday";
    } else {
      ulDays.className = "day";
    }
  }
}
criaDays();
