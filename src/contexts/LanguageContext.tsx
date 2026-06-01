import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language, TranslationsType } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  currentLang: Language;
  t: TranslationsType;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('es');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = translations[currentLang];

  return (
    <LanguageContext.Provider value={{ currentLang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};