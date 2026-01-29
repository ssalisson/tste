import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { Book3D } from './components/Book3D';
import { LeadForm } from './components/LeadForm';
import { EbookPreview } from './components/EbookPreview';
import { Check, XCircle, BarChart3, Users, Zap, Menu, X, ArrowRight, MousePointer2, Smartphone, Timer, ChevronRight, Instagram, CheckCircle2, Layout, Target, ShieldBan, Briefcase, Map, Rocket } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden bg-brand-bg text-neutral-200">
      
      {/* Global Noise Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 md:h-10 md:w-10" />
            <span className="font-sans font-bold text-white text-lg tracking-tight hidden sm:block">WebInsight</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <a href="#degustacao" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Conteúdo</a>
            <a href="#aprender" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">O Método</a>
            <a href="#autor" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Sobre</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToForm}
              className={`hidden md:flex px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              Baixar Grátis
            </button>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-brand-bg border-b border-white/10 p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5 shadow-2xl z-50">
            <a href="#degustacao" onClick={() => setMobileMenuOpen(false)} className="text-neutral-300 py-2 border-b border-white/5">Conteúdo</a>
            <a href="#aprender" onClick={() => setMobileMenuOpen(false)} className="text-neutral-300 py-2 border-b border-white/5">O Método</a>
            <button onClick={scrollToForm} className="bg-brand-primary text-white py-4 rounded-xl font-bold w-full shadow-lg shadow-emerald-900/20">Baixar Agora</button>
          </div>
        )}
      </header>

      {/* Hero Section - Padding adjusted to pull content up further (pt-20 mobile) */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 overflow-hidden bg-hero-glow">
        {/* Decorative ambient light - Green Tint */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-20 items-center relative z-10">
          
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 relative z-20 text-center lg:text-left">
            
            {/* Tags Container */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase">Ebook Gratuito</span>
              </div>
              
              {/* Anti-Guru Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldBan size={12} className="text-neutral-400" />
                <span className="text-neutral-300 text-xs font-semibold tracking-wide uppercase">Zero Venda de Curso</span>
              </div>
            </div>
            
            {/* Title - Compact sizing */}
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-sans font-bold text-white leading-[1.05] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
              A Fórmula Oculta dos <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary relative">
                90% de Sites
                {/* Underline decorative */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-600 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7201 5.20035 81.318 2.62137 113.868 4.34632C132.922 5.35607 169.878 7.79998 198 7.99998" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span> que Falham
            </h1>
            
            {/* Subtitle */}
            <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700">
              Não somos gurus. Somos uma agência aplicando isso diariamente. Descubra os <strong>3 erros invisíveis</strong> de UX que derrubam conversões e como corrigi-los de graça.
            </p>

            <div className="pt-4 max-w-md mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-10 duration-700" id="download-form">
              <LeadForm />
              <p className="mt-4 text-xs text-neutral-500 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                <Briefcase className="w-3 h-3 text-brand-primary" /> Conteúdo 100% técnico e aplicável. Sem pegadinhas.
              </p>
            </div>
          </div>

          {/* Book */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0 animate-in fade-in zoom-in duration-1000 delay-500">
            <Book3D />
          </div>
        </div>
      </section>

      {/* Degustação Content Section */}
      <section id="degustacao" className="py-24 relative overflow-hidden border-y border-white/5 bg-[#080d0a]">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
               <span className="inline-block py-1 px-3 rounded bg-white/5 border border-white/10 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Preview Exclusivo</span>
               <h2 className="text-3xl md:text-5xl font-bold text-white font-sans">O que tem dentro do arquivo?</h2>
            </div>
            
            <div className="mb-16">
               <EbookPreview />
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                 <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                 <p className="text-neutral-300 text-sm">
                   Material direto ao ponto. Feito para quem não tem tempo a perder.
                 </p>
              </div>
            </div>
         </div>
      </section>

      {/* "What you will learn" - Bento Grid */}
      <section id="aprender" className="py-24 bg-brand-bg relative">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-2xl">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Conhecimento de Campo</h2>
               <p className="text-neutral-400 text-lg leading-relaxed">
                 Identifiquei padrões repetitivos em mais de <span className="text-white font-semibold">200 auditorias de sites</span> reais. 
                 Não é teoria de palco, é o que funciona na prática.
               </p>
             </div>
             <a href="#download-form" className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:text-white transition-colors group px-4 py-2 rounded-lg hover:bg-white/5">
               Baixar Ebook Completo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>

          {/* Asymmetric "Bento" Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature Card - Spans 2 cols */}
            <div className="lg:col-span-2 glass-card p-8 md:p-10 rounded-3xl hover:bg-white/[0.07] transition-all group duration-300 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    <MousePointer2 size={120} className="text-emerald-400" />
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MousePointer2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Confusão Cognitiva: O Assassino de Vendas</h3>
                <p className="text-neutral-400 leading-relaxed max-w-lg">
                  Quando você oferece muitas opções, o cérebro do cliente paralisa. Aprenda a Lei de Hick e como simplificar a jornada do usuário para aumentar a conversão apenas removendo elementos.
                </p>
            </div>

            {/* Anti-Guru Card */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/[0.07] transition-all group duration-300 border border-white/10 hover:-translate-y-1 bg-white/[0.02]">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-neutral-700/30 border border-neutral-600/30 text-neutral-200">
                  <ShieldBan size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Não vendemos cursos</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Somos uma agência. Ganhamos dinheiro gerando resultados para clientes, não vendendo aulas. Este material é nosso cartão de visita, não uma isca para upsell.
                </p>
            </div>

            {/* Standard Card */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/[0.07] transition-all group duration-300 border border-white/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Timer size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">A Regra dos 3s</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Velocidade não é luxo. 1 segundo a mais no load pode custar caro para o seu faturamento.</p>
            </div>

            {/* Feature Card Horizontal */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/[0.07] transition-all group duration-300 border border-white/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-lime-500/10 border border-lime-500/20 text-lime-400">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Copywriting Vazio</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Pare de usar "inovação" e "qualidade". Aprenda a escrever promessas que tocam na ferida do cliente.</p>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#10B981] to-[#047857] p-8 rounded-3xl flex flex-col justify-between items-start text-left shadow-2xl shadow-emerald-900/40 relative overflow-hidden group">
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div>
                  <Target className="text-white/80 mb-6" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Checklist de Auditoria</h3>
                  <p className="text-white/80 text-sm mb-6">Incluso no material: avalie seu site em 15 minutos.</p>
               </div>
               <button onClick={scrollToForm} className="bg-white text-emerald-800 px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all w-full flex justify-between items-center">
                 Ler Agora <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pathway Section - Redesigned */}
      <section className="py-24 bg-brand-bg relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Caminho Mais Rápido</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A diferença entre quem estuda e quem escala. Como você prefere evoluir seu negócio hoje?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 relative">
            
            {/* Divider Desktop */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand-bg border border-white/10 rounded-full w-12 h-12 items-center justify-center text-xs font-bold text-neutral-500 shadow-xl">
              OU
            </div>

            {/* Option 1: The Map (Ebook) */}
            <div className="group relative bg-brand-surface rounded-3xl p-8 lg:p-12 border border-white/5 hover:border-white/10 transition-all flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white transition-colors">
                  <Map size={32} />
               </div>
               <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-6">Autodidata</div>
               <h3 className="text-2xl font-bold text-white mb-4">O Mapa do Tesouro</h3>
               <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
                 Você baixa o guia validado com nossos clientes, estuda o material e aplica as correções com sua própria equipe. Ideal para quem tem tempo e time técnico.
               </p>
               <div className="mt-auto w-full">
                 <button onClick={scrollToForm} className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 text-white font-semibold transition-all flex items-center justify-center gap-2">
                   Baixar Guia Gratuito
                 </button>
               </div>
            </div>

            {/* Option 2: The Pilot (Agency) */}
            <div className="group relative bg-gradient-to-b from-[#064E3B] to-[#022C22] rounded-3xl p-8 lg:p-12 border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col items-center text-center shadow-2xl shadow-emerald-900/20">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none rounded-3xl"></div>
               
               <div className="w-16 h-16 bg-emerald-500 text-emerald-950 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <Rocket size={32} />
               </div>
               <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-emerald-300 mb-6">Aceleração</div>
               <h3 className="text-2xl font-bold text-white mb-4">A Execução Especializada</h3>
               <p className="text-emerald-100/70 text-sm leading-relaxed mb-8 max-w-sm">
                 Nós auditamos, planejamos e implementamos as melhorias para você. Sem curva de aprendizado. Resultados aplicados por especialistas de campo.
               </p>
               <div className="mt-auto w-full">
                 <button className="w-full py-4 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                   Agendar Consultoria 
                   <ArrowRight size={16} />
                 </button>
               </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-brand-bg relative overflow-hidden">
        {/* Decorative background glow for footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
          
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 opacity-90">
            <Logo className="h-8 w-8" />
            <span className="font-bold text-white text-xl tracking-tight">WebInsight</span>
          </div>

          {/* Social Prominent */}
          <div className="mb-10">
             <a 
               href="https://instagram.com/webdesenrola" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
             >
                <div className="p-1 bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] rounded-md text-white group-hover:scale-110 transition-transform duration-300">
                   <Instagram size={16} fill="white" className="text-white" />
                </div>
                <span className="text-neutral-300 font-medium group-hover:text-white">Siga a @webdesenrola</span>
             </a>
          </div>
          
          {/* Copyright & Company Link */}
          <div className="flex flex-col items-center gap-4 text-sm text-neutral-500 mb-8">
            <p>
              &copy; {new Date().getFullYear()} WebInsight. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Uma iniciativa <a href="https://webdesenrola.com.br" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-bold hover:text-emerald-400 hover:underline transition-colors flex items-center gap-1">
                 WebDesenrola <ArrowRight size={12} className="-rotate-45" />
              </a>
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex gap-8">
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-xs transition-colors">Termos de Uso</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-xs transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}