import React, { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    {
      id: "01",
      title: "Examen de Vue Précision",
      category: "Médical",
      desc: "Analyse complète de votre acuité visuelle avec les dernières technologies de réfraction numérique.",
      fullContent: "Notre examen de vue utilise la technologie de front d'onde pour cartographier votre œil avec une précision inégalée. Nous ne nous contentons pas de mesurer votre correction, nous analysons la santé globale de votre rétine et votre confort binoculaire. Idéal pour ceux qui passent beaucoup de temps sur écran.",
      details: ["Bilan de vue", "Dépistage", "Adaptation verres progressifs"],
      icon: "🔬",
      img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Conseil en Visagisme",
      category: "Style",
      desc: "Trouvez la monture qui sublime votre visage. Nos experts analysent vos traits pour vous proposer une sélection personnalisée.",
      fullContent: "Le choix d'une monture est une science autant qu'un art. Nous étudions la ligne de vos sourcils, la structure de vos pommettes et votre teint pour sélectionner des modèles qui affirment votre personnalité. Accès exclusif à nos collections capsules de créateurs indépendants.",
      details: ["Analyse morphologique", "Colorimétrie", "Ajustement sur mesure"],
      icon: "🕶️",
      img: "ConseilenVisagisme.png"
    },
    {
      id: "03",
      title: "Contactologie",
      category: "Innovation",
      desc: "Spécialistes de l'adaptation en lentilles de contact, même pour les cas complexes.",
      fullContent: "Que vous soyez astigmate, presbyte ou que vous souffriez de sécheresse oculaire, nous trouvons la lentille parfaite. Nous proposons des essais gratuits sur une large gamme de lentilles journalières ou mensuelles, avec un apprentissage complet pour la manipulation en toute sécurité.",
      details: ["Essais gratuits", "Apprentissage manipulation", "Suivi semestriel"],
      icon: "💧",
      img: "Contactologie.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-32 pb-20">
      
      {/* --- HEADER DE LA PAGE --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expertise Esya.optic</span>
        <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mt-4 leading-tight">
          Des soins visuels <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">de haute précision.</span>
        </h1>
        <p className="mt-6 text-xl text-slate-500 max-w-2xl leading-relaxed">
          Nous combinons l'art de l'optique traditionnelle avec les innovations technologiques les plus avancées pour protéger votre regard.
        </p>
      </div>

      {/* --- GRILLE DE SERVICES ELITE --- */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {servicesList.map((service, index) => (
          <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Côté Image avec décor */}
            <div className="flex-1 relative w-full group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-[3rem] -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 border border-blue-50">
                <span className="text-2xl">{service.icon}</span>
                <span className="font-bold text-sm text-slate-800 uppercase tracking-tighter">{service.category}</span>
              </div>
            </div>

            {/* Côté Texte */}
            <div className="flex-1 space-y-6">
              <span className="text-6xl font-black text-slate-100 tracking-tighter">{service.id}</span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">{service.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-100 pl-6">
                "{service.desc}"
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <button 
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all group"
                >
                  En savoir plus sur ce service
                  <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- MODAL POP-UP (ELITE VERSION) --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Overlay sombre flouté */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedService(null)}
          ></div>
          
          {/* Contenu du Modal */}
          <div className="relative bg-white rounded-[3rem] shadow-2xl max-w-2xl w-full overflow-hidden animate-scale-up border border-white">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all z-20"
            >
              ✕
            </button>
            
            <div className="relative h-64 overflow-hidden">
                <img src={selectedService.img} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>

            <div className="p-10 -mt-20 relative z-10">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-blue-200 mb-6">
                {selectedService.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">{selectedService.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {selectedService.fullContent}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Prendre RDV pour ce service
                </button>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-8 py-4 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl transition-all"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SECTION GARANTIE (CTA) --- */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Prêt pour une expérience visuelle d'exception ?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Réservez votre créneau en ligne gratuitement et profitez d'un accueil VIP dans notre atelier.
            </p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active:scale-95">
              Planifier mon rendez-vous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;