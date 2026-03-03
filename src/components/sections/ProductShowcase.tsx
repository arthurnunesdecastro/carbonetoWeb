import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export const ProductShowcase = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.product.feature1.title,
      description: t.product.feature1.desc,
      image: 'assets/training.png'
    },
    {
      title: t.product.feature2.title,
      description: t.product.feature2.desc,
      image: 'assets/stats.png'
    },
    {
      title: t.product.feature3.title,
      description: t.product.feature3.desc,
      image: 'assets/categories.png'
    },
    {
      title: t.product.feature4.title,
      description: t.product.feature4.desc,
      image: 'assets/treinogoing.png'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                {feature.title}
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {feature.description}
              </p>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative flex justify-center"
            >
              <img src={feature.image} alt={feature.title} className={`w-auto relative z-10 ${index === 0 ? 'h-[400px] md:h-[500px]' : 'h-[500px] md:h-[600px]'}`} />
              {/* Decorative background blob */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl -z-10 ${index % 2 === 0 ? 'bg-blue-50/50' : 'bg-gray-50'}`}></div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};