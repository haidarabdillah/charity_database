
# Satu Nusa: _Satu Jiwa, Satu Bangsa, Satu Nusa: Bersama Membantu, Bersama Menjaga_

## Deskripsi

Satu Nusa adalah platform donasi yang mengedepankan kebersamaan, solidaritas, dan gotong royong sebagai nilai inti. Kami hadir untuk menyatukan jiwa dan bangsa dalam upaya membantu sesama dan menjaga keberlanjutan. Melalui Satu Nusa, Anda dapat berpartisipasi dalam berbagai campaign donasi yang memiliki dampak nyata dalam memajukan masyarakat, lingkungan, dan kehidupan di sekitar kita. Bersama-sama, kita membentuk satu nusa yang berdaya, saling membantu, dan menjaga kehidupan yang lebih baik untuk semua. Bergabunglah dengan Satu Nusa dan berkontribusi dalam membangun masa depan yang lebih baik bagi negeri kita

___

# Fixed Component

## Header

- Logo Satu Nusa.
- Tombol pencarian
  - ketika dibuka /di klik akan memunculkan halaman tersendiri yang memblock semua halaman, serta memunculkan beberapa donasi sekitar, dan user mengetahui lokasi saat ini
  - memunculkan beberapa kategori secara default
  - memunculkan list donasi ketika user melakukan pencarian, maka akan muncul( list donasi dan  user dengan nama yang mirip)
- Notifikasi
  - jika klik maka muncul list notifikasi dengan kategori :
    - transaksi (deposit, donasi)
    - campaign (update dari campaign yang diikuti)
    - news
- Dark/Light Mode

## AUTH

1. Register
   - user memasukan nomor hp
   - user mendapatkan code HP
   - user verifikasi code Hp
   - user memasukan password dan confirmation password
2. Login
   - user memasukan nomor Hp
   - user memasukan password
3. Reset Password
   - user memasukan nomor hp
   - user mendapatkan code HP
   - user verifikasi code Hp
   - user memasukan password dan confirmation password

## Navigation

- [Home](#1-home)
- [List Donasi](#2-list-donasi)
- [Penggalang Dana](#penggalang)
- [Profile](#Profile)

___

### 1. **Home**

___

Beranda dari platform _Satu Nusa_ harus memberikan informasi yang cukup tentang platform dan memandu pengguna untuk melakukan tindakan yang diinginkan. Berikut adalah beberapa komponen yang ada di beranda:

1. Banner / Hero Section
   - Terdiri Dari 5 Gambar tanpa judul, judul sudah ada di banner tersebut
   - jika di klik mengarah ke [details donasi](#details-donasi)

2. Statistik dan Grafik
   - memberikan visual tentang seberapa banyak donasi yang telah terkumpul, jumlah donatur yang terlibat, dan jumlah campaign/donasi yang dibuat

3. campaign Sekitar(geo location)
   - user dapat melihat lokasi dia saat ini dimana
   - menampilkan campaign-campaign yang paling dekat dengan lokasi user saat ini dengan format [list donasi](#list-donasi)
4. campaign yang Paling Mendesak
   - menampilkan campaign-campaign yang paling membutuhkan dukungan dan perhatian donatur saat ini, dengan format [list donasi](#list-donasi)

5. Testimoni Donatur
   - memberikan ruang untuk testimoni atau ulasan dari donatur sebelumnya yang telah berpartisipasi dalam campaign-campaign donasi. dengan format  [testimoni donasi](#testimoni-donasi)

5. Berita Terbaru
    - memberikan informasi tentang sejauh mana proyek-proyek telah berkembang dalam mencapai target donasi mereka.
    - informasi dari admin jika ada pembaruan baru
    - kategori berita :
      1. campaign = merupakan update campaign jika di klik maka akan mengarah ke campaign yang diupdate
      2. news = berita yang dibuat oleh admin kalau di klik mengarah ke satu halaman blog view

---

### 2. List Donasi

1. Filter yang Penting
   - Kategori: Memberikan opsi untuk memfilter campaign berdasarkan kategori tertentu, misalnya bencana alam, pendidikan, kesehatan, dll. secara default bencana alam, pendidikan.
   - Jumlah Dana yang Dibutuhkan: Memungkinkan pengguna untuk memfilter campaign berdasarkan rentang jumlah dana yang dibutuhkan.
   - Deadline: Menyediakan filter berdasarkan batas waktu atau tanggal deadline campaign.
   - Penggalang Dana: Menyediakan opsi untuk memfilter campaign berdasarkan status penggalang dana, personal/yayasan
   - Status Verifikasi Penggalang Dana: Memungkinkan pengguna untuk memfilter campaign berdasarkan status verifikasi penggalang dana, seperti "Terverifikasi" atau "Belum Terverifikasi".

2. Donasi (berdasarkan Kategori yang di pilih)
   - list donasi berdasarkan komponen [donasi](#list-donasi)
   - jika di klik ke arah halaman [details](#details-donasi)

### 3. Penggalang Dana

1. Profil Penggalang Dana:
   - KYC personal penggalang Dana
      - ktp dan data diri lengkap
      - alamat dan geo map user
   - KYC organisasi/yayasan penggalang Dana
      - ktp pengurus yayasan
      - akta pendirian yayasan
      - alamat dan geo map yayasan
   - verifikasi bank account, bisa lebih dari satu bank dengan nama yang sama
   - Kontak dan Informasi Selengkapnya: Sediakan informasi kontak yang lengkap agar calon donatur dapat menghubungi penggalang dana untuk pertanyaan atau klarifikasi lebih lanjut. Juga, berikan tautan atau tombol yang mengarah ke halaman atau sumber lain yang memberikan informasi lebih lanjut tentang penggalang dana jika tersedia.
      - website ?
      - social media : ig, yt, facebook, twitter
   - Sajikan informasi lengkap mengenai penggalang dana, termasuk nama, logo, gambar, atau video penggalang dana jika tersedia. Jelaskan latar belakang, misi, visi, dan nilai-nilai yang dijunjung tinggi oleh penggalang dana.
      - profile picture/ logo wajib ada
      - visi-misi wajib ada untuk yayasan
      - latar belakang wajib ada untuk yayasan

2. Donasi yang saya buat

   - list donasi yang sudah dibuat oleh user tersebut dengan format:
      - banner
      - title
      - status :
         - selesai, terlihat dana yang belum dicairkan
         - jalan, terlihat kapan expirednya
      - dana terkumpul dari target, progress bar, jika sudah selesai tidak perlu ada
   - ada opsi untuk membuat baru, dengan format :
      1. title
      2. deskripsi, markdown, user bisa upload berupa text dan foto, youtube  link dengan tumbnail
      3. nominal yang dibutuhkan dengan rincian. dengan konsep seperti table/kalkulasi sebagai contoh : kebutuhan pengobatan ,
         - obat rawat jawal = 200.000
         - biaya pembelian popok =  500.000
         - total =  700.000

### 4 Settings

   1. Profil Pengguna: Menampilkan informasi pengguna seperti nama, foto profil, dan NOmor Hp serta  mengupdate informasi profil
   2. (tab) Riwayat Donasi: Menampilkan riwayat donasi yang telah dilakukan oleh pengguna, termasuk detail campaign yang didukung, tanggal donasi, dan jumlah donasi.
   3. Pengaturan Akun: Memungkinkan pengguna untuk mengelola pengaturan akun mereka, seperti mengubah kata sandi, mengatur preferensi notifikasi (disable/enable notif)
   4. Donasi Saya:
      - List Donasi yang di dukung (komponen [list](#list-donasi))
      - history Donasi (komponen [Testimoni donasi](#tes))
      - Pelacakan Donasi : Memungkinkan pengguna untuk melacak kemajuan donasi mereka, termasuk informasi tentang penggunaan dana, perkembangan campaign, atau laporan keuangan terkait. seperti berita terkait update terbaru dari
   6. Notifikasi: Menyediakan pemberitahuan kepada pengguna tentang perkembangan terbaru terkait campaign yang mereka dukung, pembaruan donasi, atau informasi penting lainnya, dengan kategori :
      - transaksi (deposit, donasi)
      - campaign (update dari campaign yang diikuti)
      - news
   7. Pertanyaan dan Dukungan: Menyediakan informasi kontak atau formulir penghubung untuk pengguna yang memiliki pertanyaan atau membutuhkan dukungan terkait donasi atau akun mereka.
   8. Pengaturan Privasi: Memungkinkan pengguna untuk mengatur preferensi privasi terkait informasi pribadi mereka dan bagaimana informasi tersebut dapat digunakan.

___

# Re-Use component

## List Donasi

1. Nama campaign/Title: Menampilkan nama campaign yang membutuhkan dukungan donatur.
2. Jumlah Dana yang Dibutuhkan: Menampilkan jumlah dana yang dibutuhkan untuk mendukung campaign.
3. Deadline: Menyajikan tanggal atau batas waktu terakhir untuk mengumpulkan dana.
4. Nama Penggalang Dana: Menampilkan identitas atau nama penggalang dana yang bertanggung jawab atas campaign tersebut.
5. Status Verifikasi Penggalang Dana: Menampilkan status verifikasi penggalang dana, seperti "Terverifikasi" untuk penggalang dana yang telah diverifikasi oleh platform atau pihak yang berwenang.

## Details Donasi

   1. Tittle
   1. Banner maksimal 5 banner
   2. penggalang dana (status verifikasi : verified user, organisasi/yayasan official), jika di klik mengarah kehalaman details penggalang
   3. button donasi
      - ketika user berinterasi, muncul popup form input dengan forrmat :
      - nominal, bisa milih semua balance, bisa milih minimal donasi, bisa input nominal donasi
   4. tab :
      - details dari campaign tersebut
      - rincian Dana :
         - kebuthan dana dengan rincianya
         - total dana terkumpul
         - dana yang sudah di cairkan
            - total yang dicairkan
            - sumbangan pengembangan platform
            - sisa balance yang belum dicairkan
         - history/timeline pencairan dana dengan keterangan update penggunaanya (disini hanya deskripsi singkat, jika di klik detals akan masuk ke halaman update/kabar terbaru campaign)
      - update/kabar terbaru, dengan kategori :
         - penyaluran
         - berita
         - pencairan dana
      - Donatur list, sesuai standar [Testimoni Donatur](#testimoni-donasi)

## Testimoni donasi

   1. nama donatur
   2. nominal donasi
   3. feedback komentar (jika ada)
   4. jika di klik mengarah ke campaign yang di donasikan
