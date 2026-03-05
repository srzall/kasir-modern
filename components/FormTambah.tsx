'use client'

import { useState, useRef } from "react";
import { tambahProduk } from "@/app/actions";

export default function FormTambah() {
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup form
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const res = await tambahProduk(formData);
    if (res.success) {
      alert(res.message);
      formRef.current?.reset();
      setIsOpen(false); // Tutup form setelah berjaya simpan
    }
  }

  return (
    <div className="mb-10 text-center">
      {/* Tombol Pencetus */}
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-sm tracking-widest transition-all shadow-lg shadow-emerald-200 active:scale-95"
        >
          + TAMBAH BARANG BARU
        </button>
      ) : (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-[2rem] shadow-2xl border border-emerald-100 animate-fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-slate-900 italic uppercase">Input Stok Baru</h3>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-red-500 font-bold">BATAL</button>
          </div>

          <form ref={formRef} action={handleSubmit} className="space-y-4 text-left">
            <input name="name" type="text" placeholder="Nama Barang" required className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" />
            <div className="grid grid-cols-2 gap-4">
              <input name="stock" type="number" placeholder="Stok" required className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
              <input name="price" type="number" placeholder="Harga Rp" required className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
            </div>
            <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-100">
              SIMPAN KE GUDANG 💾
            </button>
          </form>
        </div>
      )}
    </div>
  );
}