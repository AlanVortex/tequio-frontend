import { useEffect, useRef, useState } from 'react';
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
  const [loadingResult, setLoadingResult] = useState(false);
  const timeoutRef = useRef(null);

  const handleComplete = (data) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const key = evaluateProject(data);
    setInputData(data);
    setResultKey(null);
    setLoadingResult(true);

    timeoutRef.current = setTimeout(() => {
      setResultKey(key);
      setLoadingResult(false);
    }, 2000);
  };

  const handlePublish = (project) => {
    addProject(project);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
      {loadingResult ? (
        <div className="bg-white rounded-3xl shadow-card p-6 lg:p-8 flex items-center gap-4 justify-center">
          <span className="h-12 w-12 rounded-full border-4 border-agave/20 border-t-amber animate-spin" aria-hidden />
          <p className="text-base font-semibold text-slate">Simulando valuación Web3…</p>
        </div>
      ) : null}
      {!loadingResult && resultKey ? (
        <ValuationResult result={simulatorResults[resultKey]} input={inputData ?? {}} />
      ) : null}
      {!loadingResult && resultKey && inputData ? (
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
