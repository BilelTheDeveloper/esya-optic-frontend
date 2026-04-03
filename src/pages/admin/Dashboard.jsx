import React from 'react';
import Sidebar from '../../components/admin/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Latérale */}
      <Sidebar />

      {/* Zone de Contenu Principale */}
      <main className="flex-1 ml-72 p-12">
        
        {/* --- TOP BAR --- */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Bonjour, <span className="text-blue-600">Jhon</span> 👋</h1>
            <p className="text-slate-500 font-medium mt-1">Voici l'activité d'Esya.optic aujourd'hui.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 font-bold text-slate-600">
                Vendredi, 3 Avril 2026
             </div>
          </div>
        </div>

        {/* --- KPI CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'RDV Aujourd\'hui', value: '8', color: 'blue', icon: '📅' },
            { label: 'Nouveaux Clients', value: '+12', color: 'indigo', icon: '✨' },
            { label: 'VTO Favoris', value: '45', color: 'pink', icon: '❤️' },
            { label: 'Stock Alerte', value: '2', color: 'red', icon: '⚠️' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">{stat.icon}</div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.label}</p>
              <h3 className={`text-4xl font-black mt-2 text-slate-900`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* --- GRID SECTIONS --- */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Prochains Rendez-vous */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-slate-900 italic">Prochains RDV</h3>
              <button className="text-blue-600 font-bold text-sm">Voir tout</button>
            </div>
            <div className="space-y-4">
              {[
                { time: '14:30', name: 'Alice Martin', type: 'Examen de vue' },
                { time: '15:15', name: 'Robert Durand', type: 'Style & Montures' },
                { time: '16:00', name: 'Sophie Petit', type: 'Lentilles' },
              ].map((rdv, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-600 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="font-black text-blue-600 group-hover:text-white">{rdv.time}</span>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-white">{rdv.name}</p>
                      <p className="text-xs text-slate-400 group-hover:text-blue-100">{rdv.type}</p>
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-white">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tendances Montures (VTO) */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 italic mb-8">Tendances Virtuelles (VTO)</h3>
            <div className="space-y-6">
               <p className="text-slate-500 text-sm">Les montures les plus essayées virtuellement cette semaine.</p>
               <div className="flex items-end gap-4 h-32">
                  <div className="flex-1 bg-blue-100 rounded-t-xl h-[80%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs">Roma</div>
                  </div>
                  <div className="flex-1 bg-blue-600 rounded-t-xl h-[100%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs">Aviator</div>
                  </div>
                  <div className="flex-1 bg-blue-300 rounded-t-xl h-[40%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs">Neo</div>
                  </div>
                  <div className="flex-1 bg-blue-100 rounded-t-xl h-[60%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs">Lux</div>
                  </div>
               </div>
               <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>Modèle A</span>
                  <span>Modèle B</span>
                  <span>Modèle C</span>
                  <span>Modèle D</span>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;