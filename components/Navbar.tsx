
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, HEADER_LOGO_URL } from '../constants.tsx';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-1' : 'bg-transparent py-2 md:py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="transition-all duration-500 transform hover:scale-105">
          <img 
            src={HEADER_LOGO_URL} 
            alt="Alicia Zurita" 
            className={`transition-all duration-700 object-contain ${
                isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-14 lg:h-16'
            }`} 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-col items-end">
          <ul className="flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className={`text-[9px] font-extrabold tracking-[0.25em] transition-colors duration-300 ${
                    isScrolled ? 'text-azdark hover:text-azpink' : 'text-azdark/80 hover:text-azpink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {!isScrolled && (
            <div className="h-px w-24 bg-azpink mt-1 self-end opacity-40"></div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-azdark p-2 hover:bg-azpink/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-10 transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <button 
          className="absolute top-8 right-8 text-azdark"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={40} />
        </button>
        <img src={HEADER_LOGO_URL} alt="Logo" className="h-24 mb-12" />
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-black tracking-widest text-azdark hover:text-azpink transition-colors uppercase"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
