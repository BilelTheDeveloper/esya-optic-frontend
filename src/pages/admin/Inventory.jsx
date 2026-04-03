import React, { useState, useEffect } from 'react';

const Inventory = () => {
  // Données simulées (À connecter à ton API MongoDB plus tard)
  const [frames, setFrames] = useState([
    { id: 1, model: "Roma Crystal", brand: "Esya Luxury", stock: 2, views: 145, favorites: 28, img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=200" },
    { id: 2, model: "Neo Black", brand: "Urban Style", stock: 0, views: 89, favorites: 12, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=200" },
    { id: 3, model: "Aviator Gold", brand: "Vintage Co.", stock: 15, views: 210, favorites: 64, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=200" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">Stock & Insights <span className="text-blue-600">.</span></h1>
            <p className="text-slate-500 mt-2 font-medium">Analysez les tendances et gérez vos montures.</p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
            + Ajouter une monture
          </button>
        </div>

        {/* --- STATS RAPIDES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Modèle le plus aimé</p>
            <h3 className="text-2xl font-bold text-slate-900">Aviator Gold</h3>
            <div className="mt-4 flex items-center text-blue-600 font-bold">
              <span>🔥 64 favoris</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Alertes Stock</p>
            <h3 className="text-2xl font-bold text-red-500">2 Ruptures</h3>
            <p className="text-slate-400 text-sm mt-1">À commander rapidement.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Engagement</p>
            <h3 className="text-2xl font-bold text-slate-900">445 Vues</h3>
            <p className="text-slate-400 text-sm mt-1">Sur la collection ce mois.</p>
          </div>
        </div>

        {/* --- TABLEAU D'INVENTAIRE --- */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Produit</th>
                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Stock</th>
                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Popularité (Vues)</th>
                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Favoris (VTO)</th>
                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {frames.map((frame) => (
                <tr key={frame.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={frame.img} className="w-12 h-12 rounded-xl object-cover border border-slate-100" alt="" />
                      <div>
                        <p className="font-bold text-slate-900">{frame.model}</p>
                        <p className="text-xs text-slate-400">{frame.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black ${frame.stock === 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {frame.stock === 0 ? 'RUPTURE' : `${frame.stock} en stock`}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-600">
                    <div className="w-full bg-slate-100 h-2 rounded-full max-w-[100px] overflow-hidden">
                        <div className="bg-blue-600 h-full" style={{ width: `${(frame.views/250)*100}%` }}></div>
                    </div>
                    <span className="text-[10px] mt-1 block">{frame.views} clics</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                        <span className="text-pink-500 font-black">❤️ {frame.favorites}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <button className="text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors">Modifier</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;