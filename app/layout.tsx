import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Menu Navigation untuk Sidebar
  const menus = [
    { label: "Dashboard", href: "/", icon: "📊" },
    { label: "Stok Gudang", href: "/gudang", icon: "📦" },
    { label: "Menu Kasir", href: "/kasir", icon: "💰" },
    { label: "Laporan", href: "/laporan", icon: "📝" },
    { label: "Pengaturan", href: "/pengaturan", icon: "⚙️" },
  ];

  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {/* Struktur Utama: Flexbox */}
        <div className="flex min-h-screen">
          
          {/* ----- SIDEBAR START ----- */}
          <aside className="w-72 bg-[#020617] p-8 flex flex-col border-r border-slate-800 sticky top-0 h-screen z-50">
            {/* Logo ala MITRAUSAHA */}
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-400/20">
                <span className="font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none">MITRA<span className="text-blue-500">USAHA</span></span>
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">Digital POS System</span>
              </div>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-3 flex-grow">
              {menus.map((menu, i) => (
                <Link 
                  key={i} 
                  href={menu.href} 
                  className="flex items-center gap-4 text-slate-400 hover:text-white font-bold text-sm tracking-wide px-4 py-3.5 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <span className="text-lg opacity-70 group-hover:opacity-100">{menu.icon}</span>
                  {menu.label}
                </Link>
              ))}
            </nav>
            
          </aside>
          <div className="flex-1">
             {/* Header Atas Kecil (Optional buat Admin) */}
             <header className="bg-white border-b sticky top-0 z-40">
               <div className="max-w-screen-2xl mx-auto px-10 h-20 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Administrator Mode</span>
                  <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-xs font-bold text-blue-600">Database Connected (Neon)</span>
                  </div>
               </div>
             </header>

             {/* Area Konten Halaman */}
             <main className="max-w-screen-2xl mx-auto p-10 py-12">
               {children}
             </main>
          </div>
          {/* ----- KONTEN UTAMA END ----- */}

        </div>
      </body>
    </html>
  );
}