const LegalTemplate = ({ title, intro, sections }) => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
    <header className="space-y-3">
      <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Documento legal</p>
      <h1 className="text-3xl font-bold text-slate">{title}</h1>
      <p className="text-sm text-slate/80">{intro}</p>
    </header>
    <section className="bg-white rounded-3xl shadow-card p-8 space-y-6 text-sm text-slate/80">
      {sections.map((section) => (
        <article key={section.heading} className="space-y-2">
          <h2 className="text-lg font-semibold text-slate">{section.heading}</h2>
          <p>{section.content}</p>
        </article>
      ))}
    </section>
  </div>
);

export default LegalTemplate;
