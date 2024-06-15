const precio = 400000;
let cantidad = 0;
let totalAPagar = 0;

// Función para actualizar el DOM con la cantidad y el total a pagar
function actualizarDOM() {
    document.querySelector('#cantidad').textContent = cantidad;
    document.querySelector('#totalAPagar').textContent = totalAPagar;
}

// Función para aumentar en 1 la cantidad de computadores hasta 5
function aumentarCantidad() {
    if( cantidad < 5 ) {  // Condición que establece el máximo de computadores
        cantidad += 1;
        totalAPagar = cantidad * precio;
        actualizarDOM()
    }
};

// Función para reducir de 1 en 1 la cantidad de computadores hasta 0
function disminuirCantidad() {
    if( cantidad > 0) {  // Con esto evitamos que la cantidad sea negativa
        cantidad -= 1;
        totalAPagar = cantidad * precio;
        actualizarDOM()
    }
}

