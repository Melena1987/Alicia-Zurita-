
import React from 'react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Fixed Background Layer */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 bg-azteal flex items-center justify-center">
           <div className="absolute top-10 right-10 text-[20vw] font-black text-white/20 leading-none select-none">
            04
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen flex items-center py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
          {/* Visual Decoration */}
          <div className="hidden md:block w-1/2 relative h-96">
              <svg viewBox="0 0 100 50" className="absolute w-full h-full text-white/40 fill-none stroke-current stroke-[0.2] dash-array-2">
                  <path d="M0,25 C20,10 40,40 60,25 S80,10 100,25" />
              </svg>
              <div className="absolute space-y-12 top-0 left-10">
                  {PROJECTS.map((p, idx) => (
                      <div key={p} className={`text-2xl font-black text-azyellow drop-shadow-lg transform hover:scale-110 transition-transform cursor-pointer ${idx % 2 === 0 ? 'ml-10' : ''}`}>
                          {p.toLowerCase()}
                      </div>
                  ))}
              </div>
          </div>

          <div className="w-full md:w-1/2 text-white">
            <div className="border-t-2 border-azyellow mb-8 flex items-center pt-2">
              <span className="text-azyellow font-bold tracking-widest mr-4">MIS</span>
              <span className="text-azyellow font-bold tracking-widest">PROYECTOS</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              LUBETS, AUTÉNTICAS, UNTIMERS, MÓNICA FUSTÉ... <br />
              <span className="text-azyellow">Y MUCHOS MÁS.</span>
            </h2>
            
            <p className="max-w-md text-lg font-light mb-12 opacity-90">
              He construido marcas desde cero y acompañado a otras a encontrar su voz y su hueco real en el mercado global.
            </p>

            <a href="#" className="inline-block text-azyellow border-b border-azyellow pb-1 font-bold tracking-widest hover:text-white hover:border-white transition-all">
              VER MIS PROYECTOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
