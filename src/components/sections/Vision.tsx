import { motion } from 'motion/react';
import { Sparkles, LayoutDashboard, BarChart3, Globe, TrendingUp, ShieldCheck, SquareActivity, Eye, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Vision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-black"
          >
            {t.vision.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 font-medium"
          >
            {t.vision.subtitle}
          </motion.p>
        </div>

        {/* Clean Grid - Matching CTA Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Structured Training (Blue Overlay) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-gray-100 text-white rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[500px] overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="assets/future1.webp" 
                alt="" 
                className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
            </div>

            <div className="relative z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
              <LayoutGrid className="w-8 h-8 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4">{t.vision.card1.title}</h3>
              <p className="text-lg text-blue-100 font-medium leading-relaxed max-w-sm">
                {t.vision.card1.desc}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Verified Performance (Gray Overlay) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-gray-100 text-white rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[500px] overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="assets/future2.webp" 
                alt="" 
                className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
            </div>

            <div className="relative z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
              <SquareActivity className="w-8 h-8 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4">{t.vision.card2.title}</h3>
              <p className="text-lg text-gray-200 font-medium leading-relaxed max-w-sm">
                {t.vision.card2.desc}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Game Insight (Dark Overlay) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-gray-900 text-white rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[600px] overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="assets/future3.webp" 
                alt="" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4">{t.vision.card3.title}</h3>
              <p className="text-lg text-gray-300 font-medium leading-relaxed max-w-sm">
                {t.vision.card3.desc}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Benchmark Your Growth (Black Overlay) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-black text-white rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[600px] shadow-xl overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="assets/future4.webp" 
                alt="" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4">{t.vision.card4.title}</h3>
              <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-sm">
                {t.vision.card4.desc}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
