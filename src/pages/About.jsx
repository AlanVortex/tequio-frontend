import Timeline from '../components/Timeline.jsx';

const steps = [
  {
    title: 'Conecta tu wallet',
    description:
      'Integra Freighter, Lobstr o Albedo con Stellar Testnet. Si no tienes wallet, te guiamos paso a paso para crearla.',
  },
  {
    title: 'Simula la rentabilidad',
    description:
      'Utiliza el simulador Tequio para proyectar ingresos, costos y necesidades de capital con escenarios Web3.',
  },
  {
    title: 'Invierte o solicita microcréditos',
    description:
      'Selecciona el tipo de financiamiento que necesitas. Smart contracts garantizan transparencia en cada desembolso.',
  },
  {
    title: 'Sigue tu impacto',
    description:
      'Visualiza los beneficios sociales y ambientales generados por tus aportes en tableros interactivos.',
  },
];

const About = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
    <section className="pt-10 space-y-6 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Ecosistema Tequio</p>
      <h1 className="text-4xl font-bold text-slate">Cómo conectamos talento, capital e impacto</h1>
      <p className="text-base text-slate/80 max-w-3xl mx-auto">
        Tequio es un puente entre emprendedores y comunidades inversoras. Unimos educación financiera con Web3 para construir
        economías colaborativas donde cada contribución se transparenta en tiempo real.
      </p>
    </section>
    <section className="space-y-10">
      <Timeline steps={steps} />
      <div className="bg-white rounded-3xl shadow-card p-8 space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-slate">Metodología de valuación</h2>
        <p className="text-sm text-slate/80">
          Nuestra metodología combina datos de consultoras certificadas, registros públicos y métricas de desempeño enviadas
          por los proyectos. Cada simulación cruza variables financieras, indicadores de impacto y nivel de formalidad para
          recomendar el tipo de financiamiento ideal. Antes de listar un proyecto, verificamos documentación legal, operativa y
          comunitaria con aliados expertos.
        </p>
        <p className="text-sm text-slate/80">
          Tequio prioriza la transparencia y la accesibilidad. Por eso todas las interacciones se registran en Stellar Testnet y
          se acompañan de herramientas pedagógicas que permiten interpretar la información sin necesidad de conocimientos
          técnicos avanzados.
        </p>
      </div>
    </section>
  </div>
);

export default About;
