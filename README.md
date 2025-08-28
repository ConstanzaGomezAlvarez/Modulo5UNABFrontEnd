
## Cómo ejecutar

1. Descarga este proyecto y descomprímelo.
2. Abre `index.html` en tu navegador.
3. Abre la **consola** (F12 o Ctrl/Cmd+Shift+I).
4. Haz clic en **“Ejecutar demostración”**. Verás la salida en la consola y en la página.

## Qué implementa cada parte

### 1) Callbacks
- Función: `obtenerUsuarioCallback(callback)`
- Mecanismo: `setTimeout(..., 2000)` simula la latencia de red.
- Uso: en `demoCallback()` se pasa una función que recibe `(error, usuario)` e imprime **nombre** y **correo**.
- Patrón aplicado: *error-first callback* para que sea extensible a casos con fallos.

### 2) Promesas
- Función: `obtenerUsuarioPromesa()`
- Retorna: una `Promise` que se resuelve en 2 segundos con el objeto usuario.
- Consumo: `demoPromesa()` usa `.then()`/`.catch()` para imprimir **nombre** y **ciudad**.

### 3) Async/Await
- Función: `obtenerUsuarioAsync()`
- Implementación: reutiliza `obtenerUsuarioPromesa()` y la espera con `await`.
- Consumo: `demoAsyncAwait()` imprime **todos los datos** del usuario en un único mensaje.

## Personalización y pruebas

- Cambia `USUARIO_MOCK` en `js/app.js` para probar con otros datos.
- Para **simular errores**:
  - En callbacks: dentro de `obtenerUsuarioCallback` llama `callback(new Error("Fallo"), null)`.
  - En promesas: dentro de `obtenerUsuarioPromesa` usa `reject(new Error("Fallo"))`.
  - En `demo*` ya hay manejo con `catch`/`try..catch`.

## Criterios de la guía (verificados)
- Simulación de consulta con 2 segundos. ✅
- Callback muestra **nombre** y **correo** en consola (y en la página). ✅
- Promesa consumida con `.then()`/`.catch()` muestra **nombre** y **ciudad**. ✅
- `async/await` muestra **todos los datos**. ✅
- Entrega en carpeta comprimida `.zip`. ✅
