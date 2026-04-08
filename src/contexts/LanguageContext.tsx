import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../data/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    // Detect user language
    const userLang = navigator.language || navigator.languages[0];
    if (userLang.startsWith('pt')) {
      setLanguage('pt');
    } else if (userLang.startsWith('es')) {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
