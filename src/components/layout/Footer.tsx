import React from 'react';
import { CarbonetoLogo } from '../ui/CarbonetoLogo';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';


export const Footer = () => {
  const { t } = useLanguage();

  const XIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const pageLinks = [
    { label: t.footer.about, href: '/about' },
    { label: t.navbar.features, href: '#features' },
    { label: t.navbar.community, href: '#community' },
    { label: t.navbar.philosophy, href: '#philosophy' },
    { label: t.navbar.vision, href: '#vision' },
  ];

  const socials = [
    { Icon: XIcon,   href: 'https://x.com/carboneto' },
    { Icon: Instagram, href: 'https://www.instagram.com/carboneto.app/' },
    { Icon: Linkedin,  href: 'https://linkedin.com/company/carboneto' },
  ];

  const infoLinks = [
    { label: t.footer.help, href: '#' },
    { label: t.footer.privacy, href: '/privacy' },  // ← changed
    { label: t.footer.terms, href: '/terms' },
    { label: t.footer.cookie, href: '#' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="max-w-sm">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 mb-6"
            >
              <div className="bg-[#0F4399] rounded-[15px]">
                <CarbonetoLogo className="w-12 h-12 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">CARBONETO</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t.footer.tagline}
            </p>
            
            {/* Socials */}
            <div className="flex gap-4 mt-8">
              {socials.map(({ Icon, href }, i) => (
                <a target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex lg:flex-1 lg:justify-end">
  
          {/* O Grid em si, agora livre do flex-1 */}
          <div className="grid grid-cols-2 gap-12 lg:gap-32 w-full lg:w-auto mt-12 lg:mt-0">
            
            {/* Coluna 1: Páginas */}
            <div>
              <h4 className="font-bold text-sm tracking-wider text-gray-500 uppercase mb-6">
                {t.footer.pages}
              </h4>
              <ul className="space-y-4">
                {pageLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors font-medium">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2: Informação */}
            <div>
              <h4 className="font-bold text-sm tracking-wider text-gray-500 uppercase mb-6">
                {t.footer.information}
              </h4>
              <ul className="space-y-4">
                {infoLinks.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('/') ? (
                      <Link to={item.href} className="text-gray-300 hover:text-white transition-colors font-medium">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors font-medium">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Carboneto Inc. {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
            <a href="#" className="hover:text-white transition-colors">{t.footer.sitemap}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
