import { Link } from 'react-router-dom';

const legalLinks = [
  { to: '/terminos', label: 'Términos y Condiciones' },
  { to: '/privacidad', label: 'Política de Privacidad' },
  { to: '/riesgos', label: 'Riesgos de Inversión' },
  { to: '/aviso', label: 'Aviso Legal' },
];

const extraLinks = [
  { to: '/dashboard', label: 'Panel de análisis' },
  { to: '/login', label: 'Login' },
  { to: '/registro', label: 'Registro' },
];

const Footer = () => (
  <footer className="bg-agave/10 border-t border-agave/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-sm text-slate/80">
            Tequio impulsa comunidades resilientes con tecnología Web3 transparente y accesible.
          </p>
          <p className="text-xs text-slate/60 mt-2">
            Stellar Testnet · Lumens (XLM) · Educación financiera con impacto social.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4">
          <nav className="flex flex-wrap gap-3 text-sm text-slate/80">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-amber">
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-3 text-sm text-slate/80">
            {extraLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-amber">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-6 text-xs text-slate/60">© {new Date().getFullYear()} Tequio. Construyendo economías colaborativas.</div>
    </div>
  </footer>
);

export default Footer;
