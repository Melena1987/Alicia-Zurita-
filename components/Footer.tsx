
import React from 'react';
import { HEADER_LOGO_URL } from '../constants';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-azdark text-white pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-8">
            <img 
              src={HEADER_LOGO_URL} 
              alt="Alicia Zurita" 
              className="h-12 w-auto object-contain brightness-0 invert opacity-90" 
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Estrategia con alma para proyectos que buscan dejar huella. Más de 30 años transformando ideas en marcas potentes.
            </p>
            <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/alicia-zurita-negro-64445779/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-azpink transition-all transform hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/azuritanp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-azpink transition-all transform hover:-translate-y-1"
                >
                  <Instagram size={24} />
                </a>
            </div>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-azteal font-bold uppercase tracking-[0.2em] text-[10px]">Contacto</h4>
            <div className="space-y-4">
              <a href="tel:+34624686435" className="block text-xl md:text-2xl font-light hover:text-azpink transition-colors">
                +34 624 686 435
              </a>
              <a href="mailto:hola@aliciazurita.com" className="block text-lg md:text-xl font-light text-white/70 hover:text-azpink transition-colors underline decoration-azpink/30 underline-offset-4">
                hola@aliciazurita.com
              </a>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-azteal font-bold uppercase tracking-[0.2em] text-[10px]">Despertar Estratégico</h4>
            <p className="text-sm text-white/60">Únete a la comunidad y recibe señales sobre emprendimiento y estrategia.</p>
             <div className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-md border border-white/10">
                <input 
                    type="email" 
                    placeholder="Tu email" 
                    className="flex-grow bg-white/5 px-6 py-4 text-white focus:outline-none focus:bg-white/10 transition-all text-sm"
                />
                <button className="bg-azpink hover:bg-white hover:text-azpink text-white px-8 py-4 font-black tracking-[0.2em] transition-all text-[10px] uppercase">
                    Suscribirme
                </button>
             </div>
             <p className="text-[9px] text-white/20 uppercase tracking-[0.1em]">
                Al suscribirte aceptas nuestra política de privacidad.
             </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[9px] font-black tracking-[0.3em] text-white/30 uppercase">
                <a href="#hero" className="hover:text-azpink transition-colors">Inicio</a>
                <a href="#sobre-mi" className="hover:text-azpink transition-colors">Sobre mi</a>
                <a href="#servicios" className="hover:text-azpink transition-colors">Servicios</a>
                <a href="#proyectos" className="hover:text-azpink transition-colors">Proyectos</a>
                <a href="#" className="hover:text-azpink transition-colors">Aviso Legal</a>
            </div>
            
            <p className="text-[9px] text-white/20 tracking-[0.4em] font-bold uppercase text-center md:text-right">
                © {new Date().getFullYear()} ALICIA ZURITA. ESTRATEGIA CON ALMA.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
