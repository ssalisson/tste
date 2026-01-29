import React from 'react';

export const Book3D: React.FC = () => {
  return (
    <div className="relative group perspective-[1500px] w-72 h-[28rem] md:w-[24rem] md:h-[34rem] mx-auto animate-float">
      {/* Book Container */}
      <div className="relative w-full h-full transform-style-3d transition-transform duration-500 rotate-y-[-20deg] group-hover:rotate-y-0 shadow-2xl shadow-emerald-900/40">
        
        {/* Front Cover - Green Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#064E3B] to-[#022C22] border border-emerald-500/20 rounded-r-lg flex flex-col items-center justify-between p-8 backface-hidden z-20 shadow-inner overflow-hidden">
          
          {/* Abstract Pattern on Cover */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none mix-blend-overlay">
             <svg width="100%" height="100%">
               <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>

          {/* Cover Design */}
          <div className="w-full text-center mt-10 relative z-10">
            <div className="inline-block px-3 py-1 border border-emerald-400/30 rounded text-xs text-emerald-300 font-bold uppercase tracking-[0.2em] mb-6">
              Edição Exclusiva
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-white leading-tight tracking-tight drop-shadow-lg">
              A Fórmula<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Oculta</span>
            </h1>
            <p className="text-sm text-emerald-100/60 mt-4 font-medium tracking-wide">Dos 90% de Sites que Falham</p>
          </div>

          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-900/50 relative z-10 ring-1 ring-white/10">
            <span className="font-sans text-5xl font-bold text-white">90%</span>
          </div>

          <div className="w-full relative z-10 mb-4">
            <div className="flex items-center justify-center gap-3 mb-4 opacity-50">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-[10px] text-emerald-200/50 text-center uppercase tracking-[0.3em] border-t border-white/10 pt-4">Guia de Web Design & CRO</p>
          </div>

          {/* Glossy Overlay for Realism */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rounded-r-lg pointer-events-none mix-blend-soft-light"></div>
        </div>

        {/* Spine - Fixed: Now Deep Green instead of Black to avoid "void" look */}
        <div className="absolute top-0 bottom-0 left-0 w-14 bg-[#064E3B] transform origin-left rotate-y-90 translate-x-[-1px] rounded-l-sm flex items-center justify-center overflow-hidden border-l border-white/5">
           <span className="rotate-90 text-emerald-400 font-semibold tracking-[0.3em] text-xs whitespace-nowrap uppercase opacity-60">Estratégia Digital</span>
           {/* Spine Highlight */}
           <div className="absolute top-0 bottom-0 left-2 w-1 bg-white/10 blur-[2px]"></div>
        </div>

        {/* Back Cover (Pages visual) */}
        <div className="absolute top-3 bottom-3 right-3 w-[98%] bg-[#F2F2EC] transform translate-z-[-12px] rounded-r-md shadow-lg"></div>
        <div className="absolute top-3 bottom-3 right-3 w-[96%] bg-neutral-200 transform translate-z-[-24px] rounded-r-md"></div>
        <div className="absolute top-3 bottom-3 right-3 w-[94%] bg-neutral-300 transform translate-z-[-36px] rounded-r-md shadow-xl"></div>

      </div>
      
      {/* Glowing Backdrop - Enhanced with Green */}
      <div className="absolute -bottom-12 left-10 right-10 h-16 bg-emerald-500/20 blur-[60px] rounded-[100%] z-[-1]"></div>
    </div>
  );
};