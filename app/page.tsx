import Link from "next/link";

export default function HomePage() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl font-extrabold mb-4">Sistem Manajemen Usaha</h1>
      <p className="text-slate-500 mb-10 text-lg">Kelola stok barang dan transaksi penjualan dalam satu tempat.</p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link href="/gudang" className="p-8 bg-white rounded-2xl shadow-sm border hover:border-blue-500 hover:shadow-md transition-all text-left">
          <div className="text-3xl mb-4">📦</div>
          <h2 className="text-2xl font-bold mb-2">Manajemen Gudang</h2>
          <p className="text-slate-500">Pantau ketersediaan stok, tambah produk baru, dan atur harga jual.</p>
        </Link>

        <Link href="/kasir" className="p-8 bg-white rounded-2xl shadow-sm border hover:border-green-500 hover:shadow-md transition-all text-left">
          <div className="text-3xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">Kasir Penjualan</h2>
          <p className="text-slate-500">Proses transaksi cepat, hitung kembalian, dan potong stok otomatis.</p>
        </Link>
      </div>
    </div>
  );
}