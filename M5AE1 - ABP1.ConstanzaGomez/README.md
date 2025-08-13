# Consultorio – OOP en JavaScript (ES5)

Este proyecto implementa una **solución en ES5** usando **funciones constructoras**, **prototipos** y **getters/setters** (métodos) para gestionar pacientes de un consultorio. Todo se muestra en la **consola del navegador**.

## Cómo ejecutar
1. Abre `index.html` en tu navegador (doble clic).
2. Abre la **consola** (Windows/Linux: `Ctrl+Shift+I` | macOS: `Cmd+Option+I` → pestaña **Console**).
3. Verás una demo: mostrar todos los pacientes y una búsqueda por nombre.
4. En la consola puedes ejecutar:
   - `consultorio.mostrarTodos()`
   - `consultorio.buscarPorNombre('ana')`

## Estructura
```
consultorio-es5/
├─ index.html
└─ js/
   └─ app.js
```

## Puntos clave
- **ES5** puro (sin `class`, sin arrow functions).
- **Constructor** `Paciente` con propiedades privadas mediante *closures* y métodos `get*/set*`.
- **Constructor** `Consultorio` con arreglo interno de pacientes protegido y métodos prototipo:
  - `mostrarTodos()`
  - `buscarPorNombre(nombre)`
- **Instanciación** con `new` y pruebas listas en consola.
