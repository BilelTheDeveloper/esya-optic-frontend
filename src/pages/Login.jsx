import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${config.API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Identifiants incorrects');
      }

      // Stockage sécurisé du Token Elite
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirection vers le Dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-50 via-blue-50 to-indigo-50 px-6 pt-20">
      
      {/* --- CARTE DE CONNEXION ELITE --- */}
      <div className="relative w-full max-w-md">
        {/* Décoration en arrière-plan */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl"></div>

        <div className="relative bg-white/70 backdrop-blur-2xl border border-white p-10 rounded-[3rem] shadow-2xl shadow-blue-500/5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 mb-6 rotate-3">
              <span className="text-white text-2xl font-black italic">E</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Accès Personnel</h2>
            <p className="text-slate-500 mt-2 text-sm">Gestion Esya.optic Elite</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-xl animate-shake">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">Utilisateur</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="jhonoptic..."
                className="w-full px-6 py-4 bg-white/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-white/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-wait' : 'hover:bg-blue-600 hover:shadow-blue-200'}`}
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button className="text-sm text-slate-400 hover:text-blue-600 transition-colors font-medium">
              Mot de passe oublié ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;