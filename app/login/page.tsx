'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ShieldCheck, ArrowLeft, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State untuk efek loading
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi loading sebentar biar keren
    setTimeout(() => {
      if (password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        router.push('/admin/gudang');
      } else {
        alert('Password Salah!');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    /* CONTAINER UTAMA: Memaksa fullscreen dan background Emerald Gelap */
    <div className="!fixed !inset-0 !z-[9999] min-h-screen w-full flex items-center justify-center bg-[#022C22] p-6 font-sans">
      
      {/* BACKGROUND DECOR: Grid pattern transparan */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* CARD LOGIN: max-w-[360px] menjaga agar tidak lebar di monitor besar */}
      <div className="relative z-10 w-full max-w-[360px] bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-500">
        
        {/* HEADER AREA */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/20">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase italic leading-none">
            MITRA<span className="text-emerald-600">USAHA</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-3">
            Administrator Portal
          </p>
        </div>

        {/* FORM AREA */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* INPUT EMAIL */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              Email Address
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

          {/* INPUT PASSWORD */}
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

          {/* TOMBOL LOGIN */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-900/30 active:scale-95 uppercase text-[11px] tracking-widest mt-4 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Memproses...
              </>
            ) : (
              'Masuk Sekarang'
            )}
          </button>
        </form>

        {/* TOMBOL KEMBALI */}
        <div className="mt-10 text-center border-t border-slate-50 pt-6">
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