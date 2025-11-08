// Función para formatear números con separadores de miles
function formatearNumero(numero) {
    return numero.toLocaleString('es-ES');
}

// Control de modales
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones que abren modales
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
    
    // Abrir modal cuando se hace clic en un botón
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });
    
    // Cerrar modal cuando se hace clic en la X
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Cerrar modal cuando se hace clic fuera del contenido
    window.addEventListener('click', function(e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Limpiar resultados cuando se cierra un modal
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                const resultados = this.querySelectorAll('.resultado');
                resultados.forEach(resultado => {
                    resultado.textContent = '';
                });
                
                // Limpiar también los inputs
                const inputs = this.querySelectorAll('input');
                inputs.forEach(input => {
                    input.value = '';
                });
            }
        });
    });
});

// 1. Suma de tres valores constantes
document.getElementById('sumaBtn').addEventListener('click', function() {
    // Valores constantes
    const valor1 = 10;
    const valor2 = 10;
    const valor3 = 10;
    
    // Calcular la suma
    const suma = valor1 + valor2 + valor3;
    
    // Mostrar el resultado
    document.getElementById('resultadoSuma').textContent = 
        `La suma de los valores constantes son: ${formatearNumero(suma)}`;
});

// 2. Cuadrado de un número
document.getElementById('cuadradoBtn').addEventListener('click', function() {
    // Obtener el valor del input
    const numero = parseFloat(document.getElementById('numeroCuadrado').value);
    
    // Validar que se haya ingresado un número
    if (isNaN(numero)) {
        document.getElementById('resultadoCuadrado').textContent = 
            'Por favor, ingresa un número válido';
        return;
    }
    
    // Calcular el cuadrado
    const cuadrado = numero * numero;
    
    // Mostrar el resultado
    document.getElementById('resultadoCuadrado').textContent = 
        `El cuadrado de ${formatearNumero(numero)} es: ${formatearNumero(cuadrado)}`;
});

// 3. Promedio de calificaciones
document.getElementById('promedioBtn').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const nombre = document.getElementById('nombreEstudiante').value;
    const calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    const calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    const calificacion3 = parseFloat(document.getElementById('calificacion3').value);
    
    // Validar que todos los campos estén completos
    if (!nombre || isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3)) {
        document.getElementById('resultadoPromedio').textContent = 
            'Por favor, completa todos los campos correctamente';
        return;
    }
    
    // Validar que las calificaciones estén en el rango correcto (0-20)
    if (calificacion1 < 0 || calificacion1 > 20 || 
        calificacion2 < 0 || calificacion2 > 20 || 
        calificacion3 < 0 || calificacion3 > 20) {
        document.getElementById('resultadoPromedio').textContent = 
            'Las calificaciones deben estar entre 0 y 20';
        return;
    }
    
    // Calcular el promedio
    const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
    
    // Mostrar el resultado con dos decimales
    document.getElementById('resultadoPromedio').textContent = 
        `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos`;
});

// 4. Conversión de unidades (metros)
document.getElementById('conversionBtn').addEventListener('click', function() {
    // Obtener el valor en metros
    const metros = parseFloat(document.getElementById('metros').value);
    
    // Validar que se haya ingresado un número
    if (isNaN(metros)) {
        document.getElementById('resultadoConversion').textContent = 
            'Por favor, ingresa un valor válido en metros';
        return;
    }
    
    // Realizar las conversiones
    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    
    // Mostrar el resultado
    document.getElementById('resultadoConversion').textContent = 
        `${formatearNumero(metros)} metros equivalen a ${formatearNumero(centimetros)} centímetros y ${kilometros.toFixed(3)} kilómetros.`;
});

// 5. Comparación de dos valores
document.getElementById('comparacionBtn').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Validar que se hayan ingresado dos números
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultadoComparacion').textContent = 
            'Por favor, ingresa dos números válidos';
        return;
    }
    
    // Validar que los números no sean iguales
    if (numero1 === numero2) {
        document.getElementById('resultadoComparacion').textContent = 
            'Los números no pueden ser iguales. Por favor, ingresa números diferentes';
        return;
    }
    
    // Determinar cuál es mayor y cuál es menor
    let mayor, menor;
    if (numero1 > numero2) {
        mayor = numero1;
        menor = numero2;
    } else {
        mayor = numero2;
        menor = numero1;
    }
    
    // Calcular la diferencia
    const diferencia = mayor - menor;
    
    // Mostrar el resultado
    document.getElementById('resultadoComparacion').textContent = 
        `El número mayor es ${formatearNumero(mayor)}, el menor es ${formatearNumero(menor)}, y su diferencia es ${formatearNumero(diferencia)}.`;
});

// Limpiar los resultados cuando se modifiquen los inputs
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        // Encontrar el resultado correspondiente y limpiarlo
        const modal = this.closest('.modal');
        if (modal) {
            const resultado = modal.querySelector('.resultado');
            if (resultado) {
                resultado.textContent = '';
            }
        }
    });
});
