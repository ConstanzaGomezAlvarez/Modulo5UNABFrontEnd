// Genera un reporte legible usando template literals y destructuring

export const crearReporte = ({ prioridades = [], totalPaquetes = 0, direccionesUnicas = new Set() } = {}) => {
  const fecha = new Date().toLocaleString('es-CL');

  const listado = prioridades
    .map(({ direccion, paquetes }, i) => `\n ${i + 1}. ${direccion} — ${paquetes} paquete${paquetes !== 1 ? 's' : ''}`)
    .join('');

  // Rest/Spread para sacar Top 3
  const [top1, top2, top3, ...resto] = prioridades;
  const topResumen = [top1, top2, top3].filter(Boolean).map(({ direccion }) => direccion).join(' | ') || 'N/A';

  const totalDirecciones = [...direccionesUnicas].length;

  return `
    <section class="reporte">
      <h1>Reporte de Rutas — ExpressGo</h1>
      <p><strong>Fecha:</strong> ${fecha}</p>
      <p><strong>Total de direcciones:</strong> ${totalDirecciones}</p>
      <p><strong>Total de paquetes:</strong> ${totalPaquetes}</p>
      <p><strong>Top 3 prioridades:</strong> ${topResumen}</p>
      <pre><code>${listado}</code></pre>
    </section>
  `;
};
