import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Tableau de bord', path: '/dashboard', icon: '📊' },
    { name: 'Rendez-vous', path: '/admin/bookings', icon: '📅' },
    { name: 'Inventaire & Tendances', path: '/admin/inventory', icon: '👓' },
    { name: 'Clients', path: '/admin/clients', icon: '👤' },
    { name: 'Paramètres', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white p-8 z-50 shadow-2xl">
      <div className="mb-12 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black italic text-xl">E</div>
        <span className="text-xl font-black tracking-tighter uppercase">Esya<span className="text-blue-500">.</span>Admin</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
              location.pathname === item.path 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 scale-105' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-10 left-8 right-8">
        <button className="w-full p-4 bg-slate-800 hover:bg-red-500/20 hover:text-red-500 rounded-2xl text-slate-400 font-bold transition-all flex items-center justify-center gap-3">
          <span>🚪</span> Déconnexion
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;