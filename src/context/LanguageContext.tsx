import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import fr from '../data/fr.json';
import en from '../data/en.json';

// 1. On définit le type de données pour le Contexte
type Language = 'fr' | 'en';
type Translations = typeof fr; // On utilise fr comme référence pour la structure

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string; // Fonction pour récupérer un texte
}

// 2. On crée le Contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. On crée le "Fournisseur" qui va envelopper l'application
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [translations, setTranslations] = useState<Translations>(fr);

  // Quand la langue change, on met à jour les traductions
  useEffect(() => {
    setTranslations(language === 'fr' ? fr : en);
  }, [language]);

  // Fonction pour récupérer un texte (ex: t('hero.greeting'))
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value[k]) {
        value = value[k];
      } else {
        return key; // Si la clé n'existe pas, on retourne la clé elle-même
      }
    }
    
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. On crée un "Hook" personnalisé pour utiliser le Contexte facilement
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage doit être utilisé dans un LanguageProvider");
  }
  return context;
};