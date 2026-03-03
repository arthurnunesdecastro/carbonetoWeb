import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Ecosystem } from './components/sections/Ecosystem';
import { Community } from './components/sections/Community';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Philosophy } from './components/sections/Philosophy';
import { Vision } from './components/sections/Vision';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { PrivacyPolicy } from './pages/PrivacyPolice';
import { TermsOfUse } from './pages/TermsOfUse';
import { About } from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <Navbar />
    <main>
      <div id="hero"><Hero /></div>
      <div id="features"><Ecosystem /></div>
      <div id="community"><Community /></div>
      <div id="product"><ProductShowcase /></div>
      <div id="philosophy"><Philosophy /></div>
      <div id="vision"><Vision /></div>
      <div id="download"><FinalCTA /></div>
    </main>
    <Footer />
  </>
);

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </LanguageProvider>
  );
}