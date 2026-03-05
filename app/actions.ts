'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function tambahProduk(formData: FormData) {
  // Ambil data dari input form
  const name = formData.get('name') as string;
  const stock = parseInt(formData.get('stock') as string);
  const price = parseFloat(formData.get('price') as string);

  try {
    // Perintah SQL untuk simpan ke Vercel
    await sql`
      INSERT INTO products (name, stock, price)
      VALUES (${name}, ${stock}, ${price})
    `;
    
    // Refresh halaman agar angka statistik & tabel langsung update
    revalidatePath('/'); 
    return { success: true, message: "Barang Berhasil Disimpan!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal simpan ke database." };
  }
}