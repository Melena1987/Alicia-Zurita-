
import React from 'react';

const StrategicAwakening: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Fixed Background Layer */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 bg-azyellow flex items-center justify-center">
           <div className="absolute top-10 left-10 text-[20vw] font-black text-azpink/20 leading-none select-none">
            03
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-12">
        <div className="max-w-5xl w-full text-center md:text-left">
          <div className="flex justify-between items-start mb-12 border-t-2 border-azpink pt-4">
              <span className="text-azpink font-bold tracking-widest">DESPERTAR</span>
              <span className="text-azpink font-bold tracking-widest">ESTRATÉGICO</span>
          </div>
          
          <h3 className="text-5xl md:text-8xl font-light text-azpink leading-[0.9] mb-12">
            “NO FABRICO MARCAS NI PROYECTOS. <span className="font-serif italic font-normal">LOS DESPIERTO.</span>”
          </h3>

          <div className="flex flex-col md:flex-row justify-end items-end gap-12">
            <div className="max-w-sm text-right">
              <p className="text-azdark font-bold tracking-tighter text-sm uppercase">
                UNA ESTRATEGIA VIVA,<br />
                CON ALMA Y DIRECCIÓN.<br />
                UN MAPA QUE NACE DE TI.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <a href="#servicios" className="inline-block px-8 py-4 bg-azpink text-white font-bold tracking-widest hover:bg-azdark transition-colors">
              MIS SERVICIOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicAwakening;
