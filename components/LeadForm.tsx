import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const LeadForm: React.FC<{ fullWidth?: boolean }> = ({ fullWidth = false }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-brand-mint/10 border border-brand-mint p-6 rounded-xl text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="w-12 h-12 text-brand-mint mx-auto mb-3" />
        <h3 className="text-brand-cream font-bold text-xl mb-2">Sucesso!</h3>
        <p className="text-brand-cream/80 text-sm">O Ebook foi enviado para o seu email. Verifique sua caixa de entrada.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-4 text-brand-mint hover:text-brand-mintLight text-sm underline"
        >
          Enviar para outro email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${fullWidth ? 'w-full' : 'max-w-md w-full'}`}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-brand-cream/70 text-sm ml-1">Digite seu melhor email</label>
        <div className="relative group">
          <input 
            type="email" 
            id="email"
            placeholder="voce@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-brand-dark/50 border border-brand-mint/30 rounded-lg px-4 py-4 text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-all backdrop-blur-sm"
          />
          <div className="absolute inset-0 rounded-lg bg-brand-mint/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="group relative w-full bg-brand-mint hover:bg-brand-mintLight text-brand-black font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(160,196,184,0.5)] flex items-center justify-center gap-2 overflow-hidden"
      >
        {loading ? (
          <span className="animate-pulse">Enviando...</span>
        ) : (
          <>
            <span className="relative z-10">QUERO BAIXAR GRÁTIS</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </>
        )}
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12"></div>
      </button>
      
      <p className="text-xs text-brand-cream/40 text-center flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Mais de 1.200 downloads hoje
      </p>
    </form>
  );
};