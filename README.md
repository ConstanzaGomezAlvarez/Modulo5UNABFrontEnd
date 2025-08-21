# ABP3 — JavaScript Asíncrono: Callbacks

Este entregable implementa las dos actividades solicitadas:

1. **Callback simple**: una función principal que saluda con “Buenos días” y, al final, invoca un *callback* que pregunta “¿Quieres un café?”.
2. **`operaciones(a, b, minora, potencias)`**: calcula la diferencia y la potencia, e invoca dos *callbacks*. Los mensajes se imprimen con el formato que se adapta a los números elegidos (por defecto 5 y 3).

## Cómo abrir

Solo abre `index.html` en el navegador. La salida aparece en pantalla y en la consola.

## Puntos clave del código

- `operaciones(a, b, minora, potencias)` mantiene la firma pedida; las funciones anónimas que pasamos como *callbacks* usan **closures** para acceder a `a` y `b` y así poder imprimir frases del tipo:
  - “La diferencia entre a y b es: X”
  - “Elevando a a potencia b se obtiene: Y”

- En carga de página se ejecuta automáticamente con `a=5` y `b=3`, y además hay un formulario para probar otros valores.

