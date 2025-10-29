import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

const categories = [
  'Comercio local',
  'Agrotech',
  'Artesanías y manufactura',
  'Servicios',
  'Tecnología / Web3',
  'Turismo y cultura',
  'Educación',
  'Salud comunitaria',
  'Energía y reciclaje',
];

const fundingTypes = ['Microcrédito', 'Inversión'];

const impacts = ['Ambiental', 'Social', 'Tecnológico'];

const locations = ['CDMX', 'Oaxaca', 'Puebla', 'Mérida', 'Monterrey', 'Guadalajara', 'Veracruz', 'LATAM'];

const Explorar = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const visibleProjects =
    activeCategory === 'Todas'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
      <header className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Explorar</p>
        <h1 className="text-4xl font-bold text-slate">Proyectos que buscan capital solidario</h1>
        <p className="text-base text-slate/80 max-w-3xl mx-auto">
          Conoce iniciativas verificadas que generan impacto social y ambiental. Filtra por categoría, ubicación, tipo de
          financiamiento o nivel de impacto para descubrir oportunidades alineadas a tus intereses.
        </p>
      </header>
      <section className="grid lg:grid-cols-[280px_1fr] gap-10">
        <aside className="bg-white rounded-3xl shadow-card p-6 space-y-6 h-fit">
          <div>
            <h2 className="text-lg font-semibold text-slate">Categorías</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                type="button"
                onClick={() => setActiveCategory('Todas')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === 'Todas' ? 'bg-amber text-white' : 'bg-agave/15 text-slate hover:bg-agave/25'
                }`}
              >
                Todas
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === category ? 'bg-amber text-white' : 'bg-agave/15 text-slate hover:bg-agave/25'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate">Ubicación</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {locations.map((location) => (
                <span key={location} className="px-3 py-1 rounded-full bg-agave/15 text-xs font-semibold text-slate">
                  {location}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate">Tipo de financiamiento</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {fundingTypes.map((type) => (
                <span key={type} className="px-3 py-1 rounded-full bg-agave/15 text-xs font-semibold text-slate">
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate">Impacto</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {impacts.map((impact) => (
                <span key={impact} className="px-3 py-1 rounded-full bg-agave/15 text-xs font-semibold text-slate">
                  {impact}
                </span>
              ))}
            </div>
          </div>
        </aside>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-2xl font-semibold text-slate">{visibleProjects.length} proyectos disponibles</h2>
            <p className="text-sm text-slate/70">
              Los filtros están en modo exploratorio. Próximamente podrás combinarlos con datos en tiempo real.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explorar;
