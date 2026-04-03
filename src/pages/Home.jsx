import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-blue-50 to-indigo-50 text-slate-900 selection:bg-blue-200 ">
      
<section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
  
  {/* --- BACKGROUND IMAGE LAYER --- */}
  <div className="absolute inset-0 z-0">
    <img 
      src="hero.jpg" 
      alt="Arrière-plan Esya" 
      className="w-full h-full object-cover scale-105 animate-slow-zoom"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-blue-50/20"></div>
  </div>

  {/* --- DECORATIVE ELEMENTS --- */}
  <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] z-10"></div>

  <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
    {/* Changement de la grille pour élargir le bloc : col-span-8 pour le texte */}
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      
      {/* --- CONTENT BLOCK (WIDER) --- */}
      <div className="lg:col-span-8 bg-white/30 backdrop-blur-md border border-white/40 p-8 lg:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/5">
        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest mb-8 shadow-lg shadow-blue-200">
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          Prise de RDV en ligne
        </span>
        
        <h1 className="text-5xl lg:text-[100px] font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
          LA CLARTÉ <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            DEVIENT ART.
          </span>
        </h1>
        
        <p className="text-slate-700 text-xl leading-relaxed mb-10 font-medium max-w-2xl">
          Esya.optic redéfinit votre vision. Profitez d'un examen de vue haute précision et d'une collection de montures sélectionnées par nos experts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <button className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10">Prendre rendez-vous</span>
          </button>
          
          <button className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all shadow-sm">
            Voir la collection
          </button>
        </div>
      </div>

      {/* --- FLOATING ELITE CARD (Adjusted to col-span-4) --- */}
      <div className="hidden lg:flex lg:col-span-4 flex-col gap-6 justify-center items-end">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-2xl w-64 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
          <p className="text-blue-600 font-black text-4xl mb-1">ZEISS</p>
          <p className="text-[10px] uppercase font-black text-slate-400 tracking-tighter">Partenaire Officiel</p>
        </div>
        
        <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl w-64 transform rotate-3 hover:rotate-0 transition-transform duration-500 translate-x-12">
          <p className="text-white font-black text-4xl mb-1">24H</p>
          <p className="text-[10px] uppercase font-black text-blue-100 tracking-tighter">Service de Montage</p>
        </div>
      </div>

    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
</section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Nos Services Experts</h2>
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
                <h3 className="text-xl font-bold text-slate-900 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">{service.title}</h3>
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