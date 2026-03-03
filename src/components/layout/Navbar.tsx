import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CarbonetoLogo } from '../ui/CarbonetoLogo';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Language } from '../../data/translations';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const getFlag = (lang: Language) => {
    switch (lang) {
      case 'en': return 'assets/usa.png';
      case 'pt': return 'assets/brasil.png';
      case 'es': return 'assets/spain.png';
      default: return 'assets/usa.png';
    }
  };

  const handleNavClick = (key: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${key}`);
    }
  };

  const navLinks = [
    { key: 'features', label: t.navbar.features },
    { key: 'community', label: t.navbar.community },
    { key: 'philosophy', label: t.navbar.philosophy },
    { key: 'vision', label: t.navbar.vision },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div className={`
          relative flex items-center justify-between px-6 py-3 rounded-full
          transition-all duration-300 border border-white/10
          ${isScrolled || isMobileMenuOpen
            ? 'bg-black/40 backdrop-blur-xl shadow-2xl shadow-black/20'
            : 'bg-black/20 backdrop-blur-md shadow-lg'}
        `}>

          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
              <CarbonetoLogo className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white hidden sm:block">
              CARBONETO
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            {/* Language Switcher */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors px-3 py-2 rounded-full hover:bg-white/10"
              >
                <img src={getFlag(language)} alt={language} className="w-6 h-4 rounded-[5px]" />
                <span className="uppercase">{language}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl min-w-[140px]"
                  >
                    <button onClick={() => handleLanguageChange('en')} className="w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm flex items-center gap-3">
                      <img src={getFlag('en')} alt="en" className="w-6 h-4 rounded-[5px]" /> English
                    </button>
                    <button onClick={() => handleLanguageChange('pt')} className="w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm flex items-center gap-3">
                      <img src={getFlag('pt')} alt="pt" className="w-6 h-4 rounded-[5px]" /> Português
                    </button>
                    <button onClick={() => handleLanguageChange('es')} className="w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm flex items-center gap-3">
                      <img src={getFlag('es')} alt="es" className="w-6 h-4 rounded-[5px]" /> Español
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('download')}
              className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
            >
              {t.navbar.tryFree}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 z-40 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className="text-lg font-medium text-white/90 py-3 px-4 hover:bg-white/10 rounded-xl transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />

              {/* Mobile Language Switcher */}
              <div className="flex justify-between px-4 py-2">
                <button onClick={() => handleLanguageChange('en')} className={`text-sm flex items-center gap-2 ${language === 'en' ? 'text-white font-bold' : 'text-white/60'}`}>
                  <img src={getFlag('en')} alt="en" className="w-6 h-4 rounded-[5px]" /> EN
                </button>
                <button onClick={() => handleLanguageChange('pt')} className={`text-sm flex items-center gap-2 ${language === 'pt' ? 'text-white font-bold' : 'text-white/60'}`}>
                  <img src={getFlag('pt')} alt="pt" className="w-6 h-4 rounded-[5px]" /> PT
                </button>
                <button onClick={() => handleLanguageChange('es')} className={`text-sm flex items-center gap-2 ${language === 'es' ? 'text-white font-bold' : 'text-white/60'}`}>
                  <img src={getFlag('es')} alt="es" className="w-6 h-4 rounded-[5px]" /> ES
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};