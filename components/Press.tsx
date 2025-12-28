
import React from 'react';
import { PRESS_LOGOS } from '../constants';

const Press: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Fixed Background Layer */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 bg-azpink flex items-center justify-center">
           {/* Aumentamos tamaño y visibilidad del número 06 */}
           <div className="absolute -top-10 -left-10 text-[35vw] font-black text-white/10 leading-none select-none">
            06
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen flex items-center py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              
              {/* Left Side: Headline */}
              <div className="w-full lg:w-1/2">
                  <p className="text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-6 opacity-90">
                    SÍ, HE SALIDO EN PRENSA. SÍ, HE GANADO PREMIOS.
                  </p>
                  <h2 className="text-7xl md:text-8xl lg:text-9xl font-serif italic font-black text-azyellow leading-[0.85] tracking-tighter">
                      Y SÍ, ME<br />ENCANTA.
                  </h2>
              </div>
              
              {/* Right Side: Logos Cloud */}
              <div className="w-full lg:w-1/2 flex flex-wrap justify-center lg:justify-end content-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-10">
                  {PRESS_LOGOS.map(logo => (
                      <span 
                        key={logo} 
                        className="text-white font-extrabold text-lg md:text-2xl lg:text-3xl tracking-tight hover:text-azyellow transition-all duration-300 cursor-default uppercase"
                      >
                          {logo}
                      </span>
                  ))}
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
