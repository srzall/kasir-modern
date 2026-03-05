"use client";

import { 
  LayoutDashboard, 
  Box, 
  ShoppingCart, 
  Users, 
  LogOut, 
  ChevronRight,
  Zap
} from "lucide-react";
// 1. PASTIKAN IMPORT INI ADA
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // 2. DEFINISIKAN ROUTER
  const router = useRouter();
  const pathname = usePathname();

  // 3. DEFINISIKAN FUNGSI LOGOUT (Ini yang bikin error kalau hilang)
  const handleLogout = () => {
    // Hapus session/token jika ada
    localStorage.removeItem("isAdmin");
    // Arahkan ke halaman login atau home
    router.push("/login");
  };

  const menuItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Stok Gudang", href: "/admin/gudang", icon: <Box size={20} /> },
    { label: "Kasir / Order", href: "/admin/kasir", icon: <ShoppingCart size={20} /> },
    { label: "Data Pelanggan", href: "/admin/pelanggan", icon: <Users size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      
      {/* --- SIDEBAR --- */}
      <aside className="fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#011a14] text-white z-50 flex flex-col shadow-2xl">
        
        {/* LOGO AREA */}
        <div className="p-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <span className="font-black text-2xl italic text-emerald-900">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase tracking-tighter leading-none text-white">
                MITRA<span className="text-emerald-400">ADMIN</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-500/40 tracking-[0.2em] uppercase mt-1">Lombok Utara</span>
            </div>
          </div>
        </div>

        {/* MENU LIST */}
        <nav className="flex-1 px-4 mt-8 space-y-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
                  isActive 
                  ? "bg-white text-emerald-950 shadow-xl" 
                  : "text-emerald-100/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={isActive ? "text-emerald-600" : "text-emerald-500"}>
                    {item.icon}
                  </span>
                  <span className="text-[12px] font-black uppercase tracking-widest italic">{item.label}</span>
                </div>
                {isActive && <ChevronRight size={16} className="text-emerald-600" />}
              </Link>
            );
          })}
        </nav>

        {/* 4. BAGIAN LOGOUT (TEMPAT ERROR TADI) */}
        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout} // Sekarang fungsi ini sudah ada di atas
            className="flex items-center gap-4 w-full px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all italic"
          >
            <LogOut size={20} /> Logout System
          </button>
        </div>
      </aside>

      {/* --- KONTEN UTAMA --- */}
      <div className="flex-1 ml-72 flex flex-col min-h-screen">
        <header className="h-28 bg-white/50 backdrop-blur-md sticky top-0 z-40 px-12 flex items-center justify-between">
          <div>
            <h2 className="font-black text-emerald-950 uppercase italic tracking-tighter text-3xl">
              {pathname.split('/').pop()?.replace('-', ' ') || 'Overview'}
            </h2>
          </div>
          <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black italic text-xl shadow-lg shadow-emerald-200">
             RZ
          </div>
        </header>

        <main className="px-12 pb-12 pt-4 flex-1">
          <div className="bg-white min-h-[80vh] rounded-[3rem] shadow-sm border border-slate-100 p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}