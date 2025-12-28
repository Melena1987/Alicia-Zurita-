
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Fixed Background Layer */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 bg-azpink flex items-center justify-center">
           <div className="absolute -top-10 -left-10 text-[35vw] font-black text-white/10 leading-none select-none">
            02
          </div>
        </div>
      </div>
      
      {/* Scrollable Content Layer */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl py-32 text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              30 AÑOS EMPRENDIENDO.<br />
              DESDE <span className="text-azyellow underline decoration-4 underline-offset-8 italic">LA IDEA</span><br />
              AL MERCADO.
            </h2>
            
            <div className="max-w-2xl text-white/90 space-y-8 text-xl md:text-2xl font-light leading-relaxed">
              <p>
                He diseñado estrategias, buscado inversores, lanzado marcas y ejecutado planes de negocio en mercados internacionales.
              </p>
              <p>
                Sigo creando mis propios proyectos —porque no concibo acompañar sin estar dentro del juego.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-center md:items-end">
             <div className="h-32 w-px bg-white/30 mb-8 hidden lg:block"></div>
             <p className="text-white text-xs font-black tracking-[0.3em] uppercase vertical-text hidden lg:block">
                TRAYECTORIA & VERDAD
             </p>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-white/20">
            <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-12">
                “Creo que para guiar con verdad,<br />
                <span className="text-azyellow">hay que haber caminado el camino.</span>”
            </p>
            <a 
                href="#contacto" 
                className="inline-block text-white border-b-2 border-white pb-2 font-black text-sm tracking-[0.2em] hover:text-azyellow hover:border-azyellow transition-all uppercase"
            >
                Lee mi historia completa
            </a>
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default About;
