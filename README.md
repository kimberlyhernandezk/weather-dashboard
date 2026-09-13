# Panduan Optimasi LinkedIn dengan AI

Situs statis berbahasa Indonesia yang merangkum materi **AI-Powered Personal Branding and LinkedIn Optimisation** secara terstruktur dan praktis.

## Isi panduan

- cara perekrut memindai profil dalam waktu singkat;
- rumus *headline* yang jelas, spesifik, dan jujur;
- struktur tiga kalimat untuk bagian *About*;
- alur penggunaan alat bantu AI secara bertahap;
- checklist tindakan yang dapat langsung diterapkan.

## Menjalankan secara lokal

Tidak ada dependensi atau proses build. Jalankan server statis dari direktori proyek:

```bash
python3 -m http.server 8080
```

Lalu buka <http://localhost:8080>.

## Publikasi

Workflow `.github/workflows/pages.yml` memublikasikan situs ke GitHub Pages setiap kali ada perubahan pada cabang `main`. Aktifkan **Settings → Pages → Source: GitHub Actions** apabila Pages belum pernah diaktifkan pada repositori.

## Catatan

Materi pada situs merupakan penjelasan dan adaptasi berbahasa Indonesia dari gambar pelatihan yang diberikan pengguna. Contoh disederhanakan agar fokus pada prinsip dan tidak menyalin data pribadi dari profil yang tampil pada materi sumber.
