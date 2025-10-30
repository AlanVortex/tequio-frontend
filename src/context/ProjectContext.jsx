import { createContext, useContext, useMemo, useState } from 'react';
import initialProjects from '../data/projects.js';

const ProjectContext = createContext();

const slugify = (text) =>
  text
    .toString()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();

const normalizeProject = (project) => {
  const metrics =
    Array.isArray(project.metrics) && project.metrics.length > 0
      ? project.metrics
      : Array.isArray(project.impactHighlights) && project.impactHighlights.length > 0
      ? project.impactHighlights
      : ['Próximamente métricas verificadas'];

  const valuation = {
    estimatedValue: project.valuation?.estimatedValue || 'En evaluación',
    risk: project.valuation?.risk || 'Sin evaluar',
    expectedReturn: project.valuation?.expectedReturn || '—',
    suggestedInvestment: project.valuation?.suggestedInvestment || '—',
  };

  return {
    ...project,
    metrics,
    impactHighlights: metrics,
    valuation,
  };
};

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const usedSlugs = new Set();
    return initialProjects.map((project) => {
      const normalized = normalizeProject(project);
      const baseName = normalized.slug || normalized.name || `proyecto-${normalized.id ?? ''}`;
      const baseSlug = slugify(baseName) || `proyecto-${normalized.id ?? ''}`;
      let candidate = baseSlug;
      let suffix = 2;
      while (candidate && usedSlugs.has(candidate)) {
        candidate = `${baseSlug}-${suffix++}`;
      }
      const finalSlug = candidate || `proyecto-${normalized.id ?? usedSlugs.size + 1}`;
      usedSlugs.add(finalSlug);
      return {
        ...normalized,
        slug: finalSlug,
      };
    });
  });

  const addProject = (newProject) => {
    setProjects((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((project) => project.id)) + 1 : 1;
      const fallbackImage =
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80';
      const metrics =
        Array.isArray(newProject.metrics) && newProject.metrics.length > 0
          ? newProject.metrics
          : Array.isArray(newProject.impactHighlights) && newProject.impactHighlights.length > 0
          ? newProject.impactHighlights
          : ['Próximamente métricas verificadas'];

      const desiredBase = newProject.slug || newProject.name || `proyecto-${nextId}`;
      const baseSlug = slugify(desiredBase) || `proyecto-${nextId}`;
      let candidate = baseSlug;
      let suffix = 2;
      const existingSlugs = new Set(prev.map((project) => project.slug));
      while (candidate && existingSlugs.has(candidate)) {
        candidate = `${baseSlug}-${suffix++}`;
      }
      const finalSlug = candidate || `${baseSlug}-${suffix}`;

      const projectWithDefaults = {
        ...newProject,
        id: nextId,
        slug: finalSlug,
        metrics,
        impactHighlights: metrics,
        valuation: {
          estimatedValue: newProject.valuation?.estimatedValue || 'En evaluación',
          risk: newProject.valuation?.risk || 'Sin evaluar',
          expectedReturn: newProject.valuation?.expectedReturn || '—',
          suggestedInvestment: newProject.valuation?.suggestedInvestment || '—',
        },
      };

      projectWithDefaults.image =
        newProject.image && newProject.image.trim() ? newProject.image : fallbackImage;

      return [...prev, projectWithDefaults];
    });
  };

  const value = useMemo(
    () => ({
      projects,
      addProject,
    }),
    [projects],
  );

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects debe utilizarse dentro de ProjectProvider');
  }
  return context;
};
