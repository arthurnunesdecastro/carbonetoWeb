import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Community = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-carbon-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              {t.community.title}
            </h2>

            <div className="space-y-8 text-lg text-blue-100 font-light">
              <p>{t.community.desc}</p>

              <ul className="space-y-4">
                {([
                  t.community.item1,
                  t.community.item2,
                  t.community.item3,
                ] as { title: string; desc: string }[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <strong className="block text-white font-bold font-display text-xl mb-1">{item.title}</strong>
                      <span className="opacity-80 text-base">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 lg:relative lg:h-[600px] lg:flex lg:items-center lg:justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent rounded-full blur-3xl hidden lg:block" />

            {/* Phone image */}
            <div className="relative z-10 transform rotate-[-6deg]">
              <img
                src="assets/perfil.webp"
                alt="Community Feed"
                className="h-[380px] md:h-[480px] lg:h-[540px] w-auto shadow-2xl mx-auto"
              />
            </div>

            {/* Cards — stacked on mobile, absolute on desktop */}
            <div className="flex flex-col gap-3 w-full lg:hidden px-2">
              {/* Coach card */}
              <div className="bg-white text-gray-900 p-3 rounded-xl shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <img src="assets/coach.webp" className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
                  <div className="font-bold font-display text-sm">{t.community.coachName}</div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">"{t.community.coachMessage}"</p>
              </div>

              {/* PR Alert card */}
              <div className="bg-gray-900 text-white p-3 rounded-xl shadow-xl border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <img src="assets/profile.webp" className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
                  <div className="font-bold font-display text-sm">{t.community.prName}</div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{t.community.prMessage}</p>
              </div>
            </div>

            {/* Cards — absolute on desktop only */}
            <div className="hidden lg:block">
              <div className="absolute -right-4 bottom-12 z-20 bg-white text-gray-900 p-4 rounded-xl shadow-xl max-w-xs transform rotate-[3deg]">
                <div className="flex items-center gap-3 mb-2">
                  <img src="assets/coach.webp" className="w-8 h-8 rounded-full object-cover" />
                  <div className="font-bold font-display">{t.community.coachName}</div>
                </div>
                <p className="text-sm text-gray-600">"{t.community.coachMessage}"</p>
              </div>

              <div className="absolute -left-8 top-24 z-0 bg-gray-900 text-white p-4 rounded-xl shadow-xl max-w-xs transform rotate-[-3deg] border border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <img src="assets/profile.webp" className="w-8 h-8 rounded-full object-cover" />
                  <div className="font-bold font-display">{t.community.prName}</div>
                </div>
                <p className="text-sm text-gray-400">{t.community.prMessage}</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};