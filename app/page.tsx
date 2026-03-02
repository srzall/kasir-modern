"use client"; // Tambahkan ini di baris paling atas karena kita pakai klik-klikan

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react"; // Untuk buka tutup menu

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); // Status menu HP

  const menus = [
    { label: "Dashboard", href: "/", icon: "📊" },
    { label: "Gudang", href: "/gudang", icon: "📦" },
    { label: "Kasir", href: "/kasir", icon: "💰" },
    { label: "Laporan", href: "/laporan", icon: "📝" },
    { label: "Pengaturan", href: "/pengaturan", icon: "⚙️" },
  ];

  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#F8FAFC] text-slate-900 antialiased`}>
        <div className="min-h-screen flex flex-col">
          
          <header className="bg-white sticky top-0 z-[100] border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
              
              {/* LOGO */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                  M
                </div>
                <span className="text-lg font-black text-slate-900 tracking-tight uppercase">
                  MITRA<span className="text-blue-600">USAHA</span>
                </span>
              </div>

              {/* MENU DESKTOP (Muncul di layar besar) */}
              <nav className="hidden md:flex items-center gap-1">
                {menus.map((menu, i) => (
                  <Link key={i} href={menu.href} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-[10px] tracking-widest px-4 py-2 rounded-xl transition-all uppercase">
                    <span>{menu.icon}</span>
                    <span>{menu.label}</span>
                  </Link>
                ))}
              </nav>

              {/* TOMBOL HAMBURGER (Hanya muncul di HP) */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>

            {/* MENU MOBILE (Hanya muncul saat isOpen true & layar HP) */}
            {isOpen && (
              <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
                <nav className="flex flex-col p-4 gap-2">
                  {menus.map((menu, i) => (
                    <Link 
                      key={i} 
                      href={menu.href} 
                      onClick={() => setIsOpen(false)} // Tutup menu saat diklik
                      className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl text-slate-700 font-bold text-sm"
                    >
                      <span className="text-xl">{menu.icon}</span>
                      {menu.label}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </header>

          <main className="flex-1 w-full max-w-7xl mx-auto">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}