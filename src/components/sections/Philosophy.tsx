import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Philosophy = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-40 bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-16 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
          >
            {t.philosophy.title}
          </motion.h2>
          
          {/* Manifesto Lines */}
          <div className="space-y-6 md:space-y-8 mb-20">
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light text-gray-400">
              {t.philosophy.line1}
            </motion.p>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-medium text-white">
              {t.philosophy.line2}
            </motion.p>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-medium text-white">
              {t.philosophy.line3}
            </motion.p>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-medium text-white">
              {t.philosophy.line4}
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"
          />

          {/* Footer Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-mono tracking-wide"
          >
            {t.philosophy.footer}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
