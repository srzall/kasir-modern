"use client";

import { 
  LayoutDashboard, 
  Box, 
  ShoppingCart, 
  Users, 
  LogOut, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/login");
  };

  const menuItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={22} /> },
    { label: "Stok Gudang", href: "/admin/gudang", icon: <Box size={22} /> },
    { label: "Kasir / Order", href: "/admin/kasir", icon: <ShoppingCart size={22} /> },
    { label: "Data Pelanggan", href: "/admin/pelanggan", icon: <Users size={22} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      
      {/* 1. OVERLAY (Muncul saat Sidebar HP Terbuka) */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-emerald-950/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* 2. SIDEBAR RESPONSIVE */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#011a14] text-white z-[70] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0
      `}>
        
        {/* LOGO AREA */}
        <div className="p-8 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
              <span className="font-black text-2xl italic text-emerald-900 font-serif">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase tracking-tighter leading-none">
                MITRA<span className="text-emerald-400">ADMIN</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-500/40 tracking-[0.2em] uppercase mt-1">Lombok Utara</span>
            </div>
          </div>
          
          <button onClick={() => setIsMobileOpen(false)} className="lg:hidden text-emerald-400 hover:bg-emerald-900/50 p-2 rounded-xl">
            <X size={24} />
          </button>
        </div>

        {/* MENU LIST */}
        <nav className="flex-1 px-4 mt-10 space-y-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group ${
                  isActive 
                  ? "bg-white text-emerald-950 shadow-[0_10px_25px_rgba(0,0,0,0.2)] scale-[1.02]" 
                  : "text-emerald-100/40 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`${isActive ? "text-emerald-600" : "text-emerald-500 group-hover:text-emerald-400"}`}>
                    {item.icon}
                  </span>
                  <span className="text-[12px] font-black uppercase tracking-widest italic">{item.label}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 w-full px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all italic border border-transparent hover:border-red-500/20"
          >
            <LogOut size={20} /> Logout System
          </button>
        </div>
      </aside>

      {/* --- 3. KONTEN UTAMA --- */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isMobileOpen ? "lg:ml-72" : "lg:ml-72"}`}>
        
        {/* TOPBAR (Jarak diperlebar agar tidak mepet) */}
        <header className="h-32 bg-white/70 backdrop-blur-md sticky top-0 z-40 px-8 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Tombol Hamburger HP */}
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-4 bg-white border border-slate-200 rounded-2xl text-emerald-900 shadow-sm active:scale-90 transition-transform"
            >
              <Menu size={24} />
            </button>
            
            <div className="flex flex-col">
              <h2 className="font-black text-emerald-950 uppercase italic tracking-tighter text-2xl lg:text-4xl leading-tight">
                {pathname.split('/').pop()?.replace('-', ' ') || 'Overview'}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Sistem Management Aktif</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden sm:flex flex-col text-right">
               <p className="text-[12px] font-black text-emerald-950 uppercase italic leading-none">Rizal Admin</p>
               <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md mt-2 self-end shadow-sm">SUPER ADMIN</span>
            </div>
            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-emerald-600 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center text-white font-black italic text-xl lg:text-3xl shadow-2xl shadow-emerald-200 border-4 lg:border-[6px] border-white transform hover:rotate-6 transition-all cursor-pointer">
                RZ
            </div>
          </div>
        </header>

        {/* AREA HALAMAN */}
        <main className="px-6 lg:px-16 pb-12 pt-2 flex-1">
          <div className="bg-white min-h-[75vh] rounded-[2.5rem] lg:rounded-[4rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-100 p-8 lg:p-16 relative overflow-hidden">
            {/* Dekorasi Background di Dalam Konten */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {children}
            </div>
          </div>
        </main>

        <footer className="pb-10 text-center">
            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.5em] italic">
              MITRA USAHA • Integrated Management System v1.0
            </p>
        </footer>
      </div>
    </div>
  );
}