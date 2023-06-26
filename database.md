
# Tabel `Users`

Tabel `users` digunakan untuk menyimpan informasi pengguna yang mendaftar ke platform. Berikut ini adalah penjelasan kolom-kolom yang ada dalam tabel `users`:

- `user_id`: Kolom ini adalah kunci utama (primary key) yang bertambah otomatis dan digunakan untuk mengidentifikasi setiap entri dalam tabel.
- `phone_number`: Kolom ini menyimpan nomor telepon pengguna. Setiap nomor telepon harus unik dan tidak boleh kosong (not nullable).
- `name`: Kolom ini menyimpan nama pengguna.
- `profile_picture`: Kolom ini menyimpan URL gambar profil pengguna.
- `is_name_hidden`: Kolom ini merupakan boolean yang menandakan apakah nama pengguna harus disembunyikan atau tidak. Nilai defaultnya adalah `false`, yang berarti nama pengguna tidak disembunyikan.
- `password_hash`: Kolom ini menyimpan hash dari password pengguna.
- `balance`: Kolom ini merupakan bilangan desimal yang menyimpan saldo pengguna. Nilai defaultnya adalah `0`.
- `is_fundraiser`: Kolom ini merupakan boolean yang menandakan apakah pengguna adalah seorang penggalang dana atau tidak. Nilai defaultnya adalah `false`.
- `created_at`: Kolom ini mencatat waktu pembuatan entri dalam tabel. Nilai defaultnya adalah waktu saat ini.
- `updated_at`: Kolom ini mencatat waktu terakhir entri diperbarui dalam tabel. Nilai defaultnya adalah waktu saat ini.

Tabel `users` digunakan untuk mengelola informasi pengguna, termasuk informasi pribadi, autentikasi, dan manajemen saldo.

## Korelasi Antar Tabel

- Tabel `users` dan `payment_methods` saling terkait melalui kolom `user_id` pada tabel `deposit_methode`. Hal ini memungkinkan untuk menghubungkan entri dalam tabel `deposit_methode` dengan pengguna yang sesuai dalam tabel `users`.
- Tabel `users` dan `payment_methods` juga saling terkait melalui kolom `payment_methods_id` pada tabel `deposit_methode`. Dengan adanya korelasi ini, entri dalam tabel `deposit_methode` dapat terhubung dengan metode pembayaran yang sesuai dalam tabel `payment_methods`.
- Tabel `users` terkait dengan tabel `deposit_history` melalui kolom `user_id` pada tabel `deposit_history`. Ini memungkinkan untuk menghubungkan entri dalam tabel `deposit_history` dengan pengguna yang terkait dalam tabel `users`.
- Tabel `payment_methods` terkait dengan tabel `deposit_history` melalui kolom `payment_method_id` pada tabel `deposit_history`. Dengan adanya korelasi ini, entri dalam tabel `deposit_history` dapat terhubung dengan metode pembayaran yang sesuai dalam tabel `payment_methods`.
- Tabel `users` terkait dengan tabel `fundraiser_profile` melalui kolom `user_id` pada tabel `fundraiser_profile`. Dengan adanya korelasi ini, entri dalam tabel `fundraiser_profile` dapat terhubung dengan pengguna yang terkait dalam tabel `users`.
- Tabel `fundraiser_profile` terkait dengan tabel `fundraiser_kyc_org` melalui kolom `fundraiser_id` pada tabel `fundraiser_kyc_org`. Dengan adanya korelasi ini, entri dalam tabel `fundraiser_kyc_org` dapat terhubung dengan profil penggalang dana yang sesuai dalam tabel `fundraiser_profile`.


# Tabel `payment_methods`

Tabel `payment_methods` digunakan untuk menyimpan daftar bank yang valid untuk deposit dan withdrawal.

## Kolom:

- `id`: Kunci utama bertambah otomatis yang digunakan untuk mengidentifikasi setiap entri dalam tabel.
- `method_code`: Kolom yang menyimpan kode metode pembayaran.
- `method_type`: Kolom dengan tipe ENUM yang menentukan jenis metode pembayaran, yang dapat bernilai 'bank' atau 'e-wallet'.
- `minimum_deposit`: Kolom yang menyimpan jumlah minimum untuk deposit.
- `minimum_withdrawal`: Kolom yang menyimpan jumlah minimum untuk withdrawal.
- `enable_deposit`: Kolom boolean yang menandakan apakah deposit diaktifkan atau tidak (default: true).
- `enable_withdrawal`: Kolom boolean yang menandakan apakah withdrawal diaktifkan atau tidak (default: true).
- `url_log`: Kolom yang menyimpan URL log terkait metode pembayaran.

Tabel `payment_methods` digunakan untuk mengelola daftar metode pembayaran yang tersedia dalam platform, termasuk informasi seperti jenis metode pembayaran, batas minimum untuk deposit dan withdrawal, dan pengaturan aktivasi deposit dan withdrawal.

## korelasi 
Tabel `payment_methods` memiliki korelasi dengan tabel-tabel berikut:

1. Tabel `deposit_methode`:
   - Kolom `payment_methods.id` terhubung ke kolom `deposit_methode.payment_methods_id`. Hal ini memungkinkan untuk menghubungkan entri dalam tabel `deposit_methode` dengan metode pembayaran yang sesuai dalam tabel `payment_methods`.
   - Kolom `users.id` terhubung ke kolom `deposit_methode.user_id`. Ini memungkinkan untuk menghubungkan entri dalam tabel `deposit_methode` dengan pengguna yang terkait dalam tabel `users`.

2. Tabel `deposit_history`:
   - Kolom `payment_methods.id` terhubung ke kolom `deposit_history.payment_method_id`. Dengan korelasi ini, entri dalam tabel `deposit_history` dapat terhubung dengan metode pembayaran yang sesuai dalam tabel `payment_methods`.
   - Kolom `users.id` terhubung ke kolom `deposit_history.user_id`. Ini memungkinkan untuk menghubungkan entri dalam tabel `deposit_history` dengan pengguna yang terkait dalam tabel `users`.

Dengan korelasi ini, tabel `payment_methods` dapat digunakan untuk mengelola daftar metode pembayaran yang valid, sedangkan tabel `deposit_methode` dan `deposit_history` dapat digunakan untuk mencatat transaksi deposit menggunakan metode pembayaran yang terkait. Tabel `users` juga terlibat dalam korelasi ini, memungkinkan untuk menghubungkan pengguna dengan metode pembayaran dan transaksi yang terkait.


# Tabel `deposit_methode`

Tabel `deposit_methode` digunakan untuk menyimpan informasi tentang metode deposit yang tersedia untuk setiap pengguna.

## Kolom:

- `id`: Kunci utama bertambah otomatis yang digunakan untuk mengidentifikasi setiap entri dalam tabel.
- `user_id`: Kolom yang menyimpan ID pengguna yang terkait dengan metode deposit.
- `payment_methods_id`: Kolom yang menyimpan ID metode pembayaran yang terkait dengan metode deposit.
- `external_id`: Kolom yang menyimpan ID eksternal terkait metode deposit.
- `account_number`: Kolom yang menyimpan nomor rekening terkait metode deposit.
- `name`: Kolom yang menyimpan nama terkait metode deposit.
- `status`: Kolom yang menyimpan status terkait metode deposit.
- `expiration_date`: Kolom yang menyimpan tanggal kadaluarsa terkait metode deposit.
- `created_at`: Kolom yang mencatat waktu pembuatan entri dalam tabel (nilai default: saat ini).
- `updated_at`: Kolom yang mencatat waktu terakhir entri diperbarui dalam tabel (nilai default: saat ini).

Tabel `deposit_methode` digunakan untuk mengelola informasi metode deposit yang tersedia untuk pengguna, termasuk data seperti ID pengguna yang terkait, ID metode pembayaran, nomor rekening, status, dan lainnya. Korelasi dengan tabel `users` dan `payment_methods` memungkinkan untuk mengaitkan metode deposit dengan pengguna dan metode pembayaran yang sesuai.