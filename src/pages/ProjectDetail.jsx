import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Sparkles, Building } from 'lucide-react';
import { useProjects } from '../context/ProjectContext.jsx';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();
  const project = useMemo(
    () => projects.find((item) => String(item.id) === projectId),
    [projects, projectId],
  );
  const [showValuation, setShowValuation] = useState(false);

  useEffect(() => {
    setShowValuation(false);
  }, [projectId]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-amber/80"
        >
          <ArrowLeft className="w-4 h-4" /> Volver
        </button>
        <div className="mt-10 bg-white rounded-3xl shadow-card p-10 text-center space-y-4">
          <h1 className="text-3xl font-semibold text-slate">Proyecto no encontrado</h1>
          <p className="text-slate/70">
            El proyecto que buscas no está disponible. Regresa a la vista de exploración para descubrir más iniciativas.
          </p>
        </div>
      </div>
    );
  }

  const ctaLabel = project.fundingType === 'Inversión' ? 'Invertir en este proyecto' : 'Solicitar microcrédito';
  const metrics = project.metrics?.length ? project.metrics : project.impactHighlights ?? [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-amber/80"
      >
        <ArrowLeft className="w-4 h-4" /> Regresar
      </button>
      <article className="bg-white rounded-3xl shadow-card overflow-hidden">
        <div className="h-72 w-full">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 lg:p-10 space-y-8">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate/80">
              <span className="px-3 py-1 rounded-full bg-agave/10">{project.category}</span>
              <span className="px-3 py-1 rounded-full bg-amber/10 text-amber">{project.fundingType}</span>
              <span className="px-3 py-1 rounded-full bg-agave/10">{project.isWeb3 ? 'Proyecto Web3' : 'Proyecto Web2'}</span>
              <span className="px-3 py-1 rounded-full bg-agave/10">Impacto {project.impactType}</span>
            </div>
            <h1 className="text-4xl font-bold text-slate">{project.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber" /> {project.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="w-4 h-4 text-amber" /> Comunidad impactada: {project.community}
              </span>
            </div>
          </header>
          <p className="text-base text-slate/80 leading-relaxed">{project.description}</p>
          <section className="grid gap-6 md:grid-cols-2">
            <div className="bg-agave/10 rounded-2xl p-6 space-y-3">
              <h2 className="text-lg font-semibold text-slate flex items-center gap-2">
                <Building className="w-5 h-5 text-amber" /> Emprendimiento
              </h2>
              <p className="text-sm text-slate/70">
                <strong>Emprendedor/a:</strong> {project.entrepreneur?.name}
              </p>
              <p className="text-sm text-slate/70">
                <strong>Región:</strong> {project.entrepreneur?.region}
              </p>
              <p className="text-sm text-slate/70">
                <strong>Propuesta de valor:</strong> {project.impact}
              </p>
            </div>
            <div className="bg-agave/10 rounded-2xl p-6 space-y-3">
              <h2 className="text-lg font-semibold text-slate flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber" /> Impacto y métricas verificadas
              </h2>
              <ul className="text-sm text-slate/70 space-y-2">
                {metrics.length ? (
                  metrics.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))
                ) : (
                  <li>Próximamente más métricas verificadas para este proyecto.</li>
                )}
              </ul>
            </div>
          </section>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              type="button"
              onClick={() => setShowValuation((prev) => !prev)}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-agave/20 text-slate font-semibold hover:bg-agave/30"
            >
              {showValuation ? 'Ocultar valuación estimada' : 'Ver valuación estimada'}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
            >
              {ctaLabel}
            </button>
          </div>
          {showValuation ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-agave/10 rounded-2xl p-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate/60">Valuación estimada</p>
                <p className="text-xl font-semibold text-slate">{project.valuation?.estimatedValue}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate/60">Nivel de riesgo</p>
                <p className="text-xl font-semibold text-slate">{project.valuation?.risk}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate/60">Retorno esperado</p>
                <p className="text-xl font-semibold text-slate">{project.valuation?.expectedReturn}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate/60">Monto sugerido</p>
                <p className="text-xl font-semibold text-slate">{project.valuation?.suggestedInvestment}</p>
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
