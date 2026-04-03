/**
 * Configuration unique Esya.optic
 * Lit directement la variable d'environnement de Vite
 */

const config = {
  // On utilise la variable du .env, sinon on retombe sur le local par sécurité
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  
  APP_NAME: 'Esya.optic',
  VERSION: '1.0.0',
};

export default config;