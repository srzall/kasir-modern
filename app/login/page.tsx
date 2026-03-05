'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/gudang');
    } else {
      alert('Password Salah!');
    }
  };

  return (
    // Container utama: Full screen, background gelap
    <div className="min-h-screen w-full flex items-center justify-center bg-[#022C22] p-6">
      
      {/* Background Decor (Grid tipis agar tidak polos) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* CARD LOGIN: max-w-[360px] inilah yang mengunci lebar agar tidak melar */}
      <div className="relative z-10 w-full max-w-[360px] bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        
        {/* HEADER AREA */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/20">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase italic">
            MITRA<span className="text-emerald-600">USAHA</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
            Administrator Portal
          </p>
        </div>

        {/* FORM AREA */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-900" 
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-900" 
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-900/30 active:scale-95 uppercase text-[11px] tracking-widest mt-4"
          >
            Masuk Sekarang
          </button>
        </form>

        {/* BACK BUTTON */}
        <div className="mt-10 text-center">
          <button 
            onClick={() => router.push('/')} 
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-emerald-600 text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> 
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}