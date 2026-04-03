import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-blue-50 to-indigo-50 text-slate-900 selection:bg-blue-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        {/* Cercles décoratifs Elite (Soft Glow) */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/60 backdrop-blur-md border border-blue-200 text-blue-700 text-sm font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Nouveau : Prise de RDV en ligne
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Une vision claire, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">un style unique.</span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-lg">
              Esya.optic simplifie votre parcours de soin visuel. Prenez rendez-vous avec nos experts opticiens et découvrez une collection exclusive de montures.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* UPDATE : Lien vers la page de réservation */}
              <Link 
                to="/booking" 
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95 text-center"
              >
                Prendre rendez-vous
              </Link>
              <button className="bg-white/80 backdrop-blur-md text-slate-700 border border-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white shadow-sm transition-all text-center">
                Voir la collection
              </button>
            </div>
          </div>
          
          {/* Image Hero avec effet Glass */}
          <div className="relative">
            <div className="absolute -inset-4 bg-white/30 backdrop-blur-sm rounded-[2.5rem] -z-10 border border-white/50"></div>
            <img 
              src="hero.jpg" 
              alt="Examen de vue" 
              className="relative z-10 rounded-3xl shadow-2xl object-cover h-[550px] w-full border-4 border-white"
            />
            {/* Petit badge flottant Elite */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 z-20 hidden md:block">
              <p className="text-blue-600 font-black text-2xl">100%</p>
              <p className="text-[10px] uppercase font-bold text-slate-400">Expertise Digitale</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Nos Services Experts</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-6 text-lg">Le savoir-faire traditionnel allié à l'innovation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Examen de vue",
              desc: "Technologie de pointe pour une précision visuelle absolue.",
              icon: "👁️",
              img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Style & Montures",
              desc: "Plus de 500 modèles de designers sélectionnés pour vous.",
              icon: "👓",
              img: "StyleMontures.jpg"
            },
            {
              title: "Lentilles de contact",
              desc: "Adaptation et conseils pour un confort quotidien optimal.",
              icon: "💧",
              img: "Lentillesde contact.jpg"
            }
          ].map((service, index) => (
            <div key={index} className="group bg-white/60 backdrop-blur-md rounded-[2rem] overflow-hidden border border-white shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-3xl mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-2xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-24 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3.5rem] p-8 lg:p-20 shadow-2xl shadow-blue-300 relative overflow-hidden">
          {/* Cercles de lumière internes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="relative">
                <img 
                src="whyesya.jpg" 
                className="rounded-[2.5rem] shadow-2xl border-4 border-white/20" 
                alt="Équipe opticienne" 
                />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">Pourquoi choisir <br/> Esya.optic ?</h2>
              <div className="mt-12 space-y-6">
                {[
                  { t: "Expertise Médicale", d: "Nos opticiens sont diplômés et formés aux dernières technologies." },
                  { t: "Tiers Payant", d: "Nous gérons directement avec votre mutuelle pour vous éviter l'avance de frais." },
                  { t: "Garantie Adaptation", d: "Satisfait ou échangé : vous avez 30 jours pour tester vos nouveaux verres." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all">
                    <div className="bg-white h-10 w-10 rounded-xl flex items-center justify-center text-blue-600 shadow-lg shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">{item.t}</h4>
                      <p className="text-blue-100 mt-1 opacity-80">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;