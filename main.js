// carne - 400gr por pessoa +6 de horas - 650 
// cerveja - 1200ml por pessoa + 6 horas - 2000ml 
// refrigerantes - 1000ml por pessoa - 6 horas - 1500ml 
// linguiça - 200g por pessoa
// crinças valem por 0,5

let hours = document.getElementById("time");
let adult = document.getElementById("adultos");
let child = document.getElementById("kids");

let home = document.getElementById("home");
let contact = document.getElementById("contact");

let resultado = document.getElementById("final-calc");

function showResult() {
    var valueAdults = adult.value;
    var valueChild = child.value;
    var valueHours = hours.value;

    if (valueAdults > 0 && valueChild > 0 && valueHours > 0) {
        totalCerveja = calcCerveja(valueHours) * valueAdults;

        totalCarne = calcCarne(valueHours) * valueAdults + ((calcCarne(valueHours)/2) * valueChild);

        totalBebida = calcBebidas(valueHours) * valueAdults + ((calcBebidas(valueHours)/2) * valueChild);
    } else {
        alert("Opções não podem ser 0");
    }

    if (resultado.style.display === 'none' || resultado.style.display === '') {
        resultado.style.display = 'block';
      
        resultado.innerHTML = `<p>${totalCarne/1000}kg de Carne</p>`;

        resultado.innerHTML += `<p>${Math.ceil(totalCerveja/355)} Latas de Cerveja / ${Math.ceil((totalCerveja/355)/valueAdults)} por pessoa</p>`;

        resultado.innerHTML += `<p>${Math.ceil(totalBebida)}L de Refrigerante e Água</p>`;
    } else {
        resultado.style.display = 'none';
        
    }
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

function getContact() {
    if (contact.style.display == 'none') {
        contact.style.display = 'block';
        home.style.display = 'none';
    } else if (contact.style.display == 'block') {
        home.style.display = 'none';
    } else {
        getHome();
    }
}

function getHome() {
    contact.style.display = 'none';
    home.style.display = 'block';
}