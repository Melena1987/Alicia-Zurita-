
import React from 'react';

const Signals: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Fixed Background Layer */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 bg-azyellow flex items-center justify-center">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[40vw] font-black text-azpink/20 leading-none select-none">
            07
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen py-32 flex items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-lg">
              <h3 className="text-sm font-bold text-azpink uppercase tracking-widest mb-4">IDEAS QUE NO CABEN EN UN POST.</h3>
              <h2 className="text-4xl md:text-6xl font-black text-azpink leading-tight">
                  NO ES CONTENIDO.<br />
                  SON SEÑALES.
              </h2>
          </div>

          <div className="flex flex-col space-y-12">
              {['SUSCRIBIRME NEWSLETTER', 'PODCAST', 'LEER BLOG'].map(item => (
                  <a key={item} href="#" className="group flex items-center space-x-6">
                      <span className="w-12 h-px bg-azdark group-hover:w-24 group-hover:bg-azpink transition-all"></span>
                      <span className="text-xl md:text-2xl font-bold tracking-widest text-azdark group-hover:text-azpink transition-colors">{item}</span>
                  </a>
              ))}
          </div>
        </div>
        
        {/* Decorative Wave - Moved to bottom of content layer */}
        <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ed87ae" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
      </div>
    </div>
  );
};

export default Signals;
