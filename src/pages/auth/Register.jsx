import { Link } from 'react-router-dom';

const Register = () => (
  <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
    <div className="bg-white rounded-3xl shadow-card p-8 space-y-6">
      <header className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber font-semibold">Registro</p>
        <h1 className="text-3xl font-bold text-slate">Crea tu cuenta Tequio</h1>
        <p className="text-sm text-slate/70">
          Únete a la comunidad que impulsa proyectos de impacto con tecnología Web3 transparente.
        </p>
      </header>
      <form className="space-y-4">
        <label className="flex flex-col gap-2 text-sm text-slate/80">
          <span className="font-semibold text-slate">Nombre completo</span>
          <input
            type="text"
            placeholder="Tu nombre y apellidos"
            className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate/80">
          <span className="font-semibold text-slate">Correo electrónico</span>
          <input
            type="email"
            placeholder="tucorreo@tequio.mx"
            className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate/80">
          <span className="font-semibold text-slate">Contraseña</span>
          <input
            type="password"
            placeholder="••••••••"
            className="rounded-2xl border border-agave/30 bg-sand/50 px-4 py-3 focus:ring-2 focus:ring-agave"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
        >
          Crear cuenta
        </button>
      </form>
      <p className="text-xs text-slate/60 text-center">
        Al registrarte aceptas que conectaremos tu wallet Stellar en futuras versiones para validar identidad.
      </p>
      <div className="text-sm text-center text-slate/80">
        ¿Ya tienes cuenta?{' '}
        <Link to="/login" className="font-semibold text-amber hover:text-amber/80">
          Inicia sesión
        </Link>
      </div>
    </div>
  </div>
);

export default Register;
