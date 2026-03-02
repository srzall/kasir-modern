import Link from "next/link";

export default function HomePage() {
  return (
    <div className="animate-fadeIn bg-slate-50 min-h-screen -mt-20">
      
      <section className="relative py-40 px-6 text-center overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
          style={{ 
            backgroundImage: `url('/kuda.jpg')`, 
          }}
        ></div>

        <div className="absolute inset-0 z-10 bg-slate-950/60 backdrop-blur-[2px]"></div>

        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">
            SOLUSI CERDAS <br />
            <span className="text-blue-400 italic">KELOLA DAGANGAN</span>
          </h1>
          
          <p className="text-slate-200 max-w-2xl mx-auto text-lg mb-12 leading-relaxed drop-shadow-md">
            Sistem informasi kasir dan gudang terintegrasi untuk memantau stok secara transparan dan memproses penjualan lebih cepat di Kabupaten Lombok Utara.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kasir" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest transition-all shadow-xl shadow-blue-500/30 active:scale-95">
              MULAI TRANSAKSI →
            </Link>
            <Link href="/gudang" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full font-black text-sm tracking-widest transition-all backdrop-blur-md">
              PANTAU GUDANG
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16 relative z-20 pb-20">
        <div className="flex justify-center mb-12">
            <p className="text-slate-900 font-black uppercase bg-white border border-slate-200 px-10 py-3 shadow-md rounded-2xl tracking-[0.3em] text-xs">
              informasi barang 
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Total Produk', value: '124 Item', icon: '📦' },
            { label: 'Stok Menipis', value: '8 Barang', icon: '⚠️' },
            { label: 'Penjualan Hari Ini', value: 'Rp 1.2M', icon: '💰' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                {item.icon}
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-3xl font-black text-slate-800 tracking-tighter">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}