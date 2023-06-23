
# Satu Nusa: _Satu Jiwa, Satu Bangsa, Satu Nusa: Bersama Membantu, Bersama Menjaga_

## Deskripsi

Satu Nusa adalah platform donasi yang mengedepankan kebersamaan, solidaritas, dan gotong royong sebagai nilai inti. Kami hadir untuk menyatukan jiwa dan bangsa dalam upaya membantu sesama dan menjaga keberlanjutan. Melalui Satu Nusa, Anda dapat berpartisipasi dalam berbagai proyek donasi yang memiliki dampak nyata dalam memajukan masyarakat, lingkungan, dan kehidupan di sekitar kita. Bersama-sama, kita membentuk satu nusa yang berdaya, saling membantu, dan menjaga kehidupan yang lebih baik untuk semua. Bergabunglah dengan Satu Nusa dan berkontribusi dalam membangun masa depan yang lebih baik bagi negeri kita

___

# Component

## Header

- Logo Satu Nusa.
- Tombol pencarian
  - ketika dibuka /di klik akan memunculkan halaman tersendiri yang memblock semua halaman, serta memunculkan beberapa donasi sekitar, dan user mengetahui lokasi saat ini
  - memunculkan beberapa kategori secara default
  - memunculkan list donasi ketika user melakukan pencarian, maka akan muncul( list donasi dan  user dengan nama yang mirip)
- Notifikasi
  - jika klik maka muncul lsit notifikasi dengan kategori : (balance, transaksi donasi, update dari project yang di donasi, update news dari admin)
- Dark/Light Mode

## Navigation

- [Home](#1-home)
- [List Donasi](#2-list-donasi)
- [Penggalang Dana](#penggalang)
- [Profile](#Profile)

___

### 1. Home

___

Beranda dari platform _Satu Nusa_ harus memberikan informasi yang cukup tentang platform dan memandu pengguna untuk melakukan tindakan yang diinginkan. Berikut adalah beberapa komponen yang ada di beranda:

1. **Banner / Hero Section**
   - Terdiri Dari 5 Gambar tanpa judul, judul sudah ada di banner tersebut

2. **Statistik dan Grafik**
   - memberikan visual tentang seberapa banyak donasi yang telah terkumpul, jumlah donatur yang terlibat, dan jumlah campaign/donasi yang dibuat

3. **Proyek Sekitar(geo location)**
   - user dapat melihat lokasi dia saat ini dimana
   - menampilkan proyek-proyek yang paling membutuhkan dukungan dan perhatian donatur saat ini, dengan format [list](#list)
4. **Proyek yang Paling Mendesak**
   - menampilkan proyek-proyek yang paling membutuhkan dukungan dan perhatian donatur saat ini, dengan format :
      - banner
      - judul
      - target donasi
      - donasi tercapai
      - timer donasi sisa berapa hari lagi

5. **Testimoni Donatur**
   - memberikan ruang untuk testimoni atau ulasan dari donatur sebelumnya yang telah berpartisipasi dalam proyek-proyek donasi. dengan format :
      - nama donatur
      - nominal donasi
      - feedback komentar
      - jika di klik mengarah ke campaign yang di donasikan

---

### 2. List Donasi

1. Filter yang Penting
   - Kategori: Memberikan opsi untuk memfilter proyek berdasarkan kategori tertentu, misalnya bencana alam, pendidikan, kesehatan, dll.
   - Jumlah Dana yang Dibutuhkan: Memungkinkan pengguna untuk memfilter proyek berdasarkan rentang jumlah dana yang dibutuhkan.
   - Deadline: Menyediakan filter berdasarkan batas waktu atau tanggal deadline proyek.
   - Penggalang Dana: Menyediakan opsi untuk memfilter proyek berdasarkan nama atau identitas penggalang dana.
   - Status Verifikasi Penggalang Dana: Memungkinkan pengguna untuk memfilter proyek berdasarkan status verifikasi penggalang dana, seperti "Terverifikasi" atau "Belum Terverifikasi".

2. List Donasi (berdasarkan Kategori yang di pilih)
   - Nama Proyek: Menampilkan nama proyek yang membutuhkan dukungan donatur.
   - Jumlah Dana yang Dibutuhkan: Menampilkan jumlah dana yang dibutuhkan untuk mendukung proyek.
   - Deadline: Menyajikan tanggal atau batas waktu terakhir untuk mengumpulkan dana.
   - Nama Penggalang Dana: Menampilkan identitas atau nama penggalang dana yang bertanggung jawab atas proyek tersebut.
   - Status Verifikasi Penggalang Dana: Menampilkan status verifikasi penggalang dana, seperti "Terverifikasi" untuk penggalang dana yang telah diverifikasi oleh platform atau pihak yang berwenang.
   - jika di klik ke arah halaman [details](#details-donasi)

### 3. Penggalang Dana

1. Profil Penggalang Dana:
   - KYC personal penggalang Dana
   - KYC organisasi/yayasan penggalang Dana
   - Kontak dan Informasi Selengkapnya: Sediakan informasi kontak yang lengkap agar calon donatur dapat menghubungi penggalang dana untuk pertanyaan atau klarifikasi lebih lanjut. Juga, berikan tautan atau tombol yang mengarah ke halaman atau sumber lain yang memberikan informasi lebih lanjut tentang penggalang dana jika tersedia.
   - Sajikan informasi lengkap mengenai penggalang dana, termasuk nama, logo, gambar, atau video penggalang dana jika tersedia. Jelaskan latar belakang, misi, visi, dan nilai-nilai yang dijunjung tinggi oleh penggalang dana.

2. Donasi yang saya buat

   - list donasi yang sudah dibuat oleh user tersebut
   - ada opsi untuk membuat baru, dengan [format](#form-donasi) 

___





# component list
## Details Donasi
   1. Banner
   2. penggalang dana (status verifikasi : verified user, organisasi/yayasan official), jika di klik mengarah kehalaman details penggalang
   3. Tittle
   4. tab :
      - details, berisi details yang bisa berupa details 
      - rincian penggunaan dana
      - Donatur list

## form Donasi

