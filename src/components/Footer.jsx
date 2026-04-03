import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pb-12 overflow-hidden">
      {/* Effet de lumière en arrière-plan */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-100/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Section Logo & Bio */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900">
                Esya.<span className="text-blue-600">optic</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              L'excellence visuelle alliée au confort numérique. Votre partenaire de confiance pour une vue parfaite et un style affirmé.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-contain" /> {/* Placeholder pour icônes */}
                  <span className="text-[10px]">●</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section Navigation Rapide */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Nos Services', 'Prendre RDV', 'La Collection'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Contact & Horaires */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                <span className="text-blue-600">📍</span>
                123 Rue de la Vision, 75000 Paris
              </li>
              <li className="flex gap-3 text-sm text-slate-500">
                <span className="text-blue-600">📞</span>
                01 23 45 67 89
              </li>
              <li className="flex gap-3 text-sm text-slate-500">
                <span className="text-blue-600">✉️</span>
                contact@esyaoptic.com
              </li>
            </ul>
          </div>

          {/* Section Newsletter / Horaires Flash */}
          <div className="bg-white/50 backdrop-blur-sm border border-white p-6 rounded-[2.5rem] shadow-sm">
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Horaires d'ouverture</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-400">Lun - Ven</span>
                <span className="text-slate-900">09:00 - 19:00</span>
              </div>
              <div className="flex justify-between text-xs font-medium border-t border-slate-100 pt-3">
                <span className="text-slate-400">Samedi</span>
                <span className="text-slate-900">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-xs font-medium text-blue-600 pt-1">
                <span>Dimanche</span>
                <span className="font-bold uppercase">Fermé</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barre de Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[13px]">
            © {currentYear} Esya.optic. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-[13px] text-slate-400">
            <Link to="/" className="hover:text-blue-600 transition-colors">Mentions Légales</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;