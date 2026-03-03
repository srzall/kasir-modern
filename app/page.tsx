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
            <span className="text-blue-400 ">KELOLA DAGANGAN</span>
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
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">
            RINGKASAN <span className="text-blue-600">INFORMASI BARANG</span>
          </h2>

          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-4 font-bold max-w-xl mx-auto uppercase text-[10px] tracking-[0.4em]">
            Data stok dan penjualan terupdate hari ini
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
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

      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">
            MENGAPA MEMILIH <span className="text-blue-600 ">MITRA USAHA?</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-6 font-medium max-w-xl mx-auto uppercase text-[10px] tracking-[0.3em]">
            Keunggulan sistem kami untuk percepatan bisnis digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Real-Time Sync",
              desc: "Stok barang di gudang dan kasir sinkron otomatis saat itu juga.",
              icon: "⚡",
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Keamanan Data",
              desc: "Database terenkripsi aman menggunakan teknologi cloud terbaru.",
              icon: "🛡️",
              color: "bg-emerald-50 text-emerald-600"
            },
            {
              title: "Laporan Akurat",
              desc: "Analisa laba rugi harian yang bisa diunduh dalam format PDF/Excel.",
              icon: "📈",
              color: "bg-orange-50 text-orange-600"
            },
            {
              title: "Multi Cabang",
              desc: "Kelola banyak toko atau gudang hanya dalam satu dashboard.",
              icon: "🏢",
              color: "bg-purple-50 text-purple-600"
            }
          ].map((feature, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-blue-500/10 transition-all hover:-translate-y-2">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-4 tracking-tight uppercase">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----- SECTION LOKASI & KONTAK: STYLE BERSIH (SAMA DENGAN KEUNGGULAN) ----- */}
<section className="max-w-7xl mx-auto px-6 py-24 relative z-20">
  
  {/* JUDUL SECTION */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">
      HUBUNGI <span className="text-blue-600">MITRA USAHA</span>
    </h2>
    <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    <p className="text-slate-400 mt-6 font-bold max-w-xl mx-auto uppercase text-[10px] tracking-[0.4em]">
      Layanan Support & Informasi Alamat Kantor Pusat
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-8">
    
    {/* 1. KARTU ALAMAT UTAMA */}
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
          📍
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase ">Alamat Kantor</h3>
        <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-wider">
          Jl. Patung Kuda, Kec. Kayangan<br />
          Kabupaten Lombok Utara<br />
          Nusa Tenggara Barat
        </p>
      </div>
      <div className="mt-8 pt-8 border-t border-slate-50">
        <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase">Pusat Digitalisasi UMKM</span>
      </div>
    </div>

    {/* 2. KARTU KONTAK (MENU UTAMA KONTAK) */}
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
      <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
        📞
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight uppercase ">Kontan Utama</h3>
      
      <div className="space-y-6">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all font-black text-xs">WA</div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">WhatsApp Chat</p>
            <p className="text-sm font-bold text-slate-700">+62 812-3456-7890</p>
          </div>
        </a>
        
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all font-black text-xs">IG</div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Instagram</p>
            <p className="text-sm font-bold text-slate-700">@mitrausaha.official</p>
          </div>
        </a>

        <a href="#" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all font-black text-xs">EM</div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Support</p>
            <p className="text-sm font-bold text-slate-700">halo@mitrausaha.id</p>
          </div>
        </a>
      </div>
    </div>

    {/* 3. KARTU JAM OPERASIONAL / MITRA */}
    <div className="bg-[#020617] p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl mb-8">
          🕒
        </div>
        <h3 className="text-xl font-black text-white mb-6 tracking-tight uppercase ">Jam Operasional</h3>
        
        <div className="space-y-4 text-sm font-medium">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-slate-400">Senin - Sabtu</span>
            <span className="font-bold">08:00 - 17:00</span>
          </div>
          <div className="flex justify-between text-blue-400">
            <span>Minggu</span>
            <span className="font-bold uppercase tracking-widest text-[10px]">Tutup</span>
          </div>
        </div>

        <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2 text-center">Sistem Terintegrasi</p>
          <p className="text-[10px] text-slate-300 text-center leading-relaxed">
            Mitra Usaha menjamin keamanan data transaksi 24/7 untuk seluruh merchant di Lombok Utara.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
    
    </div>
  );
}