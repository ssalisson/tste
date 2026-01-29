import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';

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
      <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl text-center animate-in fade-in zoom-in duration-300 backdrop-blur-md">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
        <h3 className="text-white font-bold text-xl mb-2">Sucesso!</h3>
        <p className="text-brand-muted text-sm">O Guia foi enviado para o seu email.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
        >
          Cadastrar outro email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${fullWidth ? 'w-full' : 'max-w-md w-full'}`}>
      <div className="flex flex-col gap-2">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-4 w-4 text-brand-muted group-focus-within:text-emerald-400 transition-colors" />
          </div>
          <input 
            type="email" 
            id="email"
            placeholder="Digite seu melhor e-mail profissional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-brand-surface border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white placeholder-brand-muted focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="group relative w-full bg-gradient-primary hover:brightness-110 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-emerald-900/20"
      >
        {loading ? (
          <span className="flex items-center gap-2">
             <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
             Processando...
          </span>
        ) : (
          <>
            <span className="relative z-10 text-base">BAIXAR GUIA COMPLETO</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </>
        )}
        {/* Shine Effect */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
      </button>
      
      <div className="flex items-center justify-center gap-3 mt-2">
        <div className="flex -space-x-2">
           {[1,2,3,4].map(i => (
             <div key={i} className="w-6 h-6 rounded-full border border-brand-bg bg-emerald-900 overflow-hidden">
               <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover opacity-80" />
             </div>
           ))}
        </div>
        <p className="text-xs text-brand-muted">
          Junte-se a <span className="text-emerald-400 font-bold">outros</span> empreendedores
        </p>
      </div>
    </form>
  );
};