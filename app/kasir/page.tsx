"use client";
import { useState } from "react";

export default function KasirPage() {
  // Data dummy untuk simulasi pilihan barang
  const daftarBarang = [
    { id: 1, name: "Beras 5kg", price: 75000 },
    { id: 2, name: "Minyak Goreng 1L", price: 18000 },
    { id: 3, name: "Gula Pasir 1kg", price: 15000 },
  ];

  // State untuk menyimpan barang yang dibeli
  const [keranjang, setKeranjang] = useState<any[]>([]);

  const tambahKeKeranjang = (barang: any) => {
    setKeranjang([...keranjang, barang]);
  };

  const totalHarga = keranjang.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* KIRI: Daftar Produk yang Bisa Dipilih */}
      <div className="md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Pilih Produk</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {daftarBarang.map((barang) => (
            <button
              key={barang.id}
              onClick={() => tambahKeKeranjang(barang)}
              className="p-4 bg-white border rounded-xl hover:border-green-500 hover:shadow-md transition text-left"
            >
              <p className="font-semibold text-slate-800">{barang.name}</p>
              <p className="text-sm text-green-600 font-bold">Rp {barang.price.toLocaleString()}</p>
            </button>
          ))}
        </div>
      </div>

      {/* KANAN: Struk Belanjaan */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border h-fit sticky top-24">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Stok Belanja</h2>
        
        <div className="space-y-3 mb-6 min-h-[100px]">
          {keranjang.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">Belum ada barang dipilih</p>
          ) : (
            keranjang.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span className="font-semibold">Rp {item.price.toLocaleString()}</span>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span className="text-blue-600">Rp {totalHarga.toLocaleString()}</span>
          </div>
          <button 
            disabled={keranjang.length === 0}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition"
          >
            Bayar Sekarang
          </button>
          <button 
            onClick={() => setKeranjang([])}
            className="w-full mt-2 text-slate-500 text-sm hover:underline"
          >
            Kosongkan Keranjang
          </button>
        </div>
      </div>

    </div>
  );
}