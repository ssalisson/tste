import React from 'react';

export const Book3D: React.FC = () => {
  return (
    <div className="relative group perspective-[1000px] w-64 h-96 mx-auto animate-float">
      {/* Book Container */}
      <div className="relative w-full h-full transform-style-3d transition-transform duration-500 rotate-y-[-15deg] group-hover:rotate-y-0 shadow-2xl shadow-brand-mint/20">
        
        {/* Front Cover */}
        <div className="absolute inset-0 bg-brand-dark border border-brand-mint/30 rounded-r-lg flex flex-col items-center justify-between p-6 backface-hidden z-20 shadow-inner">
          {/* Cover Design */}
          <div className="w-full text-center mt-4">
            <div className="text-brand-mint text-xs tracking-[0.3em] font-bold mb-2 uppercase">Ebook Gratuito</div>
            <h1 className="text-3xl font-serif font-bold text-brand-cream leading-tight">
              Por que<br />
              <span className="text-brand-mint">Seu Site</span><br />
              Não Vende
            </h1>
          </div>

          <div className="w-16 h-16 rounded-full border-2 border-brand-mint/50 flex items-center justify-center">
            <span className="font-serif text-2xl italic text-brand-cream">W</span>
          </div>

          <div className="w-full">
            <div className="h-0.5 w-full bg-brand-mint/20 mb-2"></div>
            <p className="text-[10px] text-brand-cream/60 text-center uppercase tracking-widest">O Guia Definitivo de Otimização</p>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-r-lg pointer-events-none"></div>
        </div>

        {/* Spine */}
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-brand-mintDark transform origin-left rotate-y-90 translate-x-[-1px] rounded-l-sm flex items-center justify-center overflow-hidden">
           <span className="rotate-90 text-brand-black font-bold tracking-widest text-xs whitespace-nowrap">GUIA DE VENDAS ONLINE</span>
        </div>

        {/* Back Cover (Pages visual) */}
        <div className="absolute top-2 bottom-2 right-2 w-[98%] bg-white transform translate-z-[-10px] rounded-r-md shadow-lg"></div>
        <div className="absolute top-2 bottom-2 right-2 w-[96%] bg-gray-100 transform translate-z-[-20px] rounded-r-md"></div>
        <div className="absolute top-2 bottom-2 right-2 w-[94%] bg-gray-200 transform translate-z-[-30px] rounded-r-md"></div>

      </div>
      
      {/* Glowing Backdrop */}
      <div className="absolute -inset-10 bg-brand-mint/20 blur-3xl rounded-full z-[-1] animate-glow"></div>
    </div>
  );
};