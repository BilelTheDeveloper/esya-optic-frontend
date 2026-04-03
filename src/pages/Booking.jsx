import React, { useState } from 'react';
import config from '../config';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    { id: 'exam', name: 'Examen de vue', icon: '👁️', duration: '30 min' },
    { id: 'style', name: 'Conseil Visagisme', icon: '👓', duration: '45 min' },
    { id: 'lens', name: 'Adaptation Lentilles', icon: '💧', duration: '60 min' }
  ];

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-indigo-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            Réservation en ligne
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mt-4">Votre créneau <span className="text-blue-600">VIP</span></h1>
          <p className="text-slate-500 mt-4">Simple, rapide et sans attente en boutique.</p>
        </div>

        {/* --- PROGRESS BAR --- */}
        <div className="flex justify-center gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`h-2 w-16 rounded-full transition-all duration-500 ${step >= s ? 'bg-blue-600 w-24' : 'bg-slate-200'}`} />
          ))}
        </div>

        {/* --- CONTENT CARD --- */}
        <div className="bg-white/80 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl shadow-blue-500/5 p-8 lg:p-12">
          
          {/* ÉTAPE 1 : CHOIX DU SERVICE */}
          {step === 1 && (
            <div className="animate-fade-in space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 text-center">Quel service souhaitez-vous ?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setBookingData({...bookingData, service: s.name}); handleNext(); }}
                    className={`p-8 rounded-[2.5rem] border-2 transition-all group text-left ${bookingData.service === s.name ? 'border-blue-600 bg-blue-50/50 shadow-xl shadow-blue-100' : 'border-slate-50 bg-white hover:border-blue-200'}`}
                  >
                    <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{s.icon}</span>
                    <h4 className="font-bold text-slate-900">{s.name}</h4>
                    <p className="text-xs text-slate-400 mt-2 font-medium">{s.duration}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : DATE & HEURE */}
          {step === 2 && (
            <div className="animate-fade-in space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 text-center">Choisissez votre moment</h3>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Date du rendez-vous</label>
                  <input 
                    type="date" 
                    className="w-full p-5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold text-slate-700"
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Créneaux disponibles</label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button 
                        key={time}
                        onClick={() => setBookingData({...bookingData, time: time})}
                        className={`py-3 rounded-xl font-bold text-sm transition-all ${bookingData.time === time ? 'bg-blue-600 text-white shadow-lg' : 'bg-white border border-slate-100 text-slate-600 hover:bg-blue-50'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-8">
                <button onClick={handleBack} className="text-slate-400 font-bold hover:text-slate-900 transition-colors">Retour</button>
                <button 
                  onClick={handleNext} 
                  disabled={!bookingData.date || !bookingData.time}
                  className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-600 transition-all shadow-xl shadow-blue-100"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* ÉTAPE 3 : COORDONNÉES & CONFIRMATION */}
          {step === 3 && (
            <div className="animate-fade-in space-y-8">
              <div className="bg-blue-600/5 p-6 rounded-[2rem] border border-blue-100 mb-8">
                <h4 className="text-blue-600 font-black text-sm uppercase tracking-widest mb-4">Récapitulatif</h4>
                <p className="text-slate-800 font-bold">{bookingData.service} — <span className="text-blue-600">{bookingData.date} à {bookingData.time}</span></p>
              </div>
              
              <div className="space-y-4">
                <input 
                  type="text" placeholder="Votre nom complet" 
                  className="w-full p-5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold"
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                />
                <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="email" placeholder="Email" 
                      className="w-full p-5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold"
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    />
                    <input 
                      type="tel" placeholder="Téléphone" 
                      className="w-full p-5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold"
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    />
                </div>
              </div>

              <div className="flex justify-between pt-8">
                <button onClick={handleBack} className="text-slate-400 font-bold hover:text-slate-900 transition-colors">Retour</button>
                <button 
                  className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                  onClick={() => console.log("Final Data:", bookingData)}
                >
                  Confirmer le RDV
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;