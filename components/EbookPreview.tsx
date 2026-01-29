import React from 'react';

const PageMock: React.FC<{ title: string; subtitle: string; content: React.ReactNode; pageNum: number; rotate?: string; zIndex?: number }> = ({ 
  title, subtitle, content, pageNum, rotate = "0deg", zIndex = 10 
}) => (
  <div 
    className="absolute top-0 left-0 w-full h-full bg-white text-neutral-800 p-6 md:p-8 rounded shadow-2xl transition-transform duration-500 hover:scale-[1.02] border border-neutral-200"
    style={{ transform: `rotate(${rotate})`, zIndex }}
  >
    <div className="h-full flex flex-col relative">
      <div className="flex justify-between items-center mb-6 border-b border-neutral-100 pb-4">
        <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">Capítulo {pageNum}</span>
        <span className="text-[10px] font-mono text-neutral-300">{pageNum}/8</span>
      </div>
      
      <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2 leading-tight">{title}</h3>
      <p className="text-xs font-semibold text-emerald-600 mb-4 uppercase tracking-wide">{subtitle}</p>
      
      <div className="flex-1 overflow-hidden">
        {content}
      </div>

      <div className="mt-4 pt-4 border-t border-neutral-100 flex justify-between items-end">
        <div className="w-12 h-1 bg-neutral-100 rounded-full"></div>
        <div className="text-[8px] text-neutral-400">WebInsight Audit</div>
      </div>
    </div>
  </div>
);

export const EbookPreview: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[400px]">
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Page 3: The Solution */}
        <div className="absolute w-[280px] md:w-[320px] h-[400px] md:h-[440px] transform translate-x-24 md:translate-x-48 rotate-6 transition-all hover:translate-x-28 md:hover:translate-x-52 hover:rotate-12 hover:z-50 duration-300">
           <PageMock 
             pageNum={5} 
             zIndex={10}
             rotate="6deg"
             title="Velocidade é Lucro"
             subtitle="O impacto dos milissegundos"
             content={
               <div className="space-y-3 text-xs text-neutral-500 leading-relaxed">
                 <p>Estudos da Amazon mostram que <strong className="text-neutral-800 bg-yellow-100 px-1">100ms de atraso</strong> podem custar caro em vendas.</p>
                 <div className="p-3 bg-neutral-50 rounded border border-neutral-100 my-2">
                    <div className="flex justify-between text-[10px] mb-1">
                      <span>Carregamento</span>
                      <span className="font-bold text-red-500">4.2s (Ruim)</span>
                    </div>
                    <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-500 w-[80%] h-full"></div>
                    </div>
                 </div>
                 <p>Otimizar imagens e scripts não é técnico, é financeiro.</p>
               </div>
             }
           />
        </div>

        {/* Page 2: The Pattern */}
        <div className="absolute w-[280px] md:w-[320px] h-[400px] md:h-[440px] transform translate-x-4 md:translate-x-12 -rotate-3 transition-all hover:-translate-y-4 hover:z-50 duration-300">
           <PageMock 
             pageNum={3} 
             zIndex={20}
             rotate="-3deg"
             title="O Padrão de Fracasso #2"
             subtitle="A Confusão Cognitiva"
             content={
               <div className="space-y-3 text-xs text-neutral-500 leading-relaxed">
                 <p>Se o usuário precisa pensar para encontrar o botão, você perdeu.</p>
                 <div className="grid grid-cols-2 gap-2 my-3">
                   <div className="bg-red-50 p-2 rounded border border-red-100 text-center">
                     <span className="block text-red-500 font-bold mb-1">X</span>
                     <span className="text-[9px]">Muitas opções</span>
                   </div>
                   <div className="bg-green-50 p-2 rounded border border-green-100 text-center">
                     <span className="block text-green-600 font-bold mb-1">✓</span>
                     <span className="text-[9px]">Foco Único</span>
                   </div>
                 </div>
                 <p>Simplifique a jornada. Menos cliques = Mais vendas.</p>
               </div>
             }
           />
        </div>

        {/* Page 1: Introduction */}
        <div className="absolute w-[280px] md:w-[320px] h-[400px] md:h-[440px] transform -translate-x-16 md:-translate-x-24 rotate-[-6deg] transition-all hover:-translate-x-20 md:hover:-translate-x-28 hover:rotate-[-8deg] hover:z-50 duration-300">
           <PageMock 
             pageNum={1} 
             zIndex={30}
             rotate="-6deg"
             title="A Dor do Dinheiro Perdido"
             subtitle="Introdução"
             content={
               <div className="space-y-3 text-xs text-neutral-500 leading-relaxed">
                 <p>Você investe em tráfego. O Google Ads está rodando. O Instagram está ativo.</p>
                 <p className="font-serif italic text-neutral-800 text-lg border-l-2 border-emerald-500 pl-3 my-3">
                   "Por que as pessoas olham e vão embora?"
                 </p>
                 <p>Não é o seu produto. É a experiência invisível que está expulsando seus clientes antes do checkout.</p>
               </div>
             }
           />
        </div>

      </div>
    </div>
  );
};