import { useState } from 'react';

const steps = [
  {
    title: 'Identidad del proyecto',
    fields: [
      { name: 'businessName', label: 'Nombre del negocio', type: 'text', required: true },
      { name: 'sector', label: 'Sector o industria', type: 'text', required: true },
      { name: 'location', label: 'Ubicación', type: 'text', required: true },
    ],
  },
  {
    title: 'Salud financiera',
    fields: [
      { name: 'monthlyRevenue', label: 'Ingresos mensuales actuales (XLM)', type: 'number', required: true },
      { name: 'monthlyCosts', label: 'Costos mensuales (XLM)', type: 'number', required: true },
      { name: 'growth', label: 'Crecimiento estimado (%)', type: 'number', required: true },
    ],
  },
  {
    title: 'Necesidades de capital',
    fields: [
      { name: 'capitalNeeded', label: 'Monto de capital que busca (XLM)', type: 'number', required: true },
      { name: 'capitalUse', label: 'Uso del capital', type: 'text', required: true },
      {
        name: 'formality',
        label: 'Nivel de formalidad',
        type: 'select',
        options: [
          { value: 'registrado', label: 'Registrado' },
          { value: 'informal', label: 'Informal' },
        ],
        required: true,
      },
    ],
  },
  {
    title: 'Equipo y trayectoria',
    fields: [
      { name: 'yearsOperating', label: 'Tiempo operando (años)', type: 'number', required: true },
      { name: 'teamSize', label: 'Tamaño del equipo', type: 'number', required: true },
    ],
  },
];

const initialState = {
  businessName: '',
  sector: '',
  location: '',
  monthlyRevenue: '',
  monthlyCosts: '',
  growth: '',
  capitalNeeded: '',
  capitalUse: '',
  formality: 'registrado',
  yearsOperating: '',
  teamSize: '',
};

const WizardSimulator = ({ onComplete }) => {
  const [formData, setFormData] = useState(initialState);
  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const activeStep = steps[currentStep];

  return (
    <section className="bg-white rounded-3xl shadow-card p-6 lg:p-8 space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-amber font-semibold">Simulador</p>
        <h2 className="text-2xl font-semibold text-slate">{activeStep.title}</h2>
        <p className="text-sm text-slate/70">
          Paso {currentStep + 1} de {steps.length}. Completa la información para estimar la valuación de tu proyecto.
        </p>
        <div className="w-full h-2 bg-agave/10 rounded-full overflow-hidden">
          <div className="h-full bg-amber transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
        </div>
      </header>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {activeStep.fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2 text-sm text-slate/80">
            <span className="font-semibold text-slate">{field.label}</span>
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                required={field.required}
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                required={field.required}
                min={field.type === 'number' ? 0 : undefined}
              />
            )}
          </label>
        ))}
      </form>
      <footer className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-agave/10 text-slate font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
        >
          {currentStep === steps.length - 1 ? 'Ver resultado' : 'Siguiente'}
        </button>
      </footer>
    </section>
  );
};

export default WizardSimulator;
