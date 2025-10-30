import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoFixed.png';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/about', label: 'Nosotros' },
  { to: '/explorar', label: 'Proyectos' },
  { to: '/comunidad', label: 'Comunidad' },
  { to: '/simulador', label: 'Simulador' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/perfil', label: 'Perfil' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium tracking-wide px-3 py-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-amber text-white' : 'text-slate hover:bg-agave/10'
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-sand/90 border-b border-agave/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Tequio Logo"
              className="h-10 w-auto"
            />
            <span className="font-semibold text-lg text-slate">Tequio</span>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-semibold text-slate hover:text-amber transition-colors"
            >
              Ingresar
            </Link>
            <Link
              to="/registro"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
            >
              Crear cuenta
            </Link>
            <Link
              to="/simulador"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-agave/20 text-slate font-semibold shadow-card hover:bg-agave/30"
            >
              Comienza
            </Link>
          </div>
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate hover:bg-agave/10 focus:outline-none focus:ring-2 focus:ring-agave"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú de navegación"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open ? (
          <div className="lg:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-agave/20 text-slate font-semibold hover:bg-agave/30"
              onClick={() => setOpen(false)}
            >
              Ingresar
            </Link>
            <Link
              to="/registro"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber text-white font-semibold shadow-card hover:bg-amber/90"
              onClick={() => setOpen(false)}
            >
              Crear cuenta
            </Link>
            <Link
              to="/simulador"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-agave/20 text-slate font-semibold hover:bg-agave/30"
              onClick={() => setOpen(false)}
            >
              Comienza
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
