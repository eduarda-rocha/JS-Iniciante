var titulo = document.querySelector(".titulo");
titulo.textContent = "Bárbara Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;


var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);

var pesoValido = true;
var alturaValida = true;

if (peso < 0 || peso >= 800) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura < 0 || altura >= 3.00) {
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
}

