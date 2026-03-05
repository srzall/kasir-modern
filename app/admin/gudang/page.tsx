'use client'
import { Plus, Package, Search, Filter, MoreHorizontal } from 'lucide-react';

export default function AdminGudang() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">Inventaris Barang</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Total 1,240 Produk Tersedia</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl shadow-emerald-600/20 flex items-center gap-3 italic">
          <Plus size={18} strokeWidth={3} /> Tambah Barang Baru
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        {/* TOOLBAR TABEL */}
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input 
              type="text" 
              placeholder="Cari kode atau nama barang..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-all">
            <Filter size={16} /> Filter Kategori
          </button>
        </div>

        {/* TABEL DATA */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <th className="px-10 py-6">Informasi Produk</th>
                <th className="px-10 py-6">Kategori</th>
                <th className="px-10 py-6">Harga Satuan</th>
                <th className="px-10 py-6">Sisa Stok</th>
                <th className="px-10 py-6 text-center">Status</th>
                <th className="px-10 py-6 text-right">Menu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center font-black text-emerald-600 text-xs shadow-sm">
                        BOX
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-slate-800 text-sm uppercase italic">Produk Mitra {item}</span>
                        <span className="text-[10px] font-bold text-slate-400">SKU-00{item}X</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-lg">Kebutuhan Pokok</span>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-sm font-black text-slate-800 tracking-tighter">Rp 25,400</span>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-sm font-black text-emerald-600 tracking-tighter italic">450 Unit</span>
                  </td>
                  <td className="px-10 py-6 text-center">
                    <span className="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Aman</span>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="text-slate-300 hover:text-emerald-600 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}