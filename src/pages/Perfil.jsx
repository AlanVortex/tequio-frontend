import WalletSummary from '../components/WalletSummary.jsx';
import userProfile from '../data/userProfile.js';

const Perfil = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
    <section className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-amber font-semibold">Perfil</p>
      <h1 className="text-4xl font-bold text-slate">Tu tablero personal en Tequio</h1>
      <p className="text-base text-slate/80 max-w-2xl mx-auto">
        Visualiza tu wallet, proyectos activos, categorías de interés e indicadores de impacto. Próximamente podrás editar tu
        información, automatizar reportes y compartir logros con tu comunidad.
      </p>
    </section>
    <WalletSummary profile={userProfile} />
  </div>
);

export default Perfil;
