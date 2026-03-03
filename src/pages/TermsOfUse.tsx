import { motion } from 'motion/react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export const TermsOfUse = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0057FF]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#0057FF] text-sm font-bold tracking-[0.2em] uppercase mb-6">{t.terms.label}</p>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8">
              {t.terms.headline}<br />
              <span className="text-white/20">{t.terms.headlineFade}</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">{t.terms.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        {t.terms.sections.map((section, i) => (
          <motion.div
            key={section.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 py-16 border-b border-white/5"
          >
            <div className="lg:sticky lg:top-8 lg:self-start">
              <span className="text-[#0057FF] text-sm font-bold tracking-[0.15em] font-display block mb-3">{section.number}</span>
              <h2 className="text-xl font-display font-bold text-white leading-tight">{section.title}</h2>
            </div>
            <div className="space-y-8">
              {section.content.map((item, j) => (
                <div key={j}>
                  <h3 className="text-white font-bold font-display mb-2 text-base">{item.subtitle}</h3>
                  <p className="text-white/50 leading-relaxed text-[15px]">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </main>

      <Footer />
    </div>
  );
};