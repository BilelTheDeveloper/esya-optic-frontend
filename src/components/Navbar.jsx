import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Effet de scroll pour changer l'apparence au défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Mon Espace', path: '/dashboard' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-blue-500/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* --- LOGO ELITE --- */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-black text-xl">E</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Esya.<span className="text-blue-600">optic</span>
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-1.5 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-8 w-[1px] bg-slate-200 mx-4"></div>

            <Link 
              to="/login" 
              className="relative group overflow-hidden px-8 py-3 bg-slate-900 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Connexion </span>
            </Link>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm text-slate-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU (Glass Effect) --- */}
        <div className={`md:hidden absolute left-6 right-6 mt-4 transition-all duration-500 transform ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}>
          <div className="bg-white/90 backdrop-blur-2xl border border-white p-6 rounded-[2rem] shadow-2xl space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block p-4 rounded-2xl hover:bg-blue-50 text-slate-800 font-bold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="block p-4 bg-blue-600 text-white text-center rounded-2xl font-bold shadow-lg shadow-blue-200"
            >
              Connexion 
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;