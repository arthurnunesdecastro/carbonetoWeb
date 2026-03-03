import { motion } from 'motion/react';
import { Layers, ActivitySquare, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Ecosystem = () => {
  const { t } = useLanguage();

  const ecosystemItems = [
    {
      icon: Layers,
      title: t.ecosystem.train.title,
      description: t.ecosystem.train.desc
    },
    {
      icon: ActivitySquare,
      title: t.ecosystem.track.title,
      description: t.ecosystem.track.desc
    },
    {
      icon: TrendingUp,
      title: t.ecosystem.progress.title,
      description: t.ecosystem.progress.desc
    },
    {
      icon: Award,
      title: t.ecosystem.compete.title,
      description: t.ecosystem.compete.desc
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {t.ecosystem.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.ecosystem.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-50 text-carbon-blue rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
