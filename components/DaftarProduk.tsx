import { sql } from '@vercel/postgres';

export default async function DaftarProduk() {
  // Ambil data terbaru dari Vercel
  const { rows: products } = await sql`SELECT * FROM products ORDER BY created_at DESC`;

  return (
    <div className="max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-100">
          <tr>
            <th className="p-5 text-[10px] font-black uppercase text-slate-400">Nama</th>
            <th className="p-5 text-[10px] font-black uppercase text-slate-400 text-center">Stok</th>
            <th className="p-5 text-[10px] font-black uppercase text-slate-400 text-right">Harga</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-5 font-black uppercase italic text-slate-800">{p.name}</td>
              <td className="p-5 text-center">
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold">
                   {p.stock} UNIT
                </span>
              </td>
              <td className="p-5 text-right font-black">
                Rp {Number(p.price).toLocaleString('id-ID')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}