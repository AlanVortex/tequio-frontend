import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { useProjects } from '../context/ProjectContext.jsx';

const defaultFilters = {
  category: 'Todas',
  location: 'Todas',
  type: 'Todos',
  impact: 'Todos',
};

const Explorar = () => {
  const { projects } = useProjects();
  const [filters, setFilters] = useState(defaultFilters);

  const categories = useMemo(
    () => ['Todas', ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const locations = useMemo(
    () => ['Todas', ...new Set(projects.map((project) => project.location))],
    [projects],
  );
  const impactTypes = useMemo(
    () => ['Todos', ...new Set(projects.map((project) => project.impactType))],
    [projects],
  );

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        filters.category === 'Todas' || project.category === filters.category;
      const matchesLocation =
        filters.location === 'Todas' || project.location === filters.location;
      const matchesType =
        filters.type === 'Todos' || (filters.type === 'Web3' ? project.isWeb3 : !project.isWeb3);
      const matchesImpact =
        filters.impact === 'Todos' || project.impactType === filters.impact;

      return matchesCategory && matchesLocation && matchesType && matchesImpact;
    });
  }, [projects, filters]);

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
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleFilterChange('category', category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filters.category === category ? 'bg-amber text-white' : 'bg-agave/15 text-slate hover:bg-agave/25'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate">Ubicación</h3>
            <select
              className="mt-3 w-full rounded-2xl border border-agave/30 bg-sand/40 px-4 py-2 text-sm text-slate focus:ring-2 focus:ring-agave"
              value={filters.location}
              onChange={(event) => handleFilterChange('location', event.target.value)}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate">Tipo de proyecto</h3>
            <div className="flex gap-2 mt-3">
              {['Todos', 'Web3', 'Web2'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleFilterChange('type', type)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${filters.type === type ? 'bg-amber text-white' : 'bg-agave/15 text-slate hover:bg-agave/25'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate">Impacto social o ambiental</h3>
            <select
              className="mt-3 w-full rounded-2xl border border-agave/30 bg-sand/40 px-4 py-2 text-sm text-slate focus:ring-2 focus:ring-agave"
              value={filters.impact}
              onChange={(event) => handleFilterChange('impact', event.target.value)}
            >
              {impactTypes.map((impact) => (
                <option key={impact} value={impact}>
                  {impact}
                </option>
              ))}
            </select>
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
    </div >
  );
};

export default Explorar;
