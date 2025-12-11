import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const detectLanguage = () => {
      // Check browser navigator language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') {
        setLanguage('es');
      } else {
        setLanguage('en');
      }
    };

    detectLanguage();
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language]
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