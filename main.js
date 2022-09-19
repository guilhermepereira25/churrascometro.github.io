// carne - 400gr por pessoa +6 de horas - 650 
// cerveja - 1200ml por pessoa + 6 horas - 2000ml 
// refrigerantes - 1000ml por pessoa - 6 horas - 1500ml 
// linguiça - 200g por pessoa
// crinças valem por 0,5

let hours = document.getElementById("time");
let adult = document.getElementById("adultos");
let child = document.getElementById("kids");

let resultado = document.getElementById("final-calc");

function showResult() {
    let valueAdults = adult.value;
    let valueChild = child.value;
    let valueHours = hours.value;

    let totalCarne = calcCarne(valueHours) * valueAdults + ((calcCarne(valueHours)/2) * valueChild);
    let totalCerveja = calcCerveja(valueHours) * valueAdults;
    let totalBebida = calcBebidas(valueHours) * valueAdults + ((calcBebidas(valueHours)/2) * valueChild);

    resultado.innerHTML = `<p>${totalCarne/1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja/355)} Latas de Cerveja / ${Math.ceil((totalCerveja/355)/valueAdults)} por pessoa</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebida)}L de Refrigerante e Água</p>`
}


function calcCarne(valueHours) {
    if (valueHours >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function calcCerveja(valueHours) {
    if (valueHours >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function calcBebidas(valueHours) {
    if (valueHours >= 5 ) {
        return 1.5;
    } else {
        return 1;
    }
}

function calcLinguica(valueHours) {
    if (valueHours >= 6) {
        var totalLinguica = calcLinguica(valueHours) 
    }
}

function responsiveMenu() {
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
} 