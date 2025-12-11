import React, { useState } from 'react';
import { Menu, X, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer space-x-2" onClick={() => scrollToSection('hero')}>
            <div className="bg-brand-primary p-1 rounded-sm">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight uppercase">OpenDND</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollToSection('work')} className="text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors">{t.nav.projects}</button>
              <button onClick={() => scrollToSection('consult')} className="text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors">{t.nav.analysis}</button>
              <button onClick={() => scrollToSection('contact')} className="bg-white text-black hover:bg-brand-primary hover:text-white px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-sm ml-4">{t.nav.contact}</button>
              
              <button 
                onClick={toggleLanguage}
                className="ml-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-sm flex items-center"
                aria-label="Toggle Language"
              >
                <Globe className="w-4 h-4" />
                <span className="ml-2 text-xs font-mono uppercase">{language}</span>
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden items-center">
            <button 
                onClick={toggleLanguage}
                className="mr-2 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-sm"
              >
                <span className="text-xs font-mono uppercase">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none rounded-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white block px-3 py-4 border-b border-slate-900 text-sm font-mono uppercase w-full text-left">{t.nav.services}</button>
            <button onClick={() => scrollToSection('work')} className="text-slate-300 hover:text-white block px-3 py-4 border-b border-slate-900 text-sm font-mono uppercase w-full text-left">{t.nav.projects}</button>
            <button onClick={() => scrollToSection('consult')} className="text-slate-300 hover:text-white block px-3 py-4 border-b border-slate-900 text-sm font-mono uppercase w-full text-left">{t.nav.analysis}</button>
            <button onClick={() => scrollToSection('contact')} className="text-brand-primary hover:text-white block px-3 py-4 text-sm font-bold uppercase w-full text-left">{t.nav.contact}</button>
          </div>
        </div>
      )}
    </nav>
  );
};