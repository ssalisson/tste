import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { Book3D } from './components/Book3D';
import { LeadForm } from './components/LeadForm';
import { Check, XCircle, BarChart3, Users, Zap, Menu, X } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('download-form');
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-black font-sans selection:bg-brand-mint selection:text-brand-black overflow-x-hidden">
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-10 w-10 md:h-12 md:w-12" />
            <span className="font-serif text-brand-cream font-bold text-xl tracking-tight hidden sm:block">WebInsight</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problemas" className="text-brand-cream/70 hover:text-brand-mint transition-colors text-sm font-medium">O Problema</a>
            <a href="#conteudo" className="text-brand-cream/70 hover:text-brand-mint transition-colors text-sm font-medium">Conteúdo</a>
            <a href="#autor" className="text-brand-cream/70 hover:text-brand-mint transition-colors text-sm font-medium">Sobre</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToForm}
              className={`hidden md:flex px-6 py-2 rounded-full border border-brand-mint text-brand-mint font-medium text-sm hover:bg-brand-mint hover:text-brand-black transition-all ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              Baixar Agora
            </button>
            <button className="md:hidden text-brand-cream" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
            <a href="#problemas" onClick={() => setMobileMenuOpen(false)} className="text-brand-cream/80 hover:text-brand-mint">O Problema</a>
            <a href="#conteudo" onClick={() => setMobileMenuOpen(false)} className="text-brand-cream/80 hover:text-brand-mint">Conteúdo</a>
            <button onClick={scrollToForm} className="bg-brand-mint text-brand-black py-3 rounded-lg font-bold">Baixar Ebook</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-mint/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-mint/5 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20">
              <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse"></span>
              <span className="text-brand-mint text-xs font-bold tracking-wider uppercase">Disponível Gratuitamente</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-brand-cream leading-[1.1]">
              Por que o seu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-mintLight relative">
                site não vende?
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-mint" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7201 5.20035 81.318 2.62137 113.868 4.34632C132.922 5.35607 169.878 7.79998 198 7.99998" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span>
            </h1>
            
            <p className="text-brand-cream/70 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              Você tem tráfego, tem um produto incrível, mas o carrinho continua vazio. 
              Descubra os <strong>3 erros invisíveis</strong> de UX e Design que estão matando sua conversão.
            </p>

            <div className="pt-4" id="download-form">
              <LeadForm />
            </div>
          </div>

          <div className="relative flex justify-center mt-10 md:mt-0">
            <Book3D />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="problemas" className="py-24 bg-brand-dark border-y border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-4">Isso soa familiar?</h2>
            <p className="text-brand-cream/60 max-w-2xl mx-auto">A maioria dos empreendedores comete os mesmos erros ao criar suas páginas de vendas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users />, title: "Muitos cliques, zero vendas", desc: "As pessoas entram no site, olham por 5 segundos e saem sem comprar nada." },
              { icon: <BarChart3 />, title: "Custo de anúncio alto", desc: "Você gasta cada vez mais em tráfego pago para ter o mesmo (ou pior) resultado." },
              { icon: <XCircle />, title: "Design confuso", desc: "Seu cliente não sabe onde clicar ou não entende sua proposta de valor imediatamente." }
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-black p-8 rounded-2xl border border-white/5 hover:border-brand-mint/50 transition-all group">
                <div className="w-14 h-14 bg-brand-mint/10 rounded-full flex items-center justify-center text-brand-mint mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-brand-cream mb-3">{item.title}</h3>
                <p className="text-brand-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the Book Section */}
      <section id="conteudo" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             {/* Decor element representing pages */}
             <div className="absolute inset-0 bg-gradient-to-r from-brand-mint/20 to-transparent blur-3xl opacity-30"></div>
             <div className="space-y-6 relative z-10">
                {[
                  "A psicologia das cores que convertem (além do botão verde)",
                  "Estrutura de Landing Page: O template perfeito",
                  "Copywriting: Como escrever textos que vendem sozinhos",
                  "Velocidade: Como 1 segundo a menos dobra seu lucro",
                  "Mobile First: O erro fatal de ignorar o celular"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-mint flex items-center justify-center text-brand-black font-bold text-xs mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-brand-cream font-medium text-lg">{item}</p>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
              O que você vai <br />
              <span className="text-brand-mint">aprender</span>
            </h2>
            <p className="text-brand-cream/70 text-lg mb-8 leading-relaxed">
              Não é apenas teoria. Este ebook condensa 5 anos de experiência em otimização de conversão (CRO) em um guia prático de 40 páginas que você pode aplicar hoje mesmo.
            </p>
            
            <div className="p-6 bg-brand-dark rounded-xl border-l-4 border-brand-mint">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="text-brand-mint fill-brand-mint" size={20} />
                <span className="font-bold text-brand-cream">Bônus Exclusivo</span>
              </div>
              <p className="text-brand-cream/60 text-sm">
                Inclui checklist de auditoria para você avaliar seu próprio site em 15 minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-brand-black to-brand-dark border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
            Pare de perder dinheiro com um site que não converte.
          </h2>
          <p className="text-brand-cream/60 text-lg mb-10">
            O download é gratuito, mas o conhecimento vale milhares de reais em vendas recuperadas.
          </p>
          <div className="flex justify-center">
             <button 
               onClick={scrollToForm}
               className="bg-brand-mint hover:bg-brand-mintLight text-brand-black font-bold text-lg py-4 px-12 rounded-full shadow-[0_0_40px_-10px_rgba(160,196,184,0.4)] hover:shadow-[0_0_60px_-10px_rgba(160,196,184,0.6)] transition-all transform hover:-translate-y-1"
             >
               Baixar Ebook Agora
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-brand-black text-center md:text-left">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <Logo className="h-8 w-8" />
            <span className="font-serif text-brand-cream font-bold">WebInsight</span>
          </div>
          
          <div className="text-brand-cream/40 text-sm">
            &copy; {new Date().getFullYear()} WebInsight. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-brand-cream/40 hover:text-brand-mint text-sm transition-colors">Termos</a>
            <a href="#" className="text-brand-cream/40 hover:text-brand-mint text-sm transition-colors">Privacidade</a>
            <a href="#" className="text-brand-cream/40 hover:text-brand-mint text-sm transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}