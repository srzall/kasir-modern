export default function GudangPage() {
  // Data sementara untuk melihat tampilan
  const dummyData = [
    { id: 1, name: "Beras 5kg", stock: 15, price: 75000 },
    { id: 2, name: "Minyak Goreng 1L", stock: 4, price: 18000 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Stok Gudang</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">+ Tambah Barang</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr className="text-slate-500 text-sm uppercase">
              <th className="p-4">Nama Produk</th>
              <th className="p-4">Stok</th>
              <th className="p-4">Harga</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {dummyData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition">
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-sm font-semibold text-blue-600">{item.stock} Unit</td>
                <td className="p-4 text-sm font-semibold">Rp {item.price.toLocaleString()}</td>
                <td className="p-4 text-right">
                  <button className="text-red-500 hover:underline text-sm font-medium">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}