
# ExpressGo — Algoritmo ES6+ con Webpack y Babel

El sistema:

- Lee una lista de entregas desde un archivo JSON.
- Elimina duplicados sumando paquetes por dirección.
- Ordena las direcciones según prioridad (más paquetes = más prioridad).
- Genera un reporte legible en HTML con totales y top 3 direcciones.
- Usa más de 8 características ES6+: let/const, arrow functions, parámetros por defecto, template literals, destructuring, spread/rest, Map, Set, Promises + async/await, optional chaining, etc.

## Tecnologías usadas

- JavaScript (ES6+)
- Webpack 5 (empaquetador)
- Babel 7 (transpilador con preset-env)
- Core-js 3 + Regenerator-runtime (polyfills)
- Node.js (entorno de ejecución)

### Estructura del proyecto

ExpressGo-ES6-Webpack/
├─ public/
│  └─ index.html           # Entrada HTML (dev server)
├─ src/
│  ├─ index.js             # Punto de entrada
│  ├─ services/
│  │  └─ data.js           # Simulación de carga asíncrona de JSON
│  ├─ utils/
│  │  ├─ process.js        # Algoritmo (Map, Set, sort, reduce)
│  │  └─ report.js         # Generación del reporte con template literals
│  └─ data/
│     └─ entregas.json     # Datos iniciales (con duplicados)
├─ .babelrc                # Configuración de Babel
├─ package.json            # Scripts, dependencias y browserslist
├─ webpack.config.js       # Configuración de Webpack
└─ README.md               # Documentación del proyecto

#### Instalación

- Clona este repositorio o descomprime el .zip.

- Instala dependencias:

bash
npm install

#### Uso en desarrollo

Levanta el entorno de desarrollo con Webpack Dev Server:

bash
npm run start

Esto abrirá automáticamente el navegador en
 http://localhost:5173

Verás el reporte de rutas generado dinámicamente.

#### Generar build de producción

Compila el proyecto optimizado:

bash
npm run build

El resultado estará en la carpeta dist/.

#### Ejemplo de salida (con los datos de prueba)

Datos iniciales (entregas.json):

[
  { "direccion": "Av. Siempre Viva 742", "paquetes": 4 },
  { "direccion": "Calle Falsa 123", "paquetes": 2 },
  { "direccion": "Av. Siempre Viva 742", "paquetes": 3 },
  { "direccion": "Pje. Las Rosas 456", "paquetes": 5 },
  { "direccion": "Calle Falsa 123", "paquetes": 1 }
]

#### Reporte generado en el navegador:

Reporte de Rutas — ExpressGo
Fecha: 17/08/2025 10:30:00
Total de direcciones: 3
Total de paquetes: 15
Top 3 prioridades: Av. Siempre Viva 742 | Pje. Las Rosas 456 | Calle Falsa 123

 1. Av. Siempre Viva 742 — 7 paquetes
 2. Pje. Las Rosas 456 — 5 paquetes
 3. Calle Falsa 123 — 3 paquetes

#### Características ES6+ aplicadas

- let / const
- Funciones flecha con parámetros por defecto
- Template literals
- Destructuring
- Spread / Rest
- Map y Set
- Promises + async/await
- Módulos ES (import/export)
- Optional chaining (?.) y Nullish coalescing (??)

#### Compatibilidad con navegadores antiguos

Gracias a:

- Babel preset-env → convierte ES6+ a ES5 según browserslist (>0.5%, not dead, ie 11).
- Core-js + Regenerator-runtime → polyfills para métodos modernos (Promise, Array.from, etc.).

Esto permite que el algoritmo se ejecute incluso en Internet Explorer 11.