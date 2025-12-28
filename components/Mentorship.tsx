
import React from 'react';

const Mentorship: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Fixed Background Layer - Dark Theme */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 bg-azdark flex items-center justify-center">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50vw] font-black text-white/[0.03] leading-none select-none">
            08
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen py-32 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header Content */}
            <div className="mb-16">
               <h3 className="text-azteal font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6">Acompañamiento Real</h3>
               <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-4">
                MENTORÍA
               </h2>
               <p className="font-serif italic font-normal text-azpink text-4xl md:text-7xl leading-none">
                Estratégica 1 a 1.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               {/* Left Column: Text */}
               <div className="lg:col-span-7 space-y-10">
                  <div className="space-y-6">
                    <p className="text-xl md:text-3xl font-light text-white/80 leading-snug max-w-2xl">
                        No es una clase, es un proceso. Nos sentamos a mirar tu proyecto desde todos los ángulos: el financiero, el creativo, el de mercado y, sobre todo, el humano.
                    </p>
                    <p className="text-lg md:text-xl text-white/50 italic font-light border-l-2 border-azpink/30 pl-8 py-2">
                        "Tengo la capacidad de ver el 'todo' cuando tú solo ves las partes. Ordenamos el caos para que puedas avanzar con certeza."
                    </p>
                  </div>
               </div>

               {/* Right Column: Featured Card */}
               <div className="lg:col-span-5">
                  <div className="bg-white p-10 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-l-[12px] border-azteal relative overflow-hidden group">
                     {/* Decorative element inside card */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-azteal/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700"></div>
                     
                     <h4 className="text-[10px] font-black tracking-[0.3em] text-azdark/40 uppercase mb-10">Lo que trabajamos:</h4>
                     
                     <ul className="space-y-6 mb-12 relative z-10">
                        {[
                            'Estructura de modelo de negocio', 
                            'Visión y posicionamiento de marca', 
                            'Estrategia de expansión y escalado', 
                            'Acompañamiento emocional y liderazgo'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-4">
                            <span className="mt-1.5 w-2 h-2 bg-azpink rounded-full flex-shrink-0"></span>
                            <span className="text-[11px] md:text-xs font-black text-azdark tracking-widest uppercase leading-tight">{item}</span>
                          </li>
                        ))}
                     </ul>
                     
                     <div className="relative z-10">
                        <a href="#contacto" className="block w-full text-center px-8 py-5 bg-azdark text-white text-[10px] font-black tracking-[0.3em] hover:bg-azpink transition-all duration-500 uppercase shadow-lg">
                            Quiero empezar
                        </a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
