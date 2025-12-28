
import React from 'react';
import { LOGO_URL } from '../constants.tsx';

const Hero: React.FC = () => {
  const bgUrl = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766945069874_Alicia_Zurita__2_.png?alt=media&token=3c71d5fe-458b-44f8-9959-adbda85379e1";

  return (
    <div className="relative min-h-[100dvh] flex flex-col justify-end md:justify-center overflow-hidden bg-white">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-no-repeat grayscale-[10%] 
                   bg-cover bg-[position:80%_15%] 
                   md:bg-[position:right_center]
                   lg:bg-[length:85%_auto] lg:bg-[position:right_center]
                   z-0 pointer-events-none"
        style={{ 
          backgroundImage: `url('${bgUrl}')`,
        }}
      />
      
      {/* Gradient Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent 
                      md:bg-gradient-to-r md:from-white md:via-white/40 md:to-transparent
                      lg:via-white/30 z-[1] pointer-events-none" />

      {/* Scrolling Content */}
      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10 pb-12 md:pb-0 pt-24 md:pt-0">
        <div className="max-w-4xl">
          {/* Logo container */}
          <div className="animate-fade-in mb-4 md:mb-8 lg:mb-6">
            <img 
              src={LOGO_URL} 
              alt="Alicia Zurita" 
              className="w-auto h-32 sm:h-40 md:h-64 lg:h-[30rem] object-contain"
            />
          </div>
          
          <div className="mt-2 md:mt-4 lg:mt-6 max-w-xl">
            <div className="font-serif italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-azdark/70 leading-tight border-l-4 border-azpink pl-6 space-y-1">
              <p>Diseño. Acompaño. Me involucro.</p>
              <p>Soy tú y tu proyecto.</p>
              <p className="text-azdark/90 font-bold not-italic pt-2">Construimos lo que ya está en ti</p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-10 lg:mt-14 flex flex-col sm:flex-row gap-4 md:gap-4 lg:gap-6">
            <a 
              href="#sobre-mi" 
              className="inline-block px-8 md:px-8 lg:px-10 py-4 md:py-4 lg:py-5 bg-azpink text-white text-[10px] md:text-[11px] lg:text-xs font-black tracking-widest hover:bg-azdark transition-all duration-500 text-center uppercase shadow-lg shadow-azpink/20"
            >
              Descubrir más
            </a>
            <a 
              href="#contacto" 
              className="inline-block px-8 md:px-8 lg:px-10 py-4 md:py-4 lg:py-5 border-2 border-azdark text-azdark text-[10px] md:text-[11px] lg:text-xs font-black tracking-widest hover:bg-azdark hover:text-white transition-all duration-500 text-center uppercase"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
