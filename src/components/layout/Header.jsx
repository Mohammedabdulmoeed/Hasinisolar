import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { company } from '../../data/company';
import logos from '../../assets/hero/logos.jpeg';
import logob from '../../assets/hero/logob.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
  { to: '/solar-calculator', label: 'Solar Calculator' },
];

export default function Header() {
  const scrolled = useScrollPosition(50);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navClass =
    scrolled || !isHome
      ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200/50 py-1.5 md:py-2'
      : 'bg-transparent py-2 md:py-4';

  const textClass = scrolled || !isHome ? 'text-slate-700' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        
        <div className="w-full sm:w-auto flex items-center justify-between shrink-0">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-1 shrink-0" aria-label="Zenco Solar Energies home">
            <img
              src={scrolled || !isHome ? logos : logob}
              alt="Zenco Solar Energies logo"
              className="h-10 sm:h-16 w-auto object-contain transition-all duration-300"
              width={130}
              height={65}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* MOBILE PHONE ACTION (Visible only on very small screens next to logo) */}
          <div className="sm:hidden shrink-0">
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className={`flex items-center gap-1 text-[11px] font-bold ${textClass}`}
            >
              <Phone className="h-3 w-3" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* COMPACT DIRECT LINKS */}
        <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 max-w-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-black text-white shadow-sm'
                    : `${textClass} opacity-85 hover:opacity-100 hover:bg-slate-50/10`
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP PHONE LINK CONTAINER */}
        <div className="hidden sm:block shrink-0">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className={`flex items-center gap-1.5 text-xs font-bold ${textClass} hover:opacity-80 transition-opacity`}
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Now</span>
          </a>
        </div>

      </div>
    </header>
  );
}