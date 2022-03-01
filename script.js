const sinais = document.querySelectorAll([".sinal"]);


const lightOn = {
    'red' : () => sinais[0].setAttribute("id", "red") ,
    'yellow' : () => sinais[1].setAttribute("id", "yellow") ,
    'green' : () => sinais[2].setAttribute("id", "green")
}

const changeSignal = () => {
    lightOn['red']()
}

console.log(changeSignal())