
import React from 'react';

const Collaboration: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Fixed Background Layer */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 bg-[#FAF9F6] flex items-center justify-center">
           <div className="absolute top-20 left-12 text-[15vw] font-black text-azpink/10 leading-none select-none">
            05
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen py-32 flex flex-col justify-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-end mb-20">
               <span className="text-azpink font-bold tracking-widest uppercase text-sm">Cómo podemos colaborar</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-azpink/20">
            <div className="bg-[#FAF9F6]/80 backdrop-blur-sm p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-azpink/20">
              <span className="text-sm font-bold text-azdark/60 mb-8">( Mentoría. Consultoría. Diagnóstico. Workshop )</span>
              <h3 className="text-4xl md:text-6xl font-serif italic text-azpink leading-tight">
                  Trabajo con muy pocos proyectos a la vez, dos máximo. Me involucro como si fueran míos.
              </h3>
            </div>

            <div className="bg-[#FAF9F6]/80 backdrop-blur-sm p-12 flex flex-col justify-center">
              <span className="text-sm font-bold text-azdark/60 mb-8">( Elijo cada proyecto con intención )</span>
              <div className="space-y-8">
                  <h3 className="text-4xl md:text-5xl font-serif italic text-azpink leading-tight">
                      Tiene que haber conexión, compromiso y una visión compartida.
                  </h3>
                  <p className="text-2xl text-azpink font-light italic">
                      Si vamos a construir algo juntos, que sea con ganas, con sentido... y con disfrute.
                  </p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-end">
               <a href="#" className="text-azdark border-b border-azdark pb-1 font-bold tracking-widest hover:text-azpink hover:border-azpink transition-all">
                  FORMAS DE COLABORAR
               </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
