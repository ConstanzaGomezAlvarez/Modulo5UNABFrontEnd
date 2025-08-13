function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = String(nombre || '').trim();
  var _edad = parseInt(edad, 10) || 0;
  var _rut = String(rut || '').trim();
  var _diagnostico = String(diagnostico || '').trim();

  this.getNombre = function () { return _nombre; };
  this.getEdad = function () { return _edad; };
  this.getRut = function () { return _rut; };
  this.getDiagnostico = function () { return _diagnostico; };

  this.setNombre = function (v) { _nombre = String(v || '').trim(); };
  this.setEdad = function (v) {
    var n = parseInt(v, 10);
    if (isNaN(n) || n < 0) throw new Error('Edad inválida');
    _edad = n;
  };
  this.setRut = function (v) { _rut = String(v || '').trim(); };
  this.setDiagnostico = function (v) { _diagnostico = String(v || '').trim(); };
}

Paciente.prototype.toString = function () {
  return 'Paciente{ nombre: ' + this.getNombre() +
         ', edad: ' + this.getEdad() +
         ', rut: ' + this.getRut() +
         ', diagnóstico: ' + this.getDiagnostico() + ' }';
};

// Para guardar en localStorage
Paciente.prototype.toJSON = function () {
  return {
    nombre: this.getNombre(),
    edad: this.getEdad(),
    rut: this.getRut(),
    diagnostico: this.getDiagnostico()
  };
};

function Consultorio(nombre) {
  var _nombre = String(nombre || '').trim();
  var _pacientes = [];

  this.getNombre = function () { return _nombre; };
  this.setNombre = function (v) { _nombre = String(v || '').trim(); };
  this.getPacientes = function () { return _pacientes.slice(); };
  this.agregarPaciente = function (paciente) {
    if (!(paciente instanceof Paciente)) throw new Error('Debe ser un Paciente');
    _pacientes.push(paciente);
  };
}

Consultorio.prototype.mostrarTodos = function () {
  var lista = this.getPacientes();
  if (!lista.length) { console.log('No hay pacientes.'); return; }
  for (var i = 0; i < lista.length; i++) console.log((i + 1) + '. ' + lista[i].toString());
};

Consultorio.prototype.buscarPorNombre = function (nombre) {
  var needle = String(nombre || '').toLowerCase();
  var lista = this.getPacientes();
  var resultados = [];
  for (var i = 0; i < lista.length; i++) {
    var p = lista[i];
    if (p.getNombre().toLowerCase().indexOf(needle) !== -1) resultados.push(p);
  }
  return resultados;
};

// Guardar en localStorage
Consultorio.prototype.guardarEnLocalStorage = function () {
  var lista = this.getPacientes().map(function (p) { return p.toJSON(); });
  localStorage.setItem('consultorio_' + this.getNombre(), JSON.stringify(lista));
  console.log('Datos guardados en localStorage.');
};

// Cargar desde localStorage
Consultorio.prototype.cargarDesdeLocalStorage = function () {
  var data = localStorage.getItem('consultorio_' + this.getNombre());
  if (!data) return;
  try {
    var arr = JSON.parse(data);
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      var paciente = new Paciente(obj.nombre, obj.edad, obj.rut, obj.diagnostico);
      this.agregarPaciente(paciente);
    }
    console.log('Datos cargados desde localStorage.');
  } catch (e) {
    console.error('Error al leer datos:', e);
  }
};

// DEMO
(function demo() {
  console.clear();
  console.log('=== DEMO Consultorio (ES5 + localStorage) ===');

  var consultorio = new Consultorio('Consultorio Central');

  consultorio.cargarDesdeLocalStorage();

  if (consultorio.getPacientes().length === 0) {
    console.log('No había datos previos. Creando pacientes de ejemplo...');
    consultorio.agregarPaciente(new Paciente('Ana Gómez', 32, '12.345.678-9', 'Hipertensión'));
    consultorio.agregarPaciente(new Paciente('Bruno Díaz', 45, '10.111.222-3', 'Diabetes Tipo 2'));
    consultorio.agregarPaciente(new Paciente('Carla Pérez', 28, '15.987.654-1', 'Migraña Crónica'));
    consultorio.agregarPaciente(new Paciente('Ana María', 50, '9.876.543-2', 'Asma'));
    consultorio.guardarEnLocalStorage();
  }

  console.log('\n> Mostrar todos los pacientes:');
  consultorio.mostrarTodos();

  var termino = 'ana';
  console.log('\n> Búsqueda por nombre = "' + termino + '"');
  var encontrados = consultorio.buscarPorNombre(termino);
  if (!encontrados.length) console.log('Sin resultados');
  else for (var i = 0; i < encontrados.length; i++) console.log('- ' + encontrados[i].toString());

  window.consultorio = consultorio;
  window.Paciente = Paciente;
})();