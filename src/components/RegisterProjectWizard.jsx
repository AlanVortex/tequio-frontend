import { useMemo, useState } from 'react';

const impactOptions = ['Social', 'Ambiental', 'Educativo', 'Tecnológico', 'Cultural'];

const RegisterProjectWizard = ({ initialData, result, onPublish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData.businessName || '',
    category: initialData.sector || '',
    location: initialData.location || '',
    community: '',
    description: '',
    impactStatement: '',
    impactType: 'Social',
    isWeb3: initialData.sector?.toLowerCase().includes('web3') || false,
    entrepreneurName: '',
    entrepreneurRegion: initialData.location || '',
    monthlyRevenue: initialData.monthlyRevenue || '',
    monthlyCosts: initialData.monthlyCosts || '',
    growth: initialData.growth || '',
    capitalNeeded: initialData.capitalNeeded || '',
    capitalUse: initialData.capitalUse || '',
    image: '',
  });

  const recommendation = result?.recommendation || 'Por definir';

  const steps = useMemo(
    () => [
      {
        title: 'Datos generales',
        description: 'Describe la esencia de tu proyecto para que inversionistas conozcan su propósito.',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Nombre del proyecto</span>
              <input
                name="name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                placeholder="Ej. Huerto solar comunitario"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Categoría</span>
              <input
                name="category"
                value={formData.category}
                onChange={(event) => setFormData({ ...formData, category: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                placeholder="Selecciona o escribe una categoría"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Ubicación</span>
              <input
                name="location"
                value={formData.location}
                onChange={(event) => setFormData({ ...formData, location: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                placeholder="Ciudad, país"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Comunidad impactada</span>
              <input
                name="community"
                value={formData.community}
                onChange={(event) => setFormData({ ...formData, community: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                placeholder="Ej. Cooperativa maya"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80 md:col-span-2">
              <span className="font-semibold text-slate">Descripción breve</span>
              <textarea
                name="description"
                value={formData.description}
                onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave min-h-[120px]"
                placeholder="Cuenta cómo resuelves una necesidad y tu impacto social."
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Tipo de impacto</span>
              <select
                name="impactType"
                value={formData.impactType}
                onChange={(event) => setFormData({ ...formData, impactType: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
              >
                {impactOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">¿Utiliza tecnología Web3?</span>
              <select
                name="isWeb3"
                value={formData.isWeb3 ? 'true' : 'false'}
                onChange={(event) => setFormData({ ...formData, isWeb3: event.target.value === 'true' })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80 md:col-span-2">
              <span className="font-semibold text-slate">Mensaje de impacto</span>
              <textarea
                name="impactStatement"
                value={formData.impactStatement}
                onChange={(event) => setFormData({ ...formData, impactStatement: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave min-h-[100px]"
                placeholder="Ej. Financiará paneles solares y capacitación para 40 familias."
              />
            </label>
          </div>
        ),
      },
      {
        title: 'Datos financieros',
        description: 'Revisa y ajusta la información financiera sugerida por el simulador.',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Ingresos mensuales (XLM)</span>
              <input
                type="number"
                min="0"
                name="monthlyRevenue"
                value={formData.monthlyRevenue}
                onChange={(event) => setFormData({ ...formData, monthlyRevenue: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Costos mensuales (XLM)</span>
              <input
                type="number"
                min="0"
                name="monthlyCosts"
                value={formData.monthlyCosts}
                onChange={(event) => setFormData({ ...formData, monthlyCosts: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Crecimiento estimado (%)</span>
              <input
                type="number"
                min="0"
                name="growth"
                value={formData.growth}
                onChange={(event) => setFormData({ ...formData, growth: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Capital requerido (XLM)</span>
              <input
                type="number"
                min="0"
                name="capitalNeeded"
                value={formData.capitalNeeded}
                onChange={(event) => setFormData({ ...formData, capitalNeeded: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80 md:col-span-2">
              <span className="font-semibold text-slate">Uso del capital</span>
              <textarea
                name="capitalUse"
                value={formData.capitalUse}
                onChange={(event) => setFormData({ ...formData, capitalUse: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave min-h-[100px]"
                placeholder="Detalla en qué se invertirá el capital solicitado."
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Nombre del representante</span>
              <input
                name="entrepreneurName"
                value={formData.entrepreneurName}
                onChange={(event) => setFormData({ ...formData, entrepreneurName: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                placeholder="Quién lidera el proyecto"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">Región del representante</span>
              <input
                name="entrepreneurRegion"
                value={formData.entrepreneurRegion}
                onChange={(event) => setFormData({ ...formData, entrepreneurRegion: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
              />
            </label>
          </div>
        ),
      },
      {
        title: 'Identidad visual',
        description: 'Carga una imagen de referencia para destacar tu proyecto en la red.',
        content: (
          <div className="grid grid-cols-1 gap-5">
            <label className="flex flex-col gap-2 text-sm text-slate/80">
              <span className="font-semibold text-slate">URL de imagen o banner</span>
              <input
                name="image"
                value={formData.image}
                onChange={(event) => setFormData({ ...formData, image: event.target.value })}
                className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
                placeholder="https://..."
              />
            </label>
            <p className="text-sm text-slate/70">
              Próximamente podrás subir archivos directamente o conectar tu IPFS favorito. Por ahora, usa una imagen pública que represente tu iniciativa.
            </p>
          </div>
        ),
      },
      {
        title: 'Confirmación',
        description: 'Revisa que la información sea correcta antes de publicar tu proyecto en el catálogo.',
        content: (
          <div className="space-y-4 text-sm text-slate/80">
            <p>
              <strong>Nombre:</strong> {formData.name || 'Por definir'} · <strong>Categoría:</strong> {formData.category || 'Por definir'}
            </p>
            <p>
              <strong>Ubicación:</strong> {formData.location || 'Por definir'} · <strong>Comunidad:</strong> {formData.community || 'Por definir'}
            </p>
            <p>
              <strong>Impacto:</strong> {formData.impactStatement || 'Se agregará al publicar.'}
            </p>
            <p>
              <strong>Capital requerido:</strong> {formData.capitalNeeded || '0'} XLM ({recommendation})
            </p>
            <p>
              <strong>Retorno esperado:</strong> {result?.valuation || 'Valuación pendiente'} · <strong>Riesgo:</strong> {result?.riskLevel || 'En validación'}
            </p>
            <p>
              <strong>Imagen:</strong> {formData.image ? 'Cargada' : 'Usaremos un banner sugerido'}
            </p>
          </div>
        ),
      },
    ],
    [formData, recommendation, result?.riskLevel, result?.valuation],
  );

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handlePublish = () => {
    const impactHighlight = formData.impactStatement || 'Impacto en construcción.';
    onPublish({
      name: formData.name || 'Proyecto sin nombre',
      category: formData.category || 'Proyecto comunitario',
      location: formData.location || 'Ubicación por confirmar',
      community: formData.community || 'Comunidad Tequio',
      impact: impactHighlight,
      impactType: formData.impactType,
      fundingType: recommendation === 'Inversión' ? 'Inversión' : 'Microcrédito',
      isWeb3: Boolean(formData.isWeb3),
      image: formData.image,
      description:
        formData.description ||
        'Descripción en construcción. Actualiza esta sección para destacar los objetivos de tu proyecto.',
      entrepreneur: {
        name: formData.entrepreneurName || 'Equipo fundador',
        region: formData.entrepreneurRegion || formData.location || 'Región por definir',
      },
      valuation: {
        estimatedValue: result?.valuation || `${formData.capitalNeeded || '0'} XLM`,
        risk: result?.riskLevel || 'Por confirmar',
        expectedReturn:
          recommendation === 'Inversión' ? 'Retorno estimado de 12% anual' : 'Retorno social medido trimestralmente',
        suggestedInvestment:
          recommendation === 'Inversión'
            ? `${formData.capitalNeeded || '0'} XLM recomendados`
            : `${formData.capitalNeeded || '0'} XLM en microcréditos escalonados`,
      },
      impactHighlights: [impactHighlight],
    });
    setIsPublished(true);
  };

  return (
    <section className="bg-white rounded-3xl shadow-card p-6 lg:p-8 space-y-6">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-amber font-semibold">Publica tu proyecto</p>
        <h2 className="text-2xl font-semibold text-slate">Registra tu iniciativa en Tequio</h2>
        <p className="text-sm text-slate/70">
          Completa los {steps.length} pasos para compartir tu proyecto con la comunidad. Podrás actualizarlo cuando conectemos datos on-chain.
        </p>
        <div className="w-full h-2 bg-agave/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </header>
      <div className="space-y-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate">Paso {currentStep + 1}: {steps[currentStep].title}</h3>
          <p className="text-sm text-slate/70">{steps[currentStep].description}</p>
        </div>
        <div className="space-y-4">{steps[currentStep].content}</div>
      </div>
      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-agave/20 text-slate font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            type="button"
            onClick={handlePublish}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
          >
            Publicar proyecto
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
          >
            Siguiente
          </button>
        )}
      </footer>
      {isPublished ? (
        <div className="bg-agave/10 rounded-2xl p-5 text-sm text-slate/80">
          ¡Listo! Tu proyecto se agregó a la sección de exploración. En los próximos sprints conectaremos con Stellar para validar datos en tiempo real.
        </div>
      ) : null}
    </section>
  );
};

export default RegisterProjectWizard;
