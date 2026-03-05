'use client'
import { UserPlus, Mail, Phone, MoreHorizontal } from 'lucide-react';

export default function AdminPelanggan() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">Data Pelanggan</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Kelola Database Member Mitra Usaha</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center gap-3">
          <UserPlus size={16} /> Tambah Member
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
              <th className="px-10 py-6">Nama Pelanggan</th>
              <th className="px-10 py-6">Kontak</th>
              <th className="px-10 py-6">Total Belanja</th>
              <th className="px-10 py-6">Poin Member</th>
              <th className="px-10 py-6 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[1, 2, 3, 4].map((i) => (
              <tr key={i} className="hover:bg-slate-50 transition-all group">
                <td className="px-10 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <img src={`https://ui-avatars.com/api/?name=User+${i}&background=10b981&color=fff`} alt="" />
                    </div>
                    <span className="font-black text-slate-800 text-sm uppercase italic">Pelanggan Ke-{i}</span>
                  </div>
                </td>
                <td className="px-10 py-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                      <Mail size={12} /> user{i}@email.com
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                      <Phone size={12} /> 0812-3456-78{i}
                    </div>
                  </div>
                </td>
                <td className="px-10 py-6 font-black text-slate-700 text-sm">Rp 1.250.000</td>
                <td className="px-10 py-6">
                   <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg font-black text-[10px] uppercase">150 Poin</span>
                </td>
                <td className="px-10 py-6 text-right">
                  <button className="text-slate-300 hover:text-slate-600 transition-colors"><MoreHorizontal /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}