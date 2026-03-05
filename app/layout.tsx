"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // 1. LOGIKA PENGECEKAN HALAMAN
  // Jika URL adalah '/login' atau diawali dengan '/admin' (seperti /admin/gudang)
  const isLoginPage = pathname === "/login";
  const isAdminPage = pathname.startsWith("/admin");

  // Daftar Menu untuk Navbar User Biasa
  const menus = [
    { label: "Dashboard", href: "/", icon: "📊" },
    { label: "Gudang", href: "/gudang", icon: "📦" },
    { label: "Kasir", href: "/kasir", icon: "💰" },
    { label: "Laporan", href: "/laporan", icon: "📝" },
    { label: "Pengaturan", href: "/pengaturan", icon: "⚙️" },
    { label: "Admin", href: "/login", icon: "🔐" },
  ];

  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#F8FAFC] text-slate-900 antialiased overflow-x-hidden`}>
        
        {/* KONDISI: Jika kita berada di halaman Login atau area Admin, 
            kita jangan menampilkan Navbar/Footer User. 
        */}
        {isLoginPage || isAdminPage ? (
          // --- TAMPILAN ADMIN / LOGIN (POLOSAN) ---
          <div className="min-h-screen w-full">
            {children}
          </div>
        ) : (
          // --- TAMPILAN USER UMUM (PAKAI NAVBAR) ---
          <div className="min-h-screen flex flex-col">
            {/* HEADER / NAVBAR USER */}
            <header className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
              <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
                {/* Logo Mitra Usaha */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                    <span className="font-bold text-lg">M</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-black text-slate-900 leading-none tracking-tight uppercase italic">
                      MITRA<span className="text-emerald-600">USAHA</span>
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">Digital System</span>
                  </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-1">
                  {menus.map((menu, i) => (
                    <Link 
                      key={i} 
                      href={menu.href} 
                      className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold text-[10px] tracking-widest px-4 py-2 rounded-xl hover:bg-slate-50 transition-all uppercase"
                    >
                      <span className="text-sm opacity-80">{menu.icon}</span>
                      <span>{menu.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-900 focus:outline-none">
                  <div className="space-y-1.5">
                    <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                  </div>
                </button>
              </div>

              {/* Mobile Menu Panel */}
              <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-b border-slate-100 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="p-4 flex flex-col gap-1">
                  {menus.map((menu, i) => (
                    <Link 
                      key={i} 
                      href={menu.href} 
                      onClick={() => setIsOpen(false)} 
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 transition-colors"
                    >
                      <span className="text-xl">{menu.icon}</span>
                      <span className="font-bold text-xs uppercase tracking-widest">{menu.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </header>

            {/* AREA KONTEN UTAMA USER */}
            <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12">
              <div className="animate-in fade-in duration-700">
                {children}
              </div>
            </main>

            {/* FOOTER USER */}
            <footer className="bg-white border-t border-slate-100 py-10">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-[9px] font-bold text-slate-400 tracking-[0.5em] uppercase italic">
                  © 2026 MITRA USAHA • LOMBOK UTARA
                </p>
              </div>
            </footer>
          </div>
        )}
      </body>
    </html>
  );
}