import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function GudangPage() {
  // Ambil data asli dari database
  const { rows } = await sql`SELECT * FROM products ORDER BY name ASC`;

  return (
    <div className="animate-fadeIn">
      {/* Bagian Judul yang Bersih */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b pb-8 border-slate-100">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Data Inventaris</h2>
          <p className="text-slate-500 font-medium text-lg mt-2">Kelola seluruh aset produk Mitra Usaha secara akurat.</p>
        </div>
        <Link href="/gudang/tambah" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest shadow-lg shadow-emerald-200 transition-all active:scale-95">
          + TAMBAH PRODUK BARU
        </Link>
      </div>

      {/* Kartu Besar untuk Tabel ala List SIPETA */}
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-100/50 border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em]">
              <th className="p-8">No</th>
              <th className="p-8">Informasi Produk</th>
              <th className="p-8 text-center">Status Stok</th>
              <th className="p-8 text-right">Harga Jual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {rows.map((item, index) => (
              <tr key={item.id} className="hover:bg-emerald-50/30 transition-colors group">
                <td className="p-8 text-sm font-black text-slate-300">{index + 1}</td>
                <td className="p-8">
                  <p className="font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors">{item.name}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">REF ID: {item.id}</p>
                </td>
                <td className="p-8 text-center">
                  <span className={`px-4 py-2 rounded-full text-[10px] font-black tracking-widest ${item.stock <= 5 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {item.stock} UNIT TERSEDIA
                  </span>
                </td>
                <td className="p-8 text-right font-mono font-black text-slate-700 text-xl">
                  Rp {Number(item.price).toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}