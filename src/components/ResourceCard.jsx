import { PlayCircle, BookOpen } from 'lucide-react';

const icons = {
  Video: PlayCircle,
  Guía: BookOpen,
};

const ResourceCard = ({ resource }) => {
  const Icon = icons[resource.type] || BookOpen;
  return (
    <article className="bg-white rounded-3xl p-6 shadow-card flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-agave/15 text-amber">
          <Icon className="w-5 h-5" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber">{resource.type}</p>
          <h3 className="text-lg font-semibold text-slate">{resource.title}</h3>
        </div>
      </div>
      <p className="text-sm text-slate/80 flex-1">{resource.description}</p>
      <a href={resource.link} className="text-sm font-semibold text-amber hover:text-agave" aria-label={`Abrir recurso ${resource.title}`}>
        Ver recurso →
      </a>
    </article>
  );
};

export default ResourceCard;
