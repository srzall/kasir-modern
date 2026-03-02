import Link from "next/link";

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section Gelap ala SIPETA */}
      <section className="bg-[#020617] py-28 px-6 text-center relative overflow-hidden">
        {/* Dekorasi Cahaya di Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
           <div className="absolute top-[-10%] left-[20%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-300 tracking-widest uppercase">Portal Mitra Usaha Digital</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            SOLUSI CERDAS <br />
            <span className="text-blue-500 italic">KELOLA DAGANGAN</span>
          </h1>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
            Sistem informasi kasir dan gudang terintegrasi untuk memantau stok secara transparan dan memproses penjualan lebih cepat di Kabupaten Lombok Barat.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kasir" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest transition-all shadow-xl shadow-blue-500/20 active:scale-95">
              MULAI TRANSAKSI →
            </Link>
            <Link href="/gudang" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-full font-black text-sm tracking-widest transition-all backdrop-blur-sm">
              PANTAU GUDANG
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Cards Section ala SIPETA */}
      <section className="max-w-7xl mx-auto px-6 mt-12 relative z-20">
        <p className="text-slate-900 font-black uppercase  max-w-2xl mx-auto flex justify-center mb-12 backdrop-blur-sm rounded-2xl">
          informasi barang 
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Total Produk', value: '124 Item', icon: '📦' },
            { label: 'Stok Menipis', value: '8 Barang', icon: '⚠️' },
            { label: 'Penjualan Hari Ini', value: 'Rp 1.2M', icon: '💰' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="text-3xl mb-4">{item.icon}</div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-3xl font-black text-slate-800">{item.value}</p>
            </div>
          ))}
        </div>
        
            <div className=" border-slate-800 pt-8 mt-auto text-center text-slate-600 text-[10px] font-medium tracking-widest uppercase">
               © 2026 MITRA USAHA • UTARA
            </div>
      </section>
    </div>
  );
}