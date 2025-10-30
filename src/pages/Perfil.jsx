import { Link } from 'react-router-dom';
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
    <section className="bg-white rounded-3xl shadow-card p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-center gap-4">
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-sand"
        />
        <div>
          <h2 className="text-2xl font-semibold text-slate">{userProfile.name}</h2>
          <p className="text-sm text-slate/70">Alias: @{userProfile.username}</p>
          <p className="text-sm text-slate/70">Correo: {userProfile.email}</p>
          <p className="text-sm text-slate/70">Miembro desde: {userProfile.registeredAt}</p>
        </div>
      </div>
      <div className="bg-agave/10 rounded-2xl p-5 space-y-3 text-center md:text-right">
        <p className="text-sm font-semibold text-slate">
          En Tequio puedes invertir y también registrar tu proyecto
        </p>
        <Link
          to="/simulador"
          className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
        >
          Registrar mi proyecto
        </Link>
      </div>
    </section>
    <WalletSummary profile={userProfile} />
  </div>
);

export default Perfil;
