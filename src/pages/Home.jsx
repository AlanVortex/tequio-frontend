import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

const featuredProjects = projects.slice(0, 3);

const Home = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
    <section className="grid lg:grid-cols-2 gap-12 items-center pt-10">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Finanzas comunitarias Web3</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate leading-tight">
          Invierte tu esfuerzo, multiplica tu impacto.
        </h1>
        <p className="text-lg text-slate/80">
          Tequio democratiza el microfinanciamiento local con contratos inteligentes transparentes, educación continua y
          comunidades que confían en datos verificables.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/simulador" className="px-6 py-3 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90">
            Comienza
          </Link>
          <Link to="/explorar" className="px-6 py-3 rounded-full bg-agave/20 text-slate font-semibold hover:bg-agave/30">
            Explora proyectos
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-card p-8 space-y-10 mb-4">
        <h2 className="text-2xl font-semibold text-slate mb-4">Tequio impulsa proyectos locales</h2>
        <p className="text-sm text-slate/80">
          Microinversiones transparentes, procesos respaldados por consultores certificados y trazabilidad en Stellar
          Testnet.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate/80">
          <div className="bg-agave/10 rounded-2xl p-4">
            <p className="text-3xl font-bold text-amber">+180</p>
            <p>Proyectos conectados a capital</p>
          </div>
          <div className="bg-agave/10 rounded-2xl p-4">
            <p className="text-3xl font-bold text-amber">92%</p>
            <p>Transparencia auditada por consultores</p>
          </div>
          <div className="bg-agave/10 rounded-2xl p-4">
            <p className="text-3xl font-bold text-amber">12</p>
            <p>Estados con comunidades activas</p>
          </div>
          <div className="bg-agave/10 rounded-2xl p-4">
            <p className="text-3xl font-bold text-amber">3.6x</p>
            <p>Retorno social promedio</p>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-slate">Propuesta de valor</h2>
          <p className="text-sm text-slate/80">
            Tequio impulsa proyectos locales a través de microfinanciamiento transparente, potenciado por blockchain y smart
            contracts.
          </p>
        </div>
        <Link to="/about" className="text-sm font-semibold text-amber hover:text-agave">
          Descubre cómo funciona →
        </Link>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {[{
          title: 'Transparencia radical',
          description: 'Valuaciones respaldadas por instituciones verificadas y trazabilidad completa de cada aporte.',
        },
        {
          title: 'Educación continua',
          description: 'Mentorías, recursos y simuladores para comprender Web3 sin fricciones técnicas.',
        },
        {
          title: 'Impacto medible',
          description: 'Indicadores socioambientales y reportes en tiempo real para la comunidad inversora.',
        }].map((item) => (
          <article key={item.title} className="bg-white rounded-3xl shadow-card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-slate">{item.title}</h3>
            <p className="text-sm text-slate/80">{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-slate">Proyectos destacados</h2>
        <Link to="/explorar" className="text-sm font-semibold text-amber hover:text-agave">
          Ver todos →
        </Link>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <section className="bg-white rounded-3xl shadow-card p-8 space-y-4">
      <h2 className="text-3xl font-semibold text-slate">Confianza y seguridad en cada paso</h2>
      <p className="text-sm text-slate/80">
        Nuestras valuaciones se realizan con datos respaldados por consultores e instituciones verificadas. Cada contrato se
        audita y almacena en Stellar Testnet, brindando transparencia a inversores y comunidades.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 text-sm text-slate/80">
        <div className="bg-agave/10 rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-slate">Datos auditados</h3>
          <p>Consultores especializados validan los supuestos financieros de cada proyecto.</p>
        </div>
        <div className="bg-agave/10 rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-slate">Contratos transparentes</h3>
          <p>Smart contracts facilitan desembolsos automáticos y reportes de uso de capital.</p>
        </div>
        <div className="bg-agave/10 rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-slate">Economía comunitaria</h3>
          <p>Programas de mentoría y gobernanza participativa para asegurar impacto sostenible.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
