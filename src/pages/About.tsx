import { motion } from 'motion/react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { CarbonetoLogo } from '../components/ui/CarbonetoLogo';
import { FinalCTA } from '../components/sections/FinalCTA';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full bg-carbon-blue text-white overflow-hidden pt-40 md:pt-60 pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-10 pointer-events-none z-0">
          <CarbonetoLogo className="w-full h-full text-white" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-blue-300 text-sm font-bold tracking-[0.2em] uppercase mb-6">{t.about.label}</p>
            <h1 className="text-[clamp(3.5rem,12vw,8rem)] font-display font-bold leading-[0.9] tracking-tight mb-8">
              {t.about.headline}<br />
              <span className="text-white/30">{t.about.headlineFade}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-light max-w-xl">
              {t.about.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16"
          >
            <div>
              <p className="text-carbon-blue text-sm font-bold tracking-[0.15em] uppercase">{t.about.mission.label}</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-8">
                {t.about.mission.title}
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                {t.about.mission.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16"
          >
            <div>
              <p className="text-carbon-blue text-sm font-bold tracking-[0.15em] uppercase">{t.about.story.label}</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                {t.about.story.title}
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-6">
                {t.about.story.desc}
              </p>
              <p className="text-xl text-white/60 leading-relaxed">
                {t.about.story.desc2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-carbon-blue text-sm font-bold tracking-[0.15em] uppercase mb-4">{t.about.values.label}</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              {t.about.values.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {t.about.values.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10"
              >
                <div className="text-carbon-blue font-display font-bold text-sm tracking-widest uppercase mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-carbon-blue text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16"
          >
            <div>
              <p className="text-blue-300 text-sm font-bold tracking-[0.15em] uppercase">{t.about.team.label}</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                {t.about.team.title}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t.about.team.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA></FinalCTA>

      <Footer />
    </div>
  );
};