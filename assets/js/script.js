// Utilidad para imprimir tanto en la página como en la consola
function printLine(message) {
  console.log(message);
  const li = document.createElement('li');
  li.textContent = message;
  document.getElementById('output').appendChild(li);
}

// ACTIVIDAD 1 ---------------------------------------------------------------
// a) Llamada/invocación a la función principal con una callback como parámetro
// b) La función principal saluda con "Buenos días" y al final invoca la callback
// c) La callback pregunta si queremos un café
function principal(callback) {
  printLine("Buenos días");
  // Al final, invocamos el callback recibido
  callback();
}

// función callback
function preguntarCafe() {
  printLine("¿Quieres un café?");
}

// Hook del botón para ejecutar la Actividad 1
document.getElementById('btn-act1').addEventListener('click', () => {
  principal(preguntarCafe);
});

// ACTIVIDAD 2 ---------------------------------------------------------------
// Función principal con 4 parámetros: a, b y DOS callbacks: minora y potencias
function operaciones(a, b, minora, potencias) {
  console.log('operaciones llamada con:', a, b, minora, potencias);
  const diferencia = a - b;
  const elevado = Math.pow(a, b);
  console.log('diferencia:', diferencia, 'elevado:', elevado);
  // Invocamos las callbacks con los resultados
  minora(diferencia);
  potencias(elevado);
}

// Ejecución de ejemplo con a=5 y b=3 en carga de página (como pide la guía).
// Nota: Usamos cierre/closure para que los callbacks también "vean" a y b.
(function ejecutarPorDefecto() {
  const A = 5, B = 3;
    operaciones(
      A,
      B,
      function(diferencia) {
        console.log('Callback minora ejecutado con:', diferencia);
        printLine(`La diferencia entre ${A} y ${B} es: ${diferencia}`);
      },
      function(elevado) {
        console.log('Callback potencias ejecutado con:', elevado);
        printLine(`Elevando ${A} a potencia ${B} se obtiene: ${elevado}`);
      }
    );
})();

// Formulario para probar con otros números
document.getElementById('form-operaciones').addEventListener('submit', (ev) => {
  ev.preventDefault();
  // Limpia salida
  document.getElementById('output').innerHTML = '';
  const A = Number(document.getElementById('input-a').value);
  const B = Number(document.getElementById('input-b').value);
    operaciones(
      A,
      B,
      function(diferencia) {
        console.log('Callback minora ejecutado con:', diferencia);
        printLine(`La diferencia entre ${A} y ${B} es: ${diferencia}`);
      },
      function(elevado) {
        console.log('Callback potencias ejecutado con:', elevado);
        printLine(`Elevando ${A} a potencia ${B} se obtiene: ${elevado}`);
      }
    );
});
