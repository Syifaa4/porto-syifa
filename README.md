# Portfolio Syifa Nurul Afifah

Website statis (HTML, CSS, JS), tanpa build, tanpa API. Dua bahasa (ID/EN), tema gelap/terang, kursor interaktif, chatbot lokal.

## Struktur
- index.html : kerangka halaman
- style.css  : tampilan
- script.js  : isi (teks ID/EN, proyek), animasi, kursor, chatbot
- assets/    : CV dan screenshot proyek

## Yang perlu kamu isi (di script.js)
1. Link GitHub tiap proyek: field `gh` di `var P=[...]` (sekarang masih link profil, Smart Waste dikosongkan: isi link Figma).
2. Screenshot asli: simpan di assets/, isi field `img`. Kalau kosong, tampil ilustrasi.
3. Email: ganti `nama@gmail.com` di index.html (3 tempat). CV di assets/ masih berisi kontak placeholder, ganti dengan CV final.
4. Teks: ubah di objek `T` (id dan en). Jawaban chatbot: daftar `KB`.

## Deploy
- Netlify: drag and drop folder ke app.netlify.com/drop
- Vercel: vercel.com/new, framework Other, tanpa build command
- GitHub Pages: ganti isi repo dengan file-file ini (hapus file Next.js lama), Settings > Pages > Deploy from branch (main, root)
