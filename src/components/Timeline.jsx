const Timeline = ({ steps }) => (
  <div className="relative">
    <div className="hidden lg:flex justify-between items-center">
      {steps.map((step, index) => (
        <div key={step.title} className="flex-1 flex flex-col items-center text-center px-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber text-white font-semibold shadow-card">
            {index + 1}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate">{step.title}</h3>
          <p className="mt-2 text-sm text-slate/80 max-w-xs">{step.description}</p>
        </div>
      ))}
    </div>
    <div className="lg:hidden space-y-6">
      {steps.map((step, index) => (
        <div key={step.title} className="flex gap-4 items-start">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber text-white font-semibold shadow-card shrink-0">
            {index + 1}
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate">{step.title}</h3>
            <p className="mt-1 text-sm text-slate/80">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="hidden lg:block absolute top-7 left-20 right-20 h-1 bg-agave/20 -z-10" aria-hidden />
  </div>
);

export default Timeline;
