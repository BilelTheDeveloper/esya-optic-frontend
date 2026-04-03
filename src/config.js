/**
 * Configuration globale Esya.optic
 * Centralise l'URL de l'API pour faciliter le déploiement.
 */

const config = {
  // Détecte si l'app tourne sur localhost ou sur un domaine de production
  API_URL: window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api' // URL de ton serveur local
    : 'https://api.esyaoptic.com/api', // REMPLACE par ton futur domaine de production (ex: Vercel/Render)
    
  APP_NAME: 'Esya.optic',
  VERSION: '1.0.0',
  
  // Tu peux ajouter d'autres constantes ici (clés Stripe, Cloudinary, etc.)
};

export default config;