
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-visible bg-white">
      {/* Fixed Background Layer for the large "09" */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none z-0">
        <div className="fixed inset-0 flex items-start justify-end p-12">
           {/* Incrementada la opacidad de azteal/5 a azteal/10 para mejorar visibilidad */}
           <div className="text-[25vw] font-black text-azteal/10 leading-none select-none mt-[-5vw] mr-[-2vw]">
              09
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen py-32 flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* The signature cyan line from the reference */}
            <div className="w-full h-[1.5px] bg-azteal/60 mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start">
                {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="group">
                        {/* Author Header Style: ( NAME ) */}
                        <div className="mb-8 flex items-center">
                            <span className="text-[10px] md:text-[11px] font-black text-azteal tracking-[0.25em] uppercase">
                                ( {t.author.toUpperCase()} {t.company ? `/ ${t.company.toUpperCase()}` : ''} )
                            </span>
                        </div>

                        {/* Quote Style: Large, Serif, Italic, Teal */}
                        <blockquote className="relative">
                            <p className="text-2xl lg:text-3xl font-serif italic text-azteal leading-[1.4] tracking-tight">
                                “{t.quote}”
                            </p>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
