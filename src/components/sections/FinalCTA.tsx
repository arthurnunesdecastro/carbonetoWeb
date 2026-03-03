import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-900 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] bg-carbon-blue rounded-[3rem] overflow-hidden relative min-h-[600px] flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="flex-1 p-12 md:p-20 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
          >
            <img src="assets/logo_blue.png" alt="Carboneto Logo" className="rounded-[12px]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tight"
          >
            {t.finalCta.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 font-medium"
          >
            {t.finalCta.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {/* App Store Button */}
            <a href="#" className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-900 transition-transform hover:scale-105 active:scale-95 shadow-xl">
              <div className="w-9 flex justify-center">
                <img
                  src="/assets/apple.png"
                  alt="Apple"
                  className="h-9 w-auto"
                />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80 leading-none mb-1">{t.finalCta.downloadOn}</div>
                <div className="text-xl font-bold leading-none font-display">App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a href="#" className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-900 transition-transform hover:scale-105 active:scale-95 shadow-xl">
              <div className="w-9 flex justify-center">
                <img
                  src="/assets/play.png"
                  alt="Google Play"
                  className="h-9 w-auto"
                />
              </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-80 leading-none mb-1">{t.finalCta.getItOn}</div>
                  <div className="text-xl font-bold leading-none font-display">Google Play</div>
                </div>
            </a>
          </motion.div>
        </div>

        {/* Right Content - Scattered Phones */}
        <div className="flex-1 relative w-full h-[500px] md:h-auto overflow-hidden md:overflow-visible">
          
          {/* Phone 1 (Top Right) */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-[-10%] right-[-10%] transform rotate-[-15deg] scale-75 md:scale-90 z-10"
          >
            <img src="assets/home.png" alt="Stats" className="h-[600px] w-auto shadow-2xl" />
          </motion.div>

          {/* Phone 2 (Main Center) */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-[10%] left-[10%] md:left-[-10%] transform rotate-[10deg] scale-90 md:scale-100 z-20"
          >
            <img src="assets/first.png" alt="Workout" className="h-[600px] w-auto shadow-2xl" />
          </motion.div>

          {/* Phone 3 (Bottom Right) */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-[-20%] right-[10%] transform rotate-[-5deg] scale-75 md:scale-90 z-10"
          >
            <img src="assets/created.png" alt="Profile" className="h-[600px] w-auto shadow-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};