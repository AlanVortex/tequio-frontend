import { createContext, useContext, useMemo, useState } from 'react';
import initialProjects from '../data/projects.js';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(initialProjects);

  const addProject = (newProject) => {
    setProjects((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((project) => project.id)) + 1 : 1;
      const fallbackImage =
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80';
      const projectWithDefaults = {
        id: nextId,
        valuation: {
          estimatedValue: '0 XLM',
          risk: 'Sin evaluar',
          expectedReturn: '—',
          suggestedInvestment: '—',
        },
        impactHighlights: [],
        ...newProject,
      };

      projectWithDefaults.image = newProject.image && newProject.image.trim() ? newProject.image : fallbackImage;
      projectWithDefaults.impactHighlights =
        newProject.impactHighlights && newProject.impactHighlights.length > 0
          ? newProject.impactHighlights
          : ['Próximamente métricas verificadas'];
      projectWithDefaults.valuation = {
        estimatedValue: newProject.valuation?.estimatedValue || 'En evaluación',
        risk: newProject.valuation?.risk || 'Sin evaluar',
        expectedReturn: newProject.valuation?.expectedReturn || '—',
        suggestedInvestment: newProject.valuation?.suggestedInvestment || '—',
      };
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
