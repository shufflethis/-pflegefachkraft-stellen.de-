import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, HeartHandshake, ChevronRight } from 'lucide-react';
import { NavigationPaths } from '../types';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Startseite', path: NavigationPaths.HOME },
    { label: 'Stellenangebote', path: NavigationPaths.JOBS },
    { label: 'Für Arbeitgeber', path: NavigationPaths.EMPLOYERS },
    { label: 'Für Bewerber', path: NavigationPaths.CANDIDATES },
    { label: 'Über Uns', path: NavigationPaths.ABOUT },
    { label: 'Kontakt', path: NavigationPaths.CONTACT },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-deep-800 bg-warm-50 selection:bg-mint-200 selection:text-deep-900">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen 
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-warm-200 py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavLink to={NavigationPaths.HOME} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-mint-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-mint-200 group-hover:scale-105 transition-transform duration-300">
                <HeartHandshake size={22} />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-deep-900 group-hover:text-mint-700 transition-colors">
                pflegefachkraft<span className="text-mint-600">-stellen</span>.de
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-mint-50 text-mint-700 font-semibold' 
                        : 'text-slate-600 hover:text-mint-600 hover:bg-white/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pl-4 ml-4 border-l border-warm-200">
                <NavLink 
                  to={NavigationPaths.JOBS}
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-deep-900 text-white text-sm font-medium hover:bg-mint-600 transition-colors shadow-lg shadow-deep-900/10"
                >
                  Job finden
                </NavLink>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-warm-100 transition-colors"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-warm-200 shadow-xl transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-mint-50 text-mint-700'
                      : 'text-slate-600 hover:bg-warm-50'
                  }`
                }
              >
                {item.label}
                <ChevronRight size={16} className="opacity-50" />
              </NavLink>
            ))}
            <div className="pt-4 mt-4 border-t border-warm-100">
               <NavLink 
                 to={NavigationPaths.JOBS}
                 className="flex items-center justify-center w-full py-3 rounded-xl bg-mint-600 text-white font-medium hover:bg-mint-700 transition-colors"
               >
                 Jetzt Job finden
               </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-deep-900 text-warm-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6 text-white">
                <HeartHandshake size={28} className="text-mint-400" />
                <span className="text-2xl font-serif font-bold">pflegefachkraft-stellen.de</span>
              </div>
              <p className="text-warm-300 leading-relaxed text-lg mb-8 max-w-md">
                Wir glauben an eine Pflege, die den Menschen sieht. Unsere Plattform verbindet Fachkräfte und Einrichtungen, die diese Vision teilen. Digital, einfach, menschlich.
              </p>
              <div className="flex gap-4">
                 {/* Social placeholders could go here */}
              </div>
            </div>
            
            <div className="lg:col-span-2 lg:col-start-7">
              <h4 className="text-white font-serif font-bold text-lg mb-6">Plattform</h4>
              <ul className="space-y-4">
                <li><NavLink to={NavigationPaths.JOBS} className="hover:text-mint-300 transition-colors inline-block">Stellenangebote</NavLink></li>
                <li><NavLink to={NavigationPaths.EMPLOYERS} className="hover:text-mint-300 transition-colors inline-block">Für Arbeitgeber</NavLink></li>
                <li><NavLink to={NavigationPaths.CANDIDATES} className="hover:text-mint-300 transition-colors inline-block">Für Bewerber</NavLink></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-serif font-bold text-lg mb-6">Unternehmen</h4>
              <ul className="space-y-4">
                <li><NavLink to={NavigationPaths.ABOUT} className="hover:text-mint-300 transition-colors inline-block">Über Uns</NavLink></li>
                <li><NavLink to={NavigationPaths.CONTACT} className="hover:text-mint-300 transition-colors inline-block">Kontakt</NavLink></li>
                <li><a href="#" className="hover:text-mint-300 transition-colors inline-block">Presse</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-serif font-bold text-lg mb-6">Rechtliches</h4>
              <ul className="space-y-4">
                <li><NavLink to="/impressum" className="hover:text-mint-300 transition-colors inline-block">Impressum</NavLink></li>
                <li><NavLink to="/datenschutz" className="hover:text-mint-300 transition-colors inline-block">Datenschutz</NavLink></li>
                <li><a href="#" className="hover:text-mint-300 transition-colors inline-block">AGB</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-deep-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-warm-500 gap-4">
            <p>&copy; {new Date().getFullYear()} pflegefachkraft-stellen.de</p>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <HeartHandshake size={14} className="text-mint-500" />
              <span>in Deutschland</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;