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
    let ulDays = document.querySelector("#days");

    if (element === 24 || element === 31) {
      elementDay.className = "day holiday";
    } else if (element === 25) {
      elementDay.className = "day holiday friday";
    } else if (element === 4 || element === 11 || element === 18) {
      elementDay.className = "day friday";
    } else {
      elementDay.className = "day";
    }

    ulDays.appendChild(elementDay);
  }
}
criaDays();

function criaHoliDays(feriados) {
  let botao = document.createElement("button");
  botao.innerText = feriados;
  botao.id = "btn-holiday";

  let contButton = document.querySelector(".buttons-container");

  contButton.appendChild(botao);
}
criaHoliDays("Feriados");

function clickBotao() {
  let botao = document.querySelector("#btn-holiday");
  let holiDays = document.querySelectorAll(".holiday");
  botao.addEventListener("click", function () {
    for (let i = 0; i < holiDays.length; i++) {
      const element = holiDays[i];

      if (element.style.backgroundColor === "green") {
        element.style.backgroundColor = "rgb(238,238,238)";
      } else {
        element.style.backgroundColor = "green";
      }
    }
  });
}
clickBotao();

function clicksexta(SextaFeira) {
  let botaoSexta = document.createElement("button");
  botaoSexta.innerText = SextaFeira;
  botaoSexta.td = "btn-holiday"

  let contButton = document.querySelector(".buttons-container")

  contButton.appendChild(botaoSexta)
}
clicksexta("Sexta-Feira")

function sextou() {
  
}


