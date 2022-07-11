let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuração = document.getElementById("duração");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando....");

    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuração = document.getElementById("duração");
    let resultado = document.getElementById("resultado");

    

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duração = inputDuração.value;

    let totalcarne = carnePP(duração) * adultos + ( 400 /2 * criancas);
    let totalcerveja = cervejaPP(duração) * adultos;
    let totalBebidas = bebidasPP(duração) * adultos + (bebidasPP(duração) / 2 * criancas);
    console.log(totalcarne);
    console.log(totalcerveja);
    console.log(totalBebidas);


    resultado.innerHTML += `<p>${totalcarne / 1000}g de Carne`
    resultado.innerHTML += `<p>${Math.ceil(totalcerveja / 355)}ml de cerveja`
    resultado.innerHTML += `<p>${Math.ceil(totalBebidas / 2000)}ml de bebidas`
}

function carnePP(duração) {
    if(duração >= 6) {
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duração) {
    if(duração >= 6) {
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duração) {
    if(duração >= 6) {
        return 2000;
    } else{
        return 1500;
    }
}

