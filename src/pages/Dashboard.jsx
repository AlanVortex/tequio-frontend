import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const chartData = [
  { name: 'Proyectos con inversión', value: 14 },
  { name: 'Proyectos sin inversión', value: 6 },
];

const tokensData = [
  { name: 'Capital invertido (XLM)', value: 425_000 },
  { name: 'Capital disponible (XLM)', value: 180_000 },
];

const COLORS = ['#d97706', '#7a9a9b'];

const Dashboard = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
    <header className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Panel de análisis</p>
      <h1 className="text-4xl font-bold text-slate">Actividad de la red Tequio</h1>
      <p className="text-base text-slate/80 max-w-3xl mx-auto">
        Consulta un resumen ejecutivo de los proyectos tokenizados, avances de inversión y flujos simulados en Stellar Testnet. Próximamente este panel se conectará a smart contracts auditados.
      </p>
    </header>
    <section className="grid gap-8 md:grid-cols-2">
      <div className="bg-white rounded-3xl shadow-card p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate">Distribución de proyectos</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={4}>
                {chartData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: 16, border: '1px solid rgba(122,154,155,0.2)', backgroundColor: '#fff9eb' }}
              />
              <Legend verticalAlign="bottom" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-slate/70">
          Los datos se actualizan cada 7 días según actividad real en la red Stellar. Esta visualización usa valores mock listos para ser reemplazados por métricas on-chain.
        </p>
      </div>
      <div className="bg-white rounded-3xl shadow-card p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate">Capital tokenizado (XLM)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={tokensData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={85} paddingAngle={3}>
                {tokensData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[(index + 1) % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: 16, border: '1px solid rgba(122,154,155,0.2)', backgroundColor: '#fff9eb' }}
                formatter={(value) => `${Number(value).toLocaleString('es-MX')} XLM`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="space-y-2 text-sm text-slate/80">
          <li>Proyectos totales: 20</li>
          <li>Proyectos con inversión: 14</li>
          <li>Proyectos sin inversión: 6</li>
          <li>Participación simulada en XLM: 425,000 XLM</li>
        </ul>
      </div>
    </section>
    <section className="bg-white rounded-3xl shadow-card p-6 space-y-3">
      <h2 className="text-lg font-semibold text-slate">Preparando la conexión on-chain</h2>
      <p className="text-sm text-slate/70">
        Esta arquitectura está lista para integrarse con APIs y contratos inteligentes en Stellar. El panel consumirá datos de wallets, transacciones y oráculos comunitarios para mostrar rendimientos, niveles de riesgo y proyecciones de impacto en tiempo real.
      </p>
      <p className="text-sm text-slate/70">
        En la siguiente fase conectaremos métricas verificadas y dashboards compartidos con inversionistas, consultores y comunidades beneficiadas.
      </p>
    </section>
  </div>
);

export default Dashboard;
