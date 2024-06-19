function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperation(operation) {
    const display = document.getElementById('display');
    display.value += operation;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluar la expresión y formatear el resultado
        const result = eval(display.value);
        display.value = result.toLocaleString('de-DE');
    } catch {
        display.value = 'Error';
    }
}

// Función para permitir solo números y operadores
function sanitizeInput(input) {
    return input.replace(/[^0-9+\-*/.]/g, '');
}

// Eventos de teclado para permitir solo números y operadores
document.getElementById('display').addEventListener('input', function (e) {
    e.target.value = sanitizeInput(e.target.value);
});
