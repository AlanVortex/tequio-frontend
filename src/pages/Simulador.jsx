import { useState } from 'react';
import WizardSimulator from '../components/WizardSimulator.jsx';
import ValuationResult from '../components/ValuationResult.jsx';
import RegisterProjectWizard from '../components/RegisterProjectWizard.jsx';
import simulatorResults from '../data/simulatorResults.js';
import { useProjects } from '../context/ProjectContext.jsx';

const evaluateProject = (data) => {
  const revenue = Number(data.monthlyRevenue || 0);
  const costs = Number(data.monthlyCosts || 0);
  const growth = Number(data.growth || 0);
  const years = Number(data.yearsOperating || 0);
  const team = Number(data.teamSize || 0);

  let score = 0;

  if (revenue > costs && revenue > 0) score += 1.5;
  if (revenue <= costs) score -= 1.5;
  if (growth >= 20) score += 1.5;
  else if (growth >= 10) score += 1;
  else if (growth < 5) score -= 1;
  if (data.formality === 'registrado') score += 1;
  else score -= 0.5;
  if (years >= 3) score += 1;
  else if (years < 1) score -= 1;
  if (team >= 5) score += 0.5;

  return score >= 3 ? 'low' : score >= 1 ? 'medium' : 'high';
};

const Simulador = () => {
  const { addProject } = useProjects();
  const [resultKey, setResultKey] = useState(null);
  const [inputData, setInputData] = useState(null);

  const handleComplete = (data) => {
    const key = evaluateProject(data);
    setResultKey(key);
    setInputData(data);
  };

  const handlePublish = (project) => {
    addProject(project);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
      <section className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Simulador de valuación</p>
        <h1 className="text-4xl font-bold text-slate">Proyecta el potencial de tu emprendimiento</h1>
        <p className="text-base text-slate/80 max-w-3xl mx-auto">
          Completa el wizard para estimar una valuación inicial en XLM, conocer el nivel de riesgo y recibir una recomendación
          sobre el tipo de financiamiento ideal en Tequio.
        </p>
      </section>
      <WizardSimulator onComplete={handleComplete} />
      <ValuationResult result={resultKey ? simulatorResults[resultKey] : null} input={inputData ?? {}} />
      {resultKey && inputData ? (
        <RegisterProjectWizard
          initialData={inputData}
          result={simulatorResults[resultKey]}
          onPublish={handlePublish}
        />
      ) : null}
    </div>
  );
};

export default Simulador;
