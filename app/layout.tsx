import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">RIZAL<span className="text-slate-800">POS</span></Link>
            <div className="flex gap-6 font-medium text-sm">
              <Link href="/gudang" className="hover:text-blue-600 transition">Gudang</Link>
              <Link href="/kasir" className="hover:text-blue-600 transition">Kasir</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}