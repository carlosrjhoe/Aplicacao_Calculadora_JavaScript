'use strict';

// capturar butoes
const tela = document.getElementById('tela');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;

var atualizarTela = (texto) => {
    if(novoNumero){
        tela.textContent = texto;
        novoNumero = false;
    } else {
        tela.textContent += texto;
    }
}

var inserirNumero = (evento) => atualizarTela(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

var selecionarOperador = () => {
    novoNumero = true;
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));