import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          
          <header className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:rotate-12">
                  <span className="font-bold text-lg">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900 leading-none tracking-tight uppercase">
                    MITRA<span className="text-blue-600">USAHA</span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">Digital System</span>
                </div>
              </div>

              <nav className="flex items-center gap-1">
                {menus.map((menu, i) => (
                  <Link 
                    key={i} 
                    href={menu.href} 
                    className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-[10px] tracking-widest px-4 py-2 rounded-xl hover:bg-slate-50 transition-all uppercase"
                  >
                    <span className="text-sm opacity-80">{menu.icon}</span>
                    <span className="hidden md:block">{menu.label}</span>
                  </Link>
                ))}
              </nav>

            </div>
          </header>

          <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12">
            {children}
          </main>

          <footer className="bg-white border-t border-slate-100 py-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
               <p className="text-[9px] font-bold text-slate-400 tracking-[0.5em] uppercase">
                 © 2026 MITRA USAHA • LOMBOK UTARA
               </p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}