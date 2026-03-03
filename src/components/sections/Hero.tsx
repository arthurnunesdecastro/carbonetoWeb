import { motion } from 'motion/react';
import { CarbonetoLogo } from '../ui/CarbonetoLogo';
import { useLanguage } from '../../contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-carbon-blue text-white overflow-hidden pt-38 md:pt-60 pb-0">
      
      {/* Background Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] opacity-10 md:opacity-20 pointer-events-none z-0">
        <CarbonetoLogo className="w-full h-full text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3.5rem,15vw,9rem)] font-display font-bold tracking-tight leading-[0.9] pb-5 mb-5"
        >
          {t.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-xl text-blue-100 max-w-xl mb-8 font-light leading-relaxed px-2"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div  
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row gap-3 mb-10"
        >
          {/* App Store */}
          <a href="#" className="bg-carbon-black text-white px-4 py-2.5 rounded-full flex items-center gap-2.5 hover:bg-gray-900 transition-transform hover:scale-105 active:scale-95 shadow-xl">
            <img src="/assets/apple.png" alt="Apple" className="h-7 w-auto" />
            <div className="text-left">
              <div className="text-[9px] uppercase font-bold tracking-wider opacity-80 leading-none mb-0.5">{t.finalCta.downloadOn}</div>
              <div className="text-[14px] font-semibold leading-none font-display">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a href="#" className="bg-carbon-black text-white px-4 py-2.5 rounded-full flex items-center gap-2.5 hover:bg-gray-900 transition-transform hover:scale-105 active:scale-95 shadow-xl">
            <img src="/assets/play.png" alt="Google Play" className="h-7 w-auto" />
            <div className="text-left">
              <div className="text-[9px] uppercase font-bold tracking-wider opacity-80 leading-none mb-0.5">{t.finalCta.getItOn}</div>
              <div className="text-[14px] font-semibold leading-none font-display">Google Play</div>
            </div>
          </a>
        </motion.div>

        {/* Credibility Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-16 mb-12 text-[10px] md:text-sm font-medium tracking-wider uppercase text-blue-200/80"
        >
          {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full"></span>
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Mockups */}
        <div className="relative w-full max-w-5xl h-[260px] md:h-[600px] flex justify-center items-start overflow-visible">

          {/* Left Phone */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 -translate-x-[115%] top-4 md:top-12 opacity-75 z-0"
          >
            <img src="assets/perfil.png" alt="My Program" className="h-[220px] md:h-[600px] w-auto" />
          </motion.div>

          {/* Center Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 z-10"
          >
            <img 
              src="assets/home.png" 
              alt="Active Session" 
              className="h-[260px] md:h-[600px] w-auto shadow-2xl shadow-black/50" 
            />
          </motion.div>

          {/* Right Phone */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 translate-x-[15%] top-4 md:top-12 opacity-75 z-0"
          >
            <img src="assets/categories.png" alt="Performance" className="h-[220px] md:h-[600px] w-auto" />
          </motion.div>

        </div>
      </div>
      
      {/* Gradient Fade to White */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-20"></div>
    </section>
  );
};