import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importation des pages réelles
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import Booking from './pages/Booking';

// Importation de l'Espace Administration
import Dashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';

// Composant Helper pour gérer l'affichage conditionnel du layout
const LayoutHandler = ({ children }) => {
  const location = useLocation();
  
  // Liste des routes où l'on veut masquer la Navbar et le Footer (Admin & Login)
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/dashboard';
  const isLoginRoute = location.pathname === '/login';
  
  const hideLayout = isAdminRoute || isLoginRoute;

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    /* Conteneur principal Elite avec antialiasing et sélection personnalisée */
    <div className="antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-700 min-h-screen flex flex-col">
      <BrowserRouter>
        <LayoutHandler>
          <Routes>
            {/* --- ROUTES PUBLIQUES --- */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            
            {/* --- ACCÈS STAFF & ADMIN --- */}
            <Route path="/login" element={<Login />} />
            
            {/* Le Dashboard principal de l'opticien */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Gestion de l'inventaire et des tendances VTO */}
            <Route path="/admin/inventory" element={<Inventory />} />

            {/* Pages Clients (Redirigées vers Dashboard pour l'instant) */}
            <Route path="/admin/clients" element={<Dashboard />} /> 
            <Route path="/admin/bookings" element={<Dashboard />} />
            
            {/* --- ERREUR 404 STYLISÉE --- */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
                <h2 className="text-[12rem] font-black text-slate-50 absolute opacity-50 select-none">404</h2>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-black mb-4">Page Introuvable</h3>
                  <p className="text-slate-500 mb-10 max-w-sm">
                    Désolé, l'espace Esya.optic que vous recherchez n'est pas disponible.
                  </p>
                  <a 
                    href="/" 
                    className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all inline-block"
                  >
                    Retour à l'accueil
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </LayoutHandler>
      </BrowserRouter>
    </div>
  );
}

export default App;