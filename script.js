const sinais = document.querySelectorAll([".sinal"]);
let colorIndex = 0;

const lightOn = {
  red: () => sinais[0].setAttribute("id", "red"),
  yellow: () => sinais[1].setAttribute("id", "yellow"),
  green: () => sinais[2].setAttribute("id", "green"),

  reset: () => {
    sinais.forEach((element) => {
      element.removeAttribute("id");
    });
  },
};

const nextIndex = () => (colorIndex = colorIndex < 2 ? ++colorIndex : 0);

const changeSignal = () => {
  lightOn["reset"]();
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  lightOn[color]();
  nextIndex();
};

setInterval(changeSignal, 1000);
