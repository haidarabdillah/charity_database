# PhoneShop

## Feature

### **user**

- login via wa (otp) no pass // auth google
- user memilih
  - toko sekitar (setting radius)
    - map dengan lokasi toko
    - list dengan batasan radius per 5km
    - menuju lokasi toko
  - pencarian HP
    - kategori
    - nama phone (elastic search)
    - kondisi
  - list HP/Smartphone terlaris/promo sekitar
- invoice/pembelian
  - pembayaran via e-wallet, crypto, dan web3
- notifikasi
  - notifikasi via email
  - push notification
- realtime data
  - websocket status invoice
  - websocket kurir pengiriman ??

### **toko**

- login via wa / auth
- list barang/HP
  - list HP berdasar kategori (toko tidak bisa menambah kategori)
  - toko edit barang
  - HP baru
    - kategori
    - kondisi
    - harga
    - stok
- list pembelian user
  - confirm pembelian user
  - confirm pembelian user, untuk dikirim
  - reject pembelian

### admin

- login via wa / auth
- list kategori
- history transaksi all
- list user
  - email
  - history transaksi
- list toko
  - email
  - history transaksi
  - list barang toko
  - list transaksi
- settings
