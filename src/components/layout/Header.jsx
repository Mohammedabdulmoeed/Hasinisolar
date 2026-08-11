import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, Zap } from 'lucide-react';
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
 
  { to: '/refer-and-earn', label: 'Refer & Earn' },
];

/**
 * Custom React Hook to detect Desktop mode:
 * 1. Desktop / Laptop browser
 * 2. Mobile browser with "Desktop Site" enabled in Chrome/Safari (UA reports non-mobile or userAgentData.mobile === false)
 * 3. Screen viewport >= 992px
 */
function useIsDesktopMode() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;

    const matchesMedia = window.matchMedia('(min-width: 992px)').matches;
    const uaDataMobile = navigator.userAgentData?.mobile;
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    if (typeof uaDataMobile === 'boolean') {X
      return !uaDataMobile || matchesMedia;
    }
    return !isMobileUA || matchesMedia;
  });

  useEffect(() => {

    const handleCheck = () => {
      const matchesMedia = window.matchMedia('(min-width: 992px)').matches;
      const uaDataMobile = navigator.userAgentData?.mobile;
      const ua = navigator.userAgent || navigator.vendor || window.opera || '';
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

      if (typeof uaDataMobile === 'boolean') {
        setIsDesktop(!uaDataMobile || matchesMedia);
      } else {
        setIsDesktop(!isMobileUA || matchesMedia);
      }
    };

    handleCheck();

    const mediaQuery = window.matchMedia('(min-width: 992px)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleCheck);
    } else {
      mediaQuery.addListener(handleCheck);
    }

    window.addEventListener('resize', handleCheck);
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleCheck);
      } else {
        mediaQuery.removeListener(handleCheck);
      }
      window.removeEventListener('resize', handleCheck);
    };
  }, []);

  return isDesktop;
}

export default function Header({ onQuoteClick }) {
  const scrolled = useScrollPosition(40);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktopMode = useIsDesktopMode();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu if desktop mode becomes active
  useEffect(() => {
    if (isDesktopMode) {
      setMobileMenuOpen(false);
    }
  }, [isDesktopMode]);

  // Header background theme logic
  const isLightHeader = scrolled || !isHome;

  const headerBgClass = isLightHeader
    ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-2.5'
    : 'bg-slate-950/75 backdrop-blur-xl border-b border-white/10 py-3.5';

  const linkTextClass = isLightHeader
    ? 'text-slate-700 hover:text-amber-500 font-semibold'
    : 'text-slate-200 hover:text-amber-400 font-semibold';

  const phoneTextClass = isLightHeader
    ? 'text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200'
    : 'text-white bg-white/10 hover:bg-white/20 border-white/15';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ===================================================================
            HEADER TOP ROW
            =================================================================== */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 w-full">
          
          {/* 1. BRAND LOGO */}
          <Link 
            to="/" 
            className="flex items-center gap-2 shrink-0 group focus:outline-none" 
            aria-label="Sunrise Solar Hub Home"
          >
            <img
              src={isLightHeader ? logos : logob}
              alt="Sunrise Solar Hub Logo"
              className="h-11 sm:h-14 md:h-16 lg:h-[4.25rem] w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px] object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* ===================================================================
              2. DESKTOP NAVIGATION (FORCED WHEN isDesktopMode IS TRUE OR VIEWPORT >= 992px)
              =================================================================== */}
          {(isDesktopMode || true) && (
            <nav className={`${isDesktopMode ? 'flex' : 'hidden min-[992px]:flex'} items-center gap-1 xl:gap-2`}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-lg text-xs xl:text-sm tracking-wide transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : `${linkTextClass} hover:bg-white/10`
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          )}

          {/* ===================================================================
              3. DESKTOP ACTION BUTTONS (CALL NOW + GET QUOTE)
              =================================================================== */}
          {(isDesktopMode || true) && (
            <div className={`${isDesktopMode ? 'flex' : 'hidden min-[992px]:flex'} items-center gap-2.5 xl:gap-3 shrink-0`}>
              {/* Call Now Button */}
              <a
                href={`tel:${company.phoneDisplay?.[0]?.replace(/\s/g, '') || '+918555033246'}`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs font-bold border transition-all whitespace-nowrap ${phoneTextClass}`}
              >
                <Phone className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>Call Now</span>
              </a>

              {/* Get Free Quote Button */}
              <button
                onClick={() => onQuoteClick ? onQuoteClick() : window.location.href = '/contact#contact-form'}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 shadow-md hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Zap className="h-3.5 w-3.5 fill-slate-950" />
                <span>Get Quote</span>
              </button>
            </div>
          )}

          {/* ===================================================================
              4. MOBILE VIEW CONTROLS (HIDDEN WHEN isDesktopMode IS TRUE)
              =================================================================== */}
          {!isDesktopMode && (
            <div className="flex min-[992px]:hidden items-center gap-2 shrink-0">
              {/* Quick Call Link on Mobile Bar */}
              <a
                href={`tel:${company.phoneDisplay?.[0]?.replace(/\s/g, '') || '+918555033246'}`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${phoneTextClass}`}
                aria-label="Call Sunrise Solar Hub"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span className="hidden sm:inline">Call</span>
              </a>

              {/* Mobile Hamburger Toggle Button (☰ / ✕) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-xl border transition-all focus:outline-none ${
                  isLightHeader 
                    ? 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200' 
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-amber-400" />
                ) : (
                  <Menu className="h-5 w-5 text-amber-400" />
                )}
              </button>
            </div>
          )}

        </div>

        {/* ===================================================================
            5. MOBILE NAVIGATION DRAWER (ONLY RENDERED WHEN NOT DESKTOP MODE AND MENU OPEN)
            =================================================================== */}
        {!isDesktopMode && mobileMenuOpen && (
          <div className="min-[992px]:hidden mt-3 pt-3 border-t border-slate-200/30 animate-fadeIn">
            <div className={`rounded-2xl p-4 shadow-2xl border ${
              isLightHeader 
                ? 'bg-white/98 border-slate-200 text-slate-900' 
                : 'bg-slate-950/95 backdrop-blur-2xl border-white/15 text-white'
            }`}>
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950'
                          : 'hover:bg-amber-500/10 hover:text-amber-400'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </NavLink>
                ))}
              </nav>

              {/* Mobile Drawer Action Buttons */}
              <div className="mt-4 pt-4 border-t border-slate-200/20 flex flex-col gap-2.5">
                <a
                  href={`tel:${company.phoneDisplay?.[0]?.replace(/\s/g, '') || '+918555033246'}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>Call {company.phoneDisplay?.[0] || '+91 85550 33246'}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onQuoteClick) {
                      onQuoteClick();
                    } else {
                      window.location.href = '/contact#contact-form';
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md hover:brightness-110 transition-all uppercase tracking-wider"
                >
                  <Zap className="h-4 w-4 fill-slate-950" />
                  <span>Get Free Quote</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}