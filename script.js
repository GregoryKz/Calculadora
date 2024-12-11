let operacao = '';
let numero1 = '';
let numero2 = '';

function calcular(valor) {
    const display = document.getElementById('resultado');

    // Se a operação foi escolhida
    if (['+', '-', '*', '/'].includes(valor)) {
        if (numero1) {
            operacao = valor;
        }
        return;
    }

    // Adiciona números ao display
    if (operacao) {
        numero2 += valor; // Adiciona ao segundo número
        display.value = numero2;
    } else {
        numero1 += valor; // Adiciona ao primeiro número
        display.value = numero1;
    }
}

function igual() {
    const display = document.getElementById('resultado');
    let resultado;

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Erro';
        return;
    }

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
            break;
        default:
            resultado = 'Erro';
    }

    display.value = resultado;
    // Resetando os valores para nova operação
    numero1 = resultado.toString();
    numero2 = '';
    operacao = '';
}

var body = document.querySelector("body");
var btnDarkMode = document.querySelector(".btn-dark-mode");

function darkMode() {
    if (body.classList.toggle("dark-mode")) {
        btnDarkMode.textContent = "Desativar modo escuro"
    } 
    else {
        btnDarkMode.textContent = "Ativar modo escuro"
    }
}

btnDarkMode.addEventListener("click", darkMode);