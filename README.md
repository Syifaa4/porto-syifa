# Portfolio Syifa Nurul Afifah

Website statis (HTML, CSS, JS), tanpa build. Dua bahasa (ID/EN), tema gelap/terang, kursor interaktif, chatbot Gemini (membalas dalam bahasa penanya) dengan cadangan bot lokal.

## Struktur
- index.html : kerangka halaman
- style.css  : tampilan
- script.js  : isi (teks ID/EN, proyek), animasi, kursor, chatbot (frontend)
- api/chat.js: fungsi serverless Vercel, penghubung aman ke Gemini. Fakta tentang Syifa ada di konstanta SYSTEM
- assets/    : CV dan screenshot proyek

## Yang perlu kamu isi (di script.js)
1. Link GitHub tiap proyek: field `gh` di `var P=[...]` (sudah terisi, cek lagi sebelum publish).
2. Screenshot asli: simpan di assets/, isi field `img`. Kalau kosong, tampil ilustrasi.
3. Email: ganti `nama@gmail.com` di index.html (3 tempat). CV di assets/ masih berisi kontak placeholder, ganti dengan CV final.
4. Teks: ubah di objek `T` (id dan en). Jawaban bot cadangan: daftar `TP`. Jawaban Gemini: konstanta `SYSTEM` di api/chat.js (samakan kalau isi portfolio berubah).

## Deploy
- Netlify: drag and drop folder ke app.netlify.com/drop
- Vercel: vercel.com/new, framework Other, tanpa build command
- GitHub Pages: ganti isi repo dengan file-file ini (hapus file Next.js lama), Settings > Pages > Deploy from branch (main, root)


## Chatbot Gemini (wajib deploy di Vercel)
1. Ambil API key di aistudio.google.com (Get API key).
2. Push repo ke GitHub, import di vercel.com/new (framework Other, tanpa build command).
3. Vercel > Project > Settings > Environment Variables, isi:
   - `GEMINI_API_KEY` : key dari AI Studio (jangan pernah ditaruh di script.js atau di-commit)
   - `GEMINI_MODEL`   : opsional. Cek nama model yang tersedia di free tier akun kamu di AI Studio. Default: gemini-3.5-flash-lite
   - `ALLOWED_ORIGINS`: opsional tapi disarankan, mis. https://nama-project.vercel.app (pisahkan koma kalau ada domain sendiri)
4. Redeploy. Tes: buka situs, tanya bot dalam bahasa Inggris atau Jepang, dia harus menjawab dalam bahasa itu.

Kalau API error, kena batas free tier, atau situs dibuka tanpa Vercel (GitHub Pages, file lokal), bot otomatis memakai jawaban lokal dari `TP`, jadi tidak pernah mati.
Catatan: di free tier, pertanyaan pengunjung dikirim ke Google dan bisa dipakai Google untuk meningkatkan produknya.
Tes lokal: `npm i -g vercel`, buat file .env berisi key, lalu `vercel dev`.
