import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Si on a un hash (ex: #about), on scroll vers l'élément
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // On attend un tout petit peu que la page soit rendue
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Si pas de hash, on remonte en haut de la page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null; // Ce composant n'affiche rien
};

export default ScrollToHash;