'use client'
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

export default function AdminKasir() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
      
      {/* KIRI: PILIH PRODUK */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">Point of Sale</h1>
          <input type="text" placeholder="Cari barcode/nama..." className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase w-64 focus:ring-2 focus:ring-emerald-500 outline-none" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-500 cursor-pointer transition-all group">
              <div className="aspect-square bg-slate-50 rounded-2xl mb-4 flex items-center justify-center font-black text-slate-200 text-2xl group-hover:bg-emerald-50 group-hover:text-emerald-200 transition-colors">IMG</div>
              <p className="text-[10px] font-black text-slate-400 uppercase">Sembako</p>
              <h4 className="font-black text-slate-800 uppercase italic text-sm leading-tight">Minyak Goreng 2L</h4>
              <p className="text-emerald-600 font-black mt-1">Rp 34.000</p>
            </div>
          ))}
        </div>
      </div>

      {/* KANAN: KERANJANG BELANJA */}
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl h-fit sticky top-28">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="text-emerald-600" />
          <h2 className="font-black italic text-xl uppercase tracking-tighter text-slate-800">Keranjang</h2>
        </div>

        <div className="space-y-6 mb-8">
          {/* Item di keranjang */}
          <div className="flex justify-between items-center border-b border-slate-50 pb-4">
            <div>
              <p className="text-[11px] font-black text-slate-800 uppercase italic">Minyak Goreng 2L</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 text-emerald-600">Rp 34.000</p>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 px-3 py-1 rounded-xl">
              <Minus size={14} className="cursor-pointer hover:text-emerald-600" />
              <span className="font-black text-xs">1</span>
              <Plus size={14} className="cursor-pointer hover:text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-100 pt-6">
          <div className="flex justify-between text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <span>Subtotal</span>
            <span>Rp 34.000</span>
          </div>
          <div className="flex justify-between text-slate-800 text-lg font-black uppercase italic tracking-tighter border-t border-slate-50 pt-2">
            <span>Total</span>
            <span className="text-emerald-600">Rp 34.000</span>
          </div>
        </div>

        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl mt-8 uppercase text-[11px] tracking-[0.2em] shadow-lg shadow-emerald-900/20 transition-all active:scale-95">
          Proses Transaksi
        </button>
      </div>
    </div>
  );
}