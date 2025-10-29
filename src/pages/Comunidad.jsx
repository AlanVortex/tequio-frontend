import ResourceCard from '../components/ResourceCard.jsx';
import resources from '../data/resources.js';

const Comunidad = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
    <section className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Comunidad</p>
      <h1 className="text-4xl font-bold text-slate">Aprende, conecta y escala con Web3</h1>
      <p className="text-base text-slate/80 max-w-3xl mx-auto">
        Te acompañamos en cada etapa: desde crear tu wallet hasta diseñar tokenomics responsables. Explora guías, videos y
        mentorías que te preparan para participar en la economía colaborativa de Tequio.
      </p>
    </section>

    <section className="bg-white rounded-3xl shadow-card p-8 space-y-6 text-left">
      <h2 className="text-2xl font-semibold text-slate">Conecta tu wallet</h2>
      <div className="grid md:grid-cols-3 gap-6 text-sm text-slate/80">
        {[{
          title: 'Freighter',
          description: 'Extensión de navegador con soporte para desarrolladores y Stellar Testnet.',
        },
        {
          title: 'Lobstr',
          description: 'Wallet móvil y web con interfaz amigable, ideal para monitorear tus tokens.',
        },
        {
          title: 'Albedo',
          description: 'Autenticación Web3 sencilla para firmar transacciones desde cualquier dispositivo.',
        }].map((item) => (
          <article key={item.title} className="bg-agave/10 rounded-2xl p-5 space-y-2">
            <h3 className="text-lg font-semibold text-slate">{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <p className="text-sm text-slate/70">
        Todas las wallets operan en Stellar Testnet. Te guiamos para obtener lumens de prueba (XLM) y comprender cómo funcionan
        las divisas compatibles como USDC.
      </p>
    </section>

    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-slate">Recursos destacados</h2>
        <p className="text-sm text-slate/70">Actualizamos semanalmente con nuevas guías, videos y mentorías.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  </div>
);

export default Comunidad;
