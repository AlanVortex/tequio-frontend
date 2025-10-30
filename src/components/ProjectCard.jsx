import { BadgeCheck } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <article className="bg-white rounded-3xl shadow-card overflow-hidden flex flex-col">
    <div className="relative h-48">
      <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      {project.isWeb3 ? (
        <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-amber text-white text-xs font-semibold px-3 py-1 rounded-full shadow-card">
          <BadgeCheck className="w-3 h-3" /> Proyecto Web3
        </span>
      ) : null}
    </div>
    <div className="p-6 flex-1 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold text-slate">{project.name}</h3>
        <p className="text-sm text-slate/70">{project.location}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate/80">
        <span className="px-3 py-1 bg-agave/10 rounded-full">{project.category}</span>
        <span className="px-3 py-1 bg-amber/10 text-amber rounded-full">{project.fundingType}</span>
      </div>
      <p className="text-sm text-slate/80 flex-1">{project.impact}</p>
      <button
        type="button"
        className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-full bg-agave/20 text-slate font-semibold hover:bg-agave/30"
      >
        Ver detalles
      </button>
    </div>
  </article>
);

export default ProjectCard;
