import { ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react';

const iconByRisk = {
  Bajo: TrendingUp,
  Medio: ShieldCheck,
  Alto: AlertTriangle,
};

const ValuationResult = ({ result, input }) => {
  if (!result) return null;
  const Icon = iconByRisk[result.riskLevel] || TrendingUp;

  return (
    <section className="bg-white rounded-3xl shadow-card p-6 lg:p-8 space-y-5">
      <header className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber text-white shadow-card">
          <Icon className="w-6 h-6" />
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber font-semibold">Resultado</p>
          <h3 className="text-2xl font-semibold text-slate">{input.businessName || 'Proyecto'}</h3>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-agave/10 rounded-2xl p-4">
          <p className="text-xs uppercase tracking-widest text-slate/60">Valuación estimada</p>
          <p className="text-2xl font-semibold text-slate">{result.valuation}</p>
        </div>
        <div className="bg-agave/10 rounded-2xl p-4">
          <p className="text-xs uppercase tracking-widest text-slate/60">Nivel de riesgo</p>
          <p className="text-2xl font-semibold text-slate">{result.riskLevel}</p>
        </div>
        <div className="bg-agave/10 rounded-2xl p-4">
          <p className="text-xs uppercase tracking-widest text-slate/60">Recomendación</p>
          <p className="text-2xl font-semibold text-slate">{result.recommendation}</p>
        </div>
      </div>
      <p className="text-sm text-slate/80">{result.description}</p>
      <div className="bg-agave/10 rounded-2xl p-5 space-y-3">
        <h4 className="text-base font-semibold text-slate">Resumen enviado</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate/80">
          <li><strong>Sector:</strong> {input.sector}</li>
          <li><strong>Ubicación:</strong> {input.location}</li>
          <li><strong>Ingresos mensuales:</strong> {input.monthlyRevenue} XLM</li>
          <li><strong>Costos mensuales:</strong> {input.monthlyCosts} XLM</li>
          <li><strong>Crecimiento estimado:</strong> {input.growth}%</li>
          <li><strong>Capital buscado:</strong> {input.capitalNeeded} XLM</li>
          <li><strong>Uso del capital:</strong> {input.capitalUse}</li>
          <li><strong>Formalidad:</strong> {input.formality}</li>
          <li><strong>Años operando:</strong> {input.yearsOperating}</li>
          <li><strong>Tamaño del equipo:</strong> {input.teamSize}</li>
        </ul>
      </div>
    </section>
  );
};

export default ValuationResult;
