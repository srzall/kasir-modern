'use client'
import { DollarSign, Package, Users, ArrowUpRight } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: "Omzet Hari Ini", val: "Rp 3.520.000", icon: <DollarSign />, color: "bg-emerald-500" },
    { label: "Produk Terjual", val: "142 Items", icon: <Package />, color: "bg-blue-500" },
    { label: "Pelanggan Baru", val: "12 Orang", icon: <Users />, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">Dashboard</h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Ringkasan Bisnis Mitra Usaha</p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 ${item.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                {item.icon}
              </div>
              <ArrowUpRight className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
            </div>
            <div className="mt-6">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
              <h3 className="text-2xl font-black text-slate-800 mt-1 uppercase italic">{item.val}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
        <h2 className="font-black italic text-xl uppercase tracking-tighter text-slate-800 mb-6">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <p className="text-xs font-bold text-slate-700 uppercase">Penjualan Beras Premium Berhasil</p>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase">10 Menit Lalu</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}