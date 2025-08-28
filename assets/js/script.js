// ABP4 - Actividad JavaScript Asíncrono (v2)
// ------------------------------------------------------------
// Contexto: consultamos datos de un usuario (nombre, correo, ciudad)
// a un "servidor" que tarda 2 segundos en responder.
// Implementamos 3 mecanismos: Callbacks, Promesas y Async/Await.

// -------------- Datos simulados (respuesta del servidor) --------------
const USUARIO_MOCK = Object.freeze({
  nombre: "Ada Lovelace",
  correo: "ada@ejemplo.com",
  ciudad: "Londres"
});

// -------------- Utilidad para mostrar resultados en la página ----------
const salida = document.getElementById("salida");
function agregarSalida(texto) {
  if (salida) {
    salida.textContent += texto + "\n";
    salida.scrollTop = salida.scrollHeight;
  }
}
function limpiarSalida() { if (salida) salida.textContent = ""; }

// ------------------------------ 1) CALLBACKS ---------------------------
// Requerimiento (guía): obtenerUsuarioCallback(callback) que tras 2s
// retorne el objeto usuario y usar el callback para imprimir en consola
// el NOMBRE y CORREO del usuario.
// PATRÓN: error-first callback -> (error, resultado)
function obtenerUsuarioCallback(callback) {
  setTimeout(() => {
    // En un caso real, podríamos tener error. Ej:
//  const hayError = Math.random() < 0.05;
//  if (hayError) return callback(new Error("Fallo de red"), null);
    callback(null, { ...USUARIO_MOCK });
  }, 2000);
}

function demoCallback() {
  console.log("[Callback] Consultando usuario...");
  agregarSalida("[Callback] Consultando usuario...");
  obtenerUsuarioCallback((error, usuario) => {
    if (error) {
      console.error("[Callback] Error:", error);
      agregarSalida(`[Callback] Error: ${error.message}`);
      return;
    }
    console.log("[Callback] Nombre:", usuario.nombre, "| Correo:", usuario.correo);
    agregarSalida(`[Callback] Nombre: ${usuario.nombre} | Correo: ${usuario.correo}`);
  });
}

// ------------------------------ 2) PROMESAS ----------------------------
// Requerimiento (guía): obtenerUsuarioPromesa() que retorne una Promise
// y tras 2s resuelva con los mismos datos del usuario. Consumir con
// then/catch mostrando NOMBRE y CIUDAD en consola.
function obtenerUsuarioPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Para simular error, descomenta:
//    return reject(new Error("Servidor no disponible"));
      resolve({ ...USUARIO_MOCK });
    }, 2000);
  });
}

function demoPromesa() {
  console.log("[Promesa] Consultando usuario...");
  agregarSalida("[Promesa] Consultando usuario...");
  obtenerUsuarioPromesa()
    .then((usuario) => {
      console.log("[Promesa] Nombre:", usuario.nombre, "| Ciudad:", usuario.ciudad);
      agregarSalida(`[Promesa] Nombre: ${usuario.nombre} | Ciudad: ${usuario.ciudad}`);
    })
    .catch((error) => {
      console.error("[Promesa] Error:", error);
      agregarSalida(`[Promesa] Error: ${error.message}`);
    });
}

// ------------------------------ 3) ASYNC/AWAIT -------------------------
// Requerimiento (guía): Implementar obtenerUsuarioAsync() (async) que
// utilice la promesa anterior; usar await para esperar y mostrar TODOS
// los datos del usuario en un mensaje.
async function obtenerUsuarioAsync() {
  // Reutilizamos la función basada en Promesas anterior
  const usuario = await obtenerUsuarioPromesa();
  return usuario;
}

async function demoAsyncAwait() {
  console.log("[Async/Await] Consultando usuario...");
  agregarSalida("[Async/Await] Consultando usuario...");
  try {
    const usuario = await obtenerUsuarioAsync();
    const mensaje = `[Async/Await] Usuario: ${usuario.nombre} | Correo: ${usuario.correo} | Ciudad: ${usuario.ciudad}`;
    console.log(mensaje);
    agregarSalida(mensaje);
  } catch (error) {
    console.error("[Async/Await] Error:", error);
    agregarSalida(`[Async/Await] Error: ${error.message}`);
  }
}

// ------------------------------ Control UI -----------------------------
document.getElementById("btn-ejecutar")?.addEventListener("click", async () => {
  limpiarSalida();
  demoCallback();
  demoPromesa();
  await demoAsyncAwait();
});

document.getElementById("btn-limpiar")?.addEventListener("click", limpiarSalida);

// Exponer funciones para pruebas manuales desde consola
Object.assign(window, {
  obtenerUsuarioCallback,
  obtenerUsuarioPromesa,
  obtenerUsuarioAsync
});
