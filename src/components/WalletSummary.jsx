import { Copy, Wallet, Sparkles, Users } from 'lucide-react';

const WalletSummary = ({ profile }) => (
  <section className="bg-white rounded-3xl shadow-card p-6 lg:p-8 space-y-6">
    <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber text-white shadow-card">
          <Wallet className="w-6 h-6" />
        </span>
        <div>
          <p className="text-sm text-slate/70">Wallet principal</p>
          <h3 className="text-xl font-semibold text-slate break-all">{profile.walletAddress}</h3>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agave/15 text-slate font-semibold hover:bg-agave/25"
      >
        <Copy className="w-4 h-4" /> Copiar dirección
      </button>
    </header>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-agave/10 rounded-2xl p-4">
        <p className="text-sm text-slate/70">Balance en Lumens</p>
        <p className="text-2xl font-semibold text-slate">{profile.balance.lumens}</p>
      </div>
      <div className="bg-agave/10 rounded-2xl p-4">
        <p className="text-sm text-slate/70">Balance en USDC</p>
        <p className="text-2xl font-semibold text-slate">{profile.balance.usdc}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-slate">Mis proyectos activos</h4>
        <ul className="space-y-3">
          {profile.activeProjects.map((project) => (
            <li key={project.id} className="bg-agave/10 rounded-2xl p-4">
              <p className="text-sm font-semibold text-slate">{project.name}</p>
              <p className="text-xs text-slate/70">{project.category}</p>
              <p className="text-sm text-amber font-semibold mt-2">{project.invested}</p>
              <p className="text-xs text-slate/60 mt-1">{project.status}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-slate">Mis intereses</h4>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span key={interest} className="px-4 py-2 rounded-full bg-amber/10 text-amber text-sm font-semibold">
              {interest}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4 bg-agave/10 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-slate flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber" /> Mi impacto
        </h4>
        <ul className="space-y-3 text-sm text-slate/80">
          <li className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber" /> Aportes totales: {profile.impact.totalInvested}
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber" /> Proyectos apoyados: {profile.impact.supportedProjects}
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber" /> Comunidades impactadas: {profile.impact.communitiesImpacted}
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber" /> Coinversionistas: {profile.impact.coInvestors}
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default WalletSummary;
