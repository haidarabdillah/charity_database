### Deskripsi Singkat

Ethereum API Wrapper (EAW) adalah alat sederhana yang memudahkan pengembang untuk berkomunikasi dengan blockchain Ethereum. Platform ini berfungsi sebagai lapisan abstraksi yang mengubah data mentah dari Ethereum menjadi format yang bersih dan konsisten.

### Fitur Utama

- **Endpoint API**: EAW menyediakan endpoint yang mudah digunakan untuk mengambil data seperti transaksi, informasi kontrak, dan detail akun.
- **Format Data yang Konsisten**: Semua data yang dikembalikan oleh EAW telah diformat dengan cara yang konsisten, memudahkan pengolahan data.
- **Performa Tinggi**: EAW dirancang untuk menangani permintaan dalam jumlah besar dengan cepat dan andal.

### List Endpoint

### 1. /createAddress
___


**Deskripsi**: Endpoint ini digunakan untuk membuat alamat Ethereum baru yang meliputi alamat itu sendiri, private key, dan 12 kata mnemonic.

**Method**: POST

**Parameters**: Tidak ada parameter input spesifik yang diperlukan untuk endpoint ini. 

**Request example**: `/createAddress`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi alamat Ethereum yang baru dibuat, private key, dan 12 kata mnemonic.

**Contoh response**:

```json
{
    "address": "0x0...",
    "privateKey": "0x0...",
    "mnemonic": "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12"
}
```

**Detail Field Response**:
- `address`: Ini adalah alamat Ethereum yang baru dibuat. Ini akan digunakan untuk menerima dan mengirim Ether dan token lainnya.
- `privateKey`: Ini adalah kunci privat yang sesuai dengan alamat yang baru dibuat. Ini digunakan untuk menandatangani transaksi dan harus disimpan dengan aman.
- `mnemonic`: Ini adalah 12 kata mnemonic yang digunakan untuk mengembalikan alamat Ethereum dan kunci privatnya jika hilang. Kata-kata ini harus disimpan di tempat yang aman dan tidak boleh dibagikan dengan siapa pun. 

### 2. /getLatestBlock
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan detail tentang blok terbaru dalam rantai Ethereum.

**Method**: GET

**Parameters**: Tidak ada parameter input spesifik yang diperlukan untuk endpoint ini.

**Request example**: `/getLatestBlock`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi detail tentang blok terbaru.

**Contoh response**:

```json
{
    "number": 9000000,
    "hash": "0x0...",
    "parentHash": "0x0...",
    "nonce": "0x0...",
    "sha3Uncles": "0x0...",
    "logsBloom": "0x0...",
    "transactionsRoot": "0x0...",
    "stateRoot": "0x0...",
    "receiptsRoot": "0x0...",
    "miner": "0x0...",
    "difficulty": 314159265,
    "totalDifficulty": 9007199254740991,
    "extraData": "0x0...",
    "size": 1000,
    "gasLimit": 8000029,
    "gasUsed": 7999999,
    "timestamp": 1577836800,
    "transactions": [
        // List of transaction hashes
    ],
    "uncles": [
        // List of uncle hashes
    ]
}
```

**Detail Field Response**:
- `number`: Nomor blok terbaru dalam rantai Ethereum.
- `hash`: Hash blok terbaru.
- `parentHash`: Hash blok sebelumnya.
- `nonce`: Nilai nonce blok terbaru.
- `sha3Uncles`: SHA3 dari uncles (blok yang dimasukkan ke dalam blok terbaru sebagai "uncles" atau "om-om").
- `logsBloom`: Hash dari log transaksi.
- `transactionsRoot`: Merkle root dari transaksi dalam blok terbaru.
- `stateRoot`: Merkle root dari state setelah blok terbaru dieksekusi.
- `receiptsRoot`: Merkle root dari receipt transaksi setelah semua transaksi terkait dieksekusi.
- `miner`: Alamat dari pengguna yang menambang blok terbaru.
- `difficulty`: Kesulitan blok terbaru.
- `totalDifficulty`: Kesulitan total sampai blok terbaru.
- `extraData`: Data ekstra yang ditambahkan oleh miner.
- `size`: Ukuran blok terbaru dalam bytes.
- `gasLimit`: Limit gas untuk blok terbaru.
- `gasUsed`: Jumlah gas yang digunakan dalam blok terbaru.
- `timestamp`: Waktu ketika blok terbaru dibuat, dalam detik sejak Unix Epoch.
- `transactions`: Daftar hash transaksi yang termasuk dalam blok terbaru.
- `uncles`: Daftar hash blok yang termasuk sebagai uncles dalam blok terbaru.

### 3. /getBlockByHeight/{height}
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan detail sebuah blok dalam Ethereum berdasarkan tinggi blok.

**Method**: GET

**Parameters**:
- `height` (dalam URL): Ini adalah tinggi blok yang Anda ingin tahu detailnya.

**Request example**: `/getBlockByHeight/9000000`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi detail tentang blok.

**Contoh response**:

```json
{
    "number": 9000000,
    "hash": "0x0...",
    "parentHash": "0x0...",
    "nonce": "0x0...",
    "sha3Uncles": "0x0...",
    "logsBloom": "0x0...",
    "transactionsRoot": "0x0...",
    "stateRoot": "0x0...",
    "receiptsRoot": "0x0...",
    "miner": "0x0...",
    "difficulty": 314159265,
    "totalDifficulty": 9007199254740991,
    "extraData": "0x0...",
    "size": 1000,
    "gasLimit": 8000029,
    "gasUsed": 7999999,
    "timestamp": 1577836800,
    "transactions": [
        // List of transaction hashes
    ],
    "uncles": [
        // List of uncle hashes
    ]
}
```

**Detail Field Response**:
- `number`: Nomor blok.
- `hash`: Hash blok unik.
- `parentHash`: Hash dari blok sebelumnya.
- `nonce`: Nilai nonce untuk blok ini.
- `sha3Uncles`: SHA3 dari uncles (blok yang dimasukkan ke dalam blok ini sebagai "uncles" atau "om-om").
- `logsBloom`: Hash dari log transaksi.
- `transactionsRoot`: Merkle root dari transaksi dalam blok ini.
- `stateRoot`: Merkle root dari state setelah blok ini dieksekusi.
- `receiptsRoot`: Merkle root dari receipt transaksi setelah semua transaksi dieksekusi.
- `miner`: Alamat dari pengguna yang menambang blok ini.
- `difficulty`: Kesulitan blok ini.
- `totalDifficulty`: Kesulitan total sampai blok ini.
- `extraData`: Data ekstra yang ditambahkan oleh miner.
- `size`: Ukuran blok dalam bytes.
- `gasLimit`: Limit gas untuk blok ini.
- `gasUsed`: Jumlah gas yang digunakan dalam blok ini.
- `timestamp`: Waktu ketika blok ini dibuat, dalam detik sejak Unix Epoch.
- `transactions`: Daftar hash transaksi yang termasuk dalam blok ini.
- `uncles`: Daftar hash blok yang termasuk sebagai uncles dalam blok ini.

### 4. /getBlockByHash/{hash}
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan detail sebuah blok dalam Ethereum berdasarkan hash blok.

**Method**: GET

**Parameters**:
- `hash` (dalam URL): Ini adalah hash blok yang unik yang Anda ingin tahu detailnya.

**Request example**: `/getBlockByHash/0x0...`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi detail tentang blok.

**Contoh response**:

```json
{
    "number": 9000000,
    "hash": "0x0...",
    "parentHash": "0x0...",
    "nonce": "0x0...",
    "sha3Uncles": "0x0...",
    "logsBloom": "0x0...",
    "transactionsRoot": "0x0...",
    "stateRoot": "0x0...",
    "receiptsRoot": "0x0...",
    "miner": "0x0...",
    "difficulty": 314159265,
    "totalDifficulty": 9007199254740991,
    "extraData": "0x0...",
    "size": 1000,
    "gasLimit": 8000029,
    "gasUsed": 7999999,
    "timestamp": 1577836800,
    "transactions": [
        // List of transaction hashes
    ],
    "uncles": [
        // List of uncle hashes
    ]
}
```

**Detail Field Response**:
- `number`: Nomor blok.
- `hash`: Hash blok unik.
- `parentHash`: Hash dari blok sebelumnya.
- `nonce`: Nilai nonce untuk blok ini.
- `sha3Uncles`: SHA3 dari uncles (blok yang dimasukkan ke dalam blok ini sebagai "uncles" atau "om-om").
- `logsBloom`: Hash dari log transaksi.
- `transactionsRoot`: Merkle root dari transaksi dalam blok ini.
- `stateRoot`: Merkle root dari state setelah blok ini dieksekusi.
- `receiptsRoot`: Merkle root dari receipt transaksi setelah semua transaksi dieksekusi.
- `miner`: Alamat dari pengguna yang menambang blok ini.
- `difficulty`: Kesulitan blok ini.
- `totalDifficulty`: Kesulitan total sampai blok ini.
- `extraData`: Data ekstra yang ditambahkan oleh miner.
- `size`: Ukuran blok dalam bytes.
- `gasLimit`: Limit gas untuk blok ini.
- `gasUsed`: Jumlah gas yang digunakan dalam blok ini.
- `timestamp`: Waktu ketika blok ini dibuat, dalam detik sejak Unix Epoch.
- `transactions`: Daftar hash transaksi yang termasuk dalam blok ini.
- `uncles`: Daftar hash blok yang termasuk sebagai uncles dalam blok ini.


### 5. /getTransactionByBlock/{blockHeight}
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan daftar transaksi yang ada dalam sebuah blok tertentu berdasarkan tinggi bloknya (block height).

**Method**: GET

**Parameters**:
- `blockHeight` (dalam URL): Ini adalah tinggi blok (block number) yang Anda inginkan untuk melihat transaksinya. Tinggi blok adalah urutan blok dalam blockchain Ethereum, dimulai dari 0 (blok genesis).

**Request example**: `/getTransactionByBlock/9000000`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi array transaksi. Setiap transaksi adalah objek dengan detail transaksi.

**Contoh response**:

```json
{
    "blockHeight": 9000000,
    "transactions": [
        {
            "from": "0x0...",
            "to": "0x0...",
            "value": 1225500,
            "hash": "0x0...",
            "nonce": 2,
            "gasPrice": 20000000000,
            "gasUsed": 21000,
            "input": "0x0...",
            "contractAddress": "0x0...",
            "status": "success",
            "isNative": true
        },
        {
            "from": "0x0...",
            "to": "0x0...",
            "value": 100000,
            "hash": "0x0...",
            "nonce": 3,
            "gasPrice": 20000000000,
            "gasUsed": 21000,
            "input": "0x0...",
            "contractAddress": "0x0...",
            "status": "success",
            "isNative": false
        }
        // More transactions...
    ]
}
```

**Detail Field Response**:
- `blockHeight`: Tinggi blok tempat transaksi ini terjadi.
- `transactions`: Ini adalah array yang berisi transaksi.
  - `from`: Alamat pengirim transaksi.
  - `to`: Alamat penerima transaksi.
  - `value`: Jumlah Ether yang dikirim dalam transaksi. Nilainya dalam satuan wei, yang merupakan satuan terkecil dari Ether.
  - `hash`: Hash transaksi unik.
  - `nonce`: Jumlah transaksi yang dikirim oleh pengirim.
  - `gasPrice`: Harga gas yang ditetapkan oleh pengirim dalam transaksi, dalam wei.
  - `gasUsed`: Jumlah gas yang digunakan dalam transaksi.
  - `input`: Data yang dikirim bersama dengan transaksi. Ini biasanya digunakan saat berinteraksi dengan kontrak pintar.
  - `contractAddress`: Jika transaksi ini menciptakan kontrak baru, ini adalah alamat kontrak tersebut. Jika bukan merupakan transaksi pembuatan kontrak, maka nilainya akan null.
  - `status`: Status transaksi, biasanya "success" atau "fail".
  - `isNative`: Nilai boolean yang menunjukkan apakah transaksi ini adalah transaksi Ether asli (true) atau transaksi kontrak pintar (false).

### 6. /getTransactionByHash/{hash}
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan detail sebuah transaksi Ethereum berdasarkan hash transaksi.

**Method**: GET

**Parameters**:
- `hash` (dalam URL): Ini adalah hash transaksi yang unik yang Anda ingin tahu detailnya.

**Request example**: `/getTransactionByHash/0x0...`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi detail tentang transaksi.

**Contoh response**:

```json
{
    "from": "0x0...",
    "to": "0x0...",
    "value": 1225500,
    "hash": "0x0...",
    "nonce": 2,
    "gasPrice": 20000000000,
    "gasUsed": 21000,
    "input": "0x0...",
    "contractAddress": "0x0...",
    "status": "success",
    "isNative": true,
    "blockNumber": 9000000
}
```

**Detail Field Response**:
- `from`: Alamat pengirim transaksi.
- `to`: Alamat penerima transaksi.
- `value`: Jumlah Ether yang dikirim dalam transaksi. Nilainya dalam satuan wei, yang merupakan satuan terkecil dari Ether.
- `hash`: Hash transaksi unik.
- `nonce`: Jumlah transaksi yang dikirim oleh pengirim.
- `gasPrice`: Harga gas yang ditetapkan oleh pengirim dalam transaksi, dalam wei.
- `gasUsed`: Jumlah gas yang digunakan dalam transaksi.
- `input`: Data yang dikirim bersama dengan transaksi. Ini biasanya digunakan saat berinteraksi dengan kontrak pintar.
- `contractAddress`: Jika transaksi ini menciptakan kontrak baru, ini adalah alamat kontrak tersebut. Jika bukan merupakan transaksi pembuatan kontrak, maka nilainya akan null.
- `status`: Status transaksi, biasanya "success" atau "fail".
- `isNative`: Nilai boolean yang menunjukkan apakah transaksi ini adalah transaksi Ether asli (true) atau transaksi kontrak pintar (false).
- `blockNumber`: Nomor blok tempat transaksi ini terjadi.

### 7. /getAccountBalance/{address}
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan saldo Ethereum dari suatu alamat yang diberikan.

**Method**: GET

**Parameters**:
- `address` (dalam URL): Alamat Ethereum yang ingin Anda periksa saldonya.

**Request example**: `/getAccountBalance/0x0...`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi saldo Ethereum dari alamat yang diberikan.

**Contoh response**:

```json
{
    "address": "0x0...",
    "balance": 1225500
}
```

**Detail Field Response**:
- `address`: Alamat Ethereum yang saldo Ether-nya sedang diperiksa.
- `balance`: Jumlah saldo Ethereum yang ada dalam alamat tersebut. Nilainya dalam satuan wei, yang merupakan satuan terkecil dari Ether.

### 8. /getTokenBalance/{address}/{contract}
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan saldo token ERC-20 dari suatu alamat yang diberikan.

**Method**: GET

**Parameters**:
- `address` (dalam URL): Alamat Ethereum yang ingin Anda periksa saldo token ERC-20-nya.
- `contract` (dalam URL): Alamat kontrak token ERC-20 yang ingin Anda periksa saldo tokennya.

**Request example**: `/getTokenBalance/0x0.../0x0...`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi saldo token ERC-20 dari alamat yang diberikan.

**Contoh response**:

```json
{
    "address": "0x0...",
    "contract": "0x0...",
    "balance": 1000
}
```

**Detail Field Response**:
- `address`: Alamat Ethereum yang saldo token ERC-20-nya sedang diperiksa.
- `contract`: Alamat kontrak token ERC-20 yang saldo tokennya sedang diperiksa.
- `balance`: Jumlah saldo token ERC-20 yang ada dalam alamat tersebut.

### 9. /getTransactionHistory/{address}
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan riwayat transaksi dari suatu alamat (address) pada jaringan blockchain. Klien dapat memilih jenis transaksi yang ingin ditampilkan, apakah hanya transaksi Ethereum, hanya transaksi token, atau keduanya. Server akan memeriksa transaksi yang terkait dengan alamat yang diberikan dan mengembalikan riwayat transaksi sesuai dengan pilihan yang diminta oleh klien.

Metode: GET

Parameter Input:
- `address`: Alamat blockchain yang ingin diperiksa riwayat transaksinya.
- `type` (opsional): Jenis transaksi yang ingin ditampilkan. Nilai yang valid: "ethereum" (hanya transaksi Ethereum), "token" (hanya transaksi token), atau "all" (keduanya). Jika tidak disertakan, maka secara default akan menampilkan semua jenis transaksi.

Contoh Request:
```
GET /getTransactionHistory/0x0...?type=ethereum
```
```
GET /getTransactionHistory/0x0...?type=token
```
```
GET /getTransactionHistory/0x0...?type=all
```

Contoh Response:
```json
{
    "transactions": [
        {
            "from": "0x0...",
            "to": "0x0...",
            "value": 1000000000000000000,
            "hash": "0x0...",
            "blockNumber": 1000000,
            "timestamp": 1624567890,
            "native": true,
            "contractAddress": ""
        },
        {
            "from": "0x0...",
            "to": "0x0...",
            "tokenSymbol": "TKN",
            "tokenName": "Token Name",
            "tokenDecimal": 18,
            "value": 500,
            "hash": "0x0...",
            "blockNumber": 999999,
            "timestamp": 1624567800,
            "native": false,
            "contractAddress": "0x0..."
        },
        ...
    ]
}
```

Parameter Output:
- `transactions`: Array transaksi yang terkait dengan alamat yang diberikan dan jenis transaksi yang diminta.
  - `from`: Alamat pengirim transaksi.
  - `to`: Alamat penerima transaksi.
  - `value`: Jumlah aset yang dikirimkan dalam transaksi.
  - `hash`: Hash transaksi.
  - `blockNumber`: Nomor blok di mana transaksi tersebut terjadi.
  - `timestamp`: Waktu transaksi dalam format UNIX timestamp.
  - `native` (hanya pada transaksi Ethereum): Boolean yang menunjukkan apakah transaksi merupakan transaksi Ethereum asli (true) atau transaksi dengan kontrak token ERC-20 (false).
  - `contractAddress` (hanya pada transaksi token): Alamat kontrak token ERC-20 yang terlibat dalam transaksi.

Deskripsi: Klien mengirimkan permintaan untuk mendapatkan riwayat transaksi dari suatu alamat blockchain dengan menyertakan alamat yang ingin diperiksa dan pilihan jenis transaksi. Server akan memeriksa transaksi yang terkait dengan alamat tersebut dan mengembalikan riwayat transaksi sesuai dengan jenis transaksi yang diminta oleh klien.

Respon dari server berisi array transaksi yang terkait dengan alamat yang diberikan dan jenis transaksi yang diminta. Klien dapat menggunakan inform

asi ini untuk melacak riwayat transaksi dan menganalisis aktivitas yang terjadi pada alamat blockchain tersebut. Setiap transaksi akan mencakup informasi seperti alamat pengirim, alamat penerima, jumlah aset yang dikirimkan, hash transaksi, nomor blok, timestamp, serta kolom tambahan `native` dan `contractAddress` untuk membedakan transaksi Ethereum dan transaksi token.

### 10. /getTokenTransactionHistory
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan riwayat transaksi token ERC-20 dari suatu alamat (address) dengan menggunakan alamat kontrak token ERC-20 yang ditentukan (contractAddress) pada jaringan blockchain. Klien mengirimkan permintaan dengan metode POST dan menyertakan data berupa alamat dan alamat kontrak untuk memperoleh riwayat transaksi token ERC-20 yang terkait.

Metode: POST

Parameter Input (dalam body request):
```json
{
  "address": "0x0...",
  "contractAddress": "0x0..."
}
```

Contoh Request:
```
POST /getTokenTransactionHistory
Content-Type: application/json

{
  "address": "0x0...",
  "contractAddress": "0x0..."
}
```

Contoh Response:
```json
{
  "transactions": [
    {
      "from": "0x0...",
      "to": "0x0...",
      "value": 100,
      "hash": "0x0...",
      "blockNumber": 1000000,
      "timestamp": 1624567890
    },
    {
      "from": "0x0...",
      "to": "0x0...",
      "value": 50,
      "hash": "0x0...",
      "blockNumber": 999999,
      "timestamp": 1624567800
    },
    ...
  ]
}
```

Parameter Output:
- `transactions`: Array transaksi token ERC-20 yang terkait dengan alamat dan kontrak token yang diberikan.
  - `from`: Alamat pengirim transaksi.
  - `to`: Alamat penerima transaksi.
  - `value`: Jumlah token ERC-20 yang dikirimkan dalam transaksi.
  - `hash`: Hash transaksi Ethereum.
  - `blockNumber`: Nomor blok di mana transaksi tersebut terjadi.
  - `timestamp`: Waktu transaksi dalam format UNIX timestamp.

Deskripsi: Klien mengirimkan permintaan dengan metode POST untuk mendapatkan riwayat transaksi token ERC-20 dari suatu alamat Ethereum dengan menggunakan alamat dan alamat kontrak token ERC-20 yang ditentukan. Data yang diperlukan, yaitu alamat dan alamat kontrak, disertakan dalam body request dengan format JSON.

Server akan memeriksa transaksi token ERC-20 yang terkait dengan alamat dan alamat kontrak yang diberikan, dan mengembalikan riwayat transaksi dalam format JSON. Setiap transaksi akan mencakup informasi seperti alamat pengirim, alamat penerima, jumlah token ERC-20 yang dikirimkan, hash transaksi, nomor blok, dan timestamp.

Respon dari server berisi array transaksi token ERC-20 yang terkait dengan alamat dan alamat kontrak yang diberikan. Klien dapat menggunakan informasi ini untuk melacak riwayat transaksi token ERC-20 yang terkait dengan alamat dan kontrak token yang ditentukan.

### 11. /getGasPrice
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan harga gas yang disarankan saat ini dalam Ethereum.

**Method**: GET

**Parameters**: Tidak ada parameter input yang diperlukan untuk endpoint ini.

**Request example**: `/getGasPrice`

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi harga gas yang disarankan saat ini.

**Contoh response**:

```json
{
    "gasPrice": 20000000000
}
```

**Detail Field Response**:
- `gasPrice`: Harga gas yang disarankan saat ini dalam wei. Harga gas menentukan biaya yang harus dibayarkan untuk setiap unit gas yang digunakan dalam sebuah transaksi. Harga gas bisa berfluktuasi tergantung pada kondisi pasar dan tingkat kepadatan jaringan Ethereum.

### 12. /getGasEstimate
___

**Deskripsi**: Endpoint ini digunakan untuk mendapatkan estimasi gas untuk transaksi tertentu dalam Ethereum.

**Method**: POST

**Parameters**:
- `transaction`: Objek JSON yang mewakili transaksi Ethereum yang ingin Anda estimasi gasnya. Parameter ini dikirim dalam body permintaan.

**Contoh request body**:

```json
{
    "from": "0x0...",
    "to": "0x0...",
    "value": 1000000000000000000,
    "data": "0x0..."
}
```

**Response**: Respon dari panggilan ini adalah objek JSON yang berisi estimasi gas untuk transaksi yang diberikan.

**Contoh response**:

```json
{
    "gasEstimate": 21000
}
```

**Detail Field Response**:
- `gasEstimate`: Estimasi jumlah gas yang diperlukan untuk mengeksekusi transaksi. Ini adalah angka non-negatif yang menunjukkan unit gas.


### 13. /prepareAndSignTransaction
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mempersiapkan dan menandatangani transaksi Ethereum. Server akan menghitung estimasi gas (`gasLimit`) dan nonce terbaru untuk alamat pengirim, sedangkan klien hanya perlu menyertakan informasi dasar seperti alamat pengirim, alamat penerima, jumlah Ether yang ingin dikirimkan, dan opsional data tambahan.

Method: POST

Parameters:
- `from`: Alamat pengirim transaksi.
- `to`: Alamat penerima transaksi.
- `value`: Jumlah Ether yang ingin dikirimkan dalam transaksi.

Contoh request body:

```json
{
    "from": "0x0...",
    "to": "0x0...",
    "value": 1000000000000000000
}
```

Input Data Sisi Server:
- Alamat Pengirim (`from`): Alamat Ethereum dari pengirim transaksi.
- Alamat Penerima (`to`): Alamat Ethereum dari penerima transaksi.
- Jumlah Ether (`value`): Jumlah Ether yang ingin dikirimkan dalam transaksi.

Server akan mempersiapkan transaksi Ethereum berdasarkan informasi yang diberikan oleh klien. Selanjutnya, server akan menghitung estimasi gas (`gasLimit`) dan nonce terbaru (`nonce`) untuk transaksi yang dipersiapkan. Setelah itu, server akan mengirimkan respons berupa transaksi Ethereum yang telah dipersiapkan kepada klien, termasuk estimasi gas, nonce, dan placeholder untuk tanda tangan transaksi.

Klien akan menggunakan private key yang dimilikinya untuk menandatangani transaksi tersebut sebelum mengirimkannya ke jaringan Ethereum. Setelah ditandatangani, transaksi yang lengkap dengan tanda tangan akan dikirim kembali ke server untuk dikirimkan ke jaringan Ethereum melalui endpoint `/sendTransaction`.


### 14. /prepareAndSignERC20Transaction
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mempersiapkan dan menandatangani transaksi ERC-20. Server akan menghitung estimasi gas (`gasLimit`) dan nonce terbaru untuk alamat pengirim, sedangkan klien hanya perlu menyertakan informasi dasar seperti alamat pengirim, alamat kontrak token ERC-20, alamat penerima, jumlah token yang ingin dikirimkan, dan opsional data tambahan.

Method: POST

Parameters:
- `from`: Alamat pengirim transaksi.
- `tokenContract`: Alamat kontrak token ERC-20.
- `to`: Alamat penerima transaksi.
- `amount`: Jumlah token ERC-20 yang ingin dikirimkan.

Contoh request body:

```json
{
    "from": "0x0...",
    "tokenContract": "0x0...",
    "to": "0x0...",
    "amount": 100,
}
```

Input Data Sisi Server:
- Alamat Pengirim (`from`): Alamat Ethereum dari pengirim transaksi.
- Alamat Kontrak Token ERC-20 (`tokenContract`): Alamat kontrak token ERC-20.
- Alamat Penerima (`to`): Alamat Ethereum dari penerima transaksi.
- Jumlah Token ERC-20 (`amount`): Jumlah token ERC-20 yang ingin dikirimkan.

Server akan mempersiapkan transaksi ERC-20 berdasarkan informasi yang diberikan oleh klien. Selanjutnya, server akan menghitung estimasi gas (`gasLimit`) dan nonce terbaru (`nonce`) untuk transaksi yang dipersiapkan. Setelah itu, server akan mengirimkan respons berupa transaksi ERC-20 yang telah dipersiapkan kepada klien, termasuk estimasi gas, nonce, dan placeholder untuk tanda tangan transaksi.

Klien akan menggunakan private key yang dimilikinya untuk menandatangani transaksi tersebut sebelum mengirimkannya ke jaringan Ethereum. Setelah ditandatangani, transaksi yang lengkap dengan tanda tangan akan dikirim kembali ke server untuk dikirimkan ke jaringan Ethereum melalui endpoint `/sendTransaction`.


### 15. /sendTransaction
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mengirim transaksi yang telah ditandatangani ke jaringan Ethereum. Klien mengirimkan permintaan dengan metode POST dan menyertakan data transaksi yang telah ditandatangani dalam format yang sesuai dengan standar Ethereum.

Metode: POST

Parameter Input (dalam body request):
```json
{
  "signedTransaction": "0x..."
}
```

Contoh Request:
```
POST /sendTransaction
Content-Type: application/json

{
  "signedTransaction": "0x..."
}
```

Contoh Response:
```json
{
  "transactionHash": "0x..."
}
```

Parameter Output:
- `transactionHash`: Hash transaksi yang berhasil dikirim ke jaringan Ethereum.

Deskripsi: Klien mengirimkan permintaan dengan metode POST untuk mengirimkan transaksi yang telah ditandatangani ke jaringan Ethereum. Data yang diperlukan adalah transaksi yang telah ditandatangani, yang disertakan dalam body request dengan format JSON.

Server akan memproses transaksi yang diberikan dan mengirimkannya ke jaringan Ethereum. Jika transaksi berhasil terkirim, server akan mengembalikan hash transaksi yang merupakan identifikasi unik untuk transaksi tersebut.

Respon dari server berisi hash transaksi yang berhasil dikirim ke jaringan Ethereum. Klien dapat menggunakan hash ini untuk melacak status dan detail transaksi menggunakan blockchain explorer atau API lainnya.


### 16. /getReceipt/{hash}
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan informasi receipt (bukti) dari sebuah transaksi berdasarkan hash transaksi. Server akan memeriksa hash transaksi yang diberikan dan mengembalikan informasi receipt yang terkait, termasuk data seperti pengirim, penerima, alamat kontrak, log, jumlah gas yang digunakan, dan lainnya.

Metode: GET

Parameter Input:
- `hash`: Hash transaksi yang ingin diperiksa receipt-nya.

Contoh Request:
```
GET /getReceipt/0x...
```

Contoh Response:
```json
{
  "transactionHash": "0x...",
  "transactionIndex": 1,
  "blockHash": "0x...",
  "blockNumber": 1000000,
  "from": "0x0...",
  "to": "0x0...",
  "contractAddress": "0x...",
  "logs": [
    {
      "logIndex": 0,
      "address": "0x...",
      "topics": [
        "0x...",
        "0x..."
      ],
      "data": "0x...",
      "blockNumber": 1000000,
      "transactionHash": "0x..."
    },
    ...
  ],
  "status": true,
  "gasUsed": 21000,
  "cumulativeGasUsed": 42000
}
```

Parameter Output:
- `transactionHash`: Hash transaksi yang terkait dengan receipt.
- `transactionIndex`: Indeks transaksi di dalam blok.
- `blockHash`: Hash blok di mana transaksi tersebut dimasukkan.
- `blockNumber`: Nomor blok di mana transaksi tersebut terjadi.
- `from`: Alamat pengirim transaksi.
- `to`: Alamat penerima transaksi.
- `contractAddress`: Alamat kontrak yang terkait dengan transaksi (hanya pada transaksi dengan kontrak).
- `logs`: Array log yang terkait dengan transaksi.
  - `logIndex`: Indeks log di dalam blok.
  - `address`: Alamat kontrak yang mengeluarkan log.
  - `topics`: Array topik log.
  - `data`: Data log.
  - `blockNumber`: Nomor blok di mana log tersebut terjadi.
  - `transactionHash`: Hash transaksi terkait dengan log.
- `status`: Status transaksi, true jika berhasil (status sukses), false jika gagal (status gagal).
- `gasUsed`: Jumlah gas yang digunakan dalam transaksi.
- `cumulativeGasUsed`: Jumlah gas yang digunakan secara akumulatif sejak awal blok.

Deskripsi: Klien mengirimkan permintaan untuk mendapatkan informasi receipt (bukti) dari sebuah transaksi berdasarkan hash transaksi yang diberikan. Server akan memeriksa hash transaksi tersebut dan mengembalikan informasi receipt yang terkait.

Respon dari server berisi informasi receipt yang mencakup hash transaksi, indeks transaksi, hash blok, nomor blok, alamat pengirim, alamat penerima, alamat kontrak (jika transaksi melibatkan kontrak), log-log yang terkait dengan transaksi, status transaksi, jumlah gas yang digunakan dalam transaksi, dan jumlah gas yang digunakan secara akumulatif sejak awal blok.

### 17. /getTokenHolders
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan daftar pemegang token ERC-20 dari suatu kontrak token ERC-20 pada jaringan blockchain. Server akan memeriksa kontrak token ERC-20 yang ditentukan dan mengembalikan daftar alamat pemegang token ERC-20 beserta saldo token masing-masing.

Metode: GET

Parameter Input:
- `contractAddress`: Alamat kontrak token ERC-20 yang ingin diperiksa daftar pemegang token.

Contoh Request:
```
GET /getTokenHolders?contractAddress=0x0...
```

Contoh Response:
```json
{
  "holders": [
    {
      "address": "0x0...",
      "balance": 100
    },
    {
      "address": "0x0...",
      "balance": 50
    },
    ...
  ]
}
```

Parameter Output:
- `holders`: Array pemegang token ERC-20 yang terkait dengan kontrak token ERC-20 yang diberikan.
  - `address`: Alamat pemegang token ERC-20.
  - `balance`: Saldo token ERC-20 yang dimiliki oleh pemegang token tersebut.

Deskripsi: Klien mengirimkan permintaan untuk mendapatkan daftar pemegang token ERC-20 dari suatu kontrak token ERC-20 dengan menyertakan alamat kontrak token ERC-20 yang ingin diperiksa. Server akan memeriksa kontrak token ERC-20 yang ditentukan dan mengembalikan daftar alamat pemegang token ERC-20 beserta saldo token masing-masing.

Respon dari server berisi array pemegang token ERC-20 yang terkait dengan kontrak token ERC-20 yang diberikan. Setiap pemegang token akan mencakup informasi seperti alamat pemegang token dan saldo token ERC-20 yang dimilikinya.

### 18. /getTokenPrice
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan harga token ERC-20 pada pasar terkini dalam beberapa mata uang yang ditentukan. Server akan mengambil data harga terkini dari berbagai sumber atau exchange yang ditentukan, dan mengembalikan harga token ERC-20 yang diminta dalam mata uang yang telah ditentukan.

Metode: POST

Parameter Input (dalam body request):
```json
{
  "contractAddress": "0x...",
  "currencies": ["USD", "EUR", "GBP"]
}
```

Contoh Request:
```
POST /getTokenPrice
Content-Type: application/json

{
  "contractAddress": "0x...",
  "currencies": ["USD", "EUR", "GBP"]
}
```

Contoh Response:
```json
{
  "contractAddress": "0x...",
  "symbol": "TOKEN",
  "prices": {
    "USD": 0.1234,
    "EUR": 0.1111,
    "GBP": 0.0987
  },
  "lastUpdated": 1624567890
}
```

Parameter Output:
- `contractAddress`: Alamat kontrak token ERC-20 yang harga token-nya diminta.
- `symbol`: Simbol singkatan token ERC-20.
- `prices`: Objek yang berisi harga token ERC-20 dalam mata uang yang telah ditentukan.
- `lastUpdated`: Waktu terakhir pembaruan harga token ERC-20 dalam format UNIX timestamp.

Deskripsi: Klien mengirimkan permintaan dengan metode POST untuk mendapatkan harga token ERC-20 pada pasar terkini dengan menyertakan alamat kontrak token ERC-20 yang ingin diperoleh harganya, serta array mata uang yang diinginkan untuk konversi harga token ERC-20. Server akan mengambil data harga terkini dari berbagai sumber atau exchange yang ditentukan dan mengembalikan harga token ERC-20 yang diminta dalam mata uang yang telah ditentukan.

Respon dari server berisi informasi harga token ERC-20 yang mencakup alamat kontrak token ERC-20, simbol singkatan token ERC-20, harga token ERC-20 pada pasar terkini dalam mata uang yang telah ditentukan, dan waktu terakhir pembaruan harga dalam format UNIX timestamp.

### 19. /getTokenHoldersCount
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan jumlah pemegang token ERC-20 dari suatu kontrak token ERC-20 pada jaringan blockchain. Server akan memeriksa kontrak token ERC-20 yang ditentukan dan mengembalikan jumlah total pemegang token ERC-20 yang terkait.

Metode: GET

Parameter Input:
- `contractAddress`: Alamat kontrak token ERC-20 yang ingin diperoleh jumlah pemegang token.

Contoh Request:
```
GET /getTokenHoldersCount?contractAddress=0x...
```

Contoh Response:
```json
{
  "contractAddress": "0x...",
  "holdersCount": 1000
}
```

Parameter Output:
- `contractAddress`: Alamat kontrak token ERC-20 yang jumlah pemegang token-nya diminta.
- `holdersCount`: Jumlah total pemegang token ERC-20 yang terkait dengan kontrak token ERC-20 yang diberikan.

Deskripsi: Klien mengirimkan permintaan untuk mendapatkan jumlah pemegang token ERC-20 dari suatu kontrak token ERC-20 dengan menyertakan alamat kontrak token ERC-20 yang ingin diperoleh jumlah pemegangnya. Server akan memeriksa kontrak token ERC-20 yang ditentukan dan mengembalikan jumlah total pemegang token ERC-20 yang terkait.

Respon dari server berisi informasi jumlah pemegang token ERC-20 yang mencakup alamat kontrak token ERC-20 yang diminta dan jumlah total pemegang token ERC-20 yang terkait dengan kontrak token ERC-20 yang diberikan.

### 20. /decodeRawTransaction/{rawTransaction}
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendekode transaksi mentah (raw transaction) agar dapat memverifikasi detailnya sebelum ditransmisikan ke jaringan. Server akan mengambil transaksi mentah yang diberikan oleh klien dan melakukan proses dekode untuk mengungkapkan informasi detail tentang transaksi tersebut, termasuk informasi khusus untuk transaksi smart contract.

Metode: GET

Parameter Input:
- `rawTransaction`: Transaksi mentah yang ingin didekode. Transaksi mentah harus dalam format heksadesimal.

Contoh Request:
```
GET /decodeRawTransaction/0x...
```

Contoh Response (Transaksi Ethereum Biasa):
```json
{
  "from": "0x...",
  "to": "0x...",
  "value": "1000000000000000000",
  "gasLimit": 21000,
  "gasPrice": "5000000000",
  "nonce": 1,
  "data": "0x...",
  "isContractTransaction": false
}
```

Contoh Response (Transaksi Smart Contract):
```json
{
  "from": "0x...",
  "to": "0x...",
  "value": "0",
  "gasLimit": 300000,
  "gasPrice": "1000000000",
  "nonce": 2,
  "data": "0x...",
  "isContractTransaction": true,
  "contractAddress": "0x..."
}
```

Parameter Output:
- `from`: Alamat pengirim transaksi.
- `to`: Alamat penerima transaksi. Jika transaksi adalah pembuatan kontrak, nilai ini akan kosong.
- `value`: Jumlah nilai yang dikirim dalam transaksi.
- `gasLimit`: Batas maksimum gas yang dapat digunakan untuk menjalankan transaksi.
- `gasPrice`: Harga gas yang dibayarkan untuk setiap unit gas dalam transaksi.
- `nonce`: Nomor nonce transaksi.
- `data`: Data tambahan yang terkait dengan transaksi.
- `isContractTransaction`: Status transaksi, true jika transaksi adalah transaksi smart contract, false jika transaksi adalah transaksi biasa.
- `contractAddress`: Alamat kontrak yang terlibat dalam transaksi (hanya pada transaksi smart contract).

Deskripsi: Klien mengirimkan permintaan untuk mendekode transaksi mentah (raw transaction) dengan menyertakan transaksi mentah dalam format heksadesimal. Server akan melakukan proses dekode pada transaksi mentah tersebut dan mengungkapkan informasi detail tentang transaksi, termasuk informasi khusus untuk transaksi smart contract.

Respon dari server berisi informasi detail tentang transaksi yang telah didekode. Jika transaksi adalah transaksi biasa, respon akan mencakup alamat pengirim, alamat penerima, nilai, batas gas, harga gas, nonce, dan data transaksi. Jika transaksi adalah transaksi smart contract, respon juga akan mencakup status transaksi, yaitu `isContractTransaction` yang bernilai true, dan alamat kontrak yang terlibat dalam transaksi (`contractAddress`).


### 21. /cancelTransaction/{transactionHash}
___

Deskripsi: Endpoint ini digunakan oleh klien untuk membatalkan transaksi yang sedang tertunda dengan mengirimkan transaksi kosong (0 Ether) ke alamat pengirim dengan gas price yang lebih tinggi. Server akan membatalkan transaksi yang sedang tertunda berdasarkan hash transaksi yang diberikan oleh klien.

Metode: POST

Parameter Input:
- `transactionHash`: Hash transaksi yang ingin dibatalkan.

Contoh Request:
```
POST /cancelTransaction/0x...
Content-Type: application/json

{}
```

Contoh Response:
```json
{
  "transactionHash": "0x...",
  "status": "canceled"
}
```

Parameter Output:
- `transactionHash`: Hash transaksi yang berhasil dibatalkan.
- `status`: Status pembatalan transaksi ("canceled" jika berhasil dibatalkan).

Deskripsi: Klien mengirimkan permintaan dengan metode POST untuk membatalkan transaksi yang sedang tertunda dengan menyertakan hash transaksi yang ingin dibatalkan. Server akan membatalkan transaksi tersebut dengan mengirimkan transaksi kosong (0 Ether) ke alamat pengirim dengan gas price yang lebih tinggi.

Respon dari server berisi informasi tentang transaksi yang berhasil dibatalkan, termasuk hash transaksi yang dibatalkan dan status pembatalan ("canceled" jika berhasil dibatalkan).

Penting untuk memastikan bahwa hash transaksi yang diberikan valid dan masih dalam keadaan tertunda, serta melindungi endpoint ini dengan mekanisme otentikasi dan otorisasi yang tepat.

### 22. /getContract/{address}
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan informasi tentang kontrak pada alamat yang ditentukan. Server akan mengambil data kontrak yang terkait dengan alamat yang diberikan oleh klien dan mengembalikan informasi detail tentang kontrak tersebut.

Metode: GET

Parameter Input:
- `address`: Alamat kontrak yang ingin diperoleh informasinya.

Contoh Request:
```
GET /getContract/0x...
```

Contoh Response:
```json
{
  "address": "0x...",
  "name": "MyToken",
  "symbol": "MTK",
  "totalSupply": "1000000000",
  "decimals": 18,
  "creator": "0x...",
  "createdAt": 1624567890,
  "isVerified": true
}
```

Parameter Output:
- `address`: Alamat kontrak yang diminta.
- `name`: Nama kontrak.
- `symbol`: Simbol singkatan kontrak.
- `totalSupply`: Total pasokan token kontrak.
- `decimals`: Jumlah desimal yang digunakan dalam token kontrak.
- `creator`: Alamat pembuat kontrak.
- `createdAt`: Waktu pembuatan kontrak dalam format UNIX timestamp.
- `isVerified`: Status verifikasi kontrak (true jika sudah diverifikasi, false jika belum diverifikasi).

Deskripsi: Klien mengirimkan permintaan untuk mendapatkan informasi tentang kontrak pada alamat yang ditentukan dengan menyertakan alamat kontrak yang ingin diperoleh informasinya. Server akan mengambil data kontrak yang terkait dengan alamat tersebut dan mengembalikan informasi detail tentang kontrak seperti alamat kontrak, nama kontrak, simbol kontrak, total pasokan token kontrak, jumlah desimal yang digunakan dalam token kontrak, alamat pembuat kontrak, waktu pembuatan kontrak, dan status verifikasi kontrak.

Respon dari server berisi informasi detail tentang kontrak yang mencakup alamat kontrak, nama kontrak, simbol kontrak, total pasokan token kontrak, jumlah desimal yang digunakan dalam token kontrak, alamat pembuat kontrak, waktu pembuatan kontrak, dan status verifikasi kontrak.

### 23. /getContractEvents/{address}
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan daftar event yang dikaitkan dengan alamat kontrak yang diberikan. Server akan mengambil data event yang terkait dengan kontrak pada alamat yang diberikan oleh klien dan mengembalikan daftar event yang terjadi.

Metode: GET

Parameter Input:
- `address`: Alamat kontrak yang ingin diperoleh daftar eventnya.

Contoh Request:
```
GET /getContractEvents/0x...
```

Contoh Response:
```json
{
  "contractAddress": "0x...",
  "events": [
    {
      "eventName": "Transfer",
      "blockNumber": 1000,
      "transactionHash": "0x...",
      "data": {
        "from": "0x...",
        "to": "0x...",
        "value": "1000000000000000000"
      },
      "timestamp": 1624567890
    },
    {
      "eventName": "Approval",
      "blockNumber": 1001,
      "transactionHash": "0x...",
      "data": {
        "owner": "0x...",
        "spender": "0x...",
        "value": "500000000000000000"
      },
      "timestamp": 1624567900
    }
  ]
}
```

Parameter Output:
- `contractAddress`: Alamat kontrak yang diminta.
- `events`: Array yang berisi informasi tentang setiap event yang terjadi pada kontrak.
  - `eventName`: Nama event yang terjadi.
  - `blockNumber`: Nomor blok tempat event terjadi.
  - `transactionHash`: Hash transaksi yang memicu event.
  - `data`: Objek yang berisi data terkait event.
  - `timestamp`: Waktu terjadinya event dalam format UNIX timestamp.

Deskripsi: Klien mengirimkan permintaan untuk mendapatkan daftar event yang dikaitkan dengan kontrak pada alamat yang ditentukan dengan menyertakan alamat kontrak yang ingin diperoleh daftar eventnya. Server akan mengambil data event yang terkait dengan kontrak tersebut dan mengembalikan daftar event yang terjadi, termasuk informasi tentang setiap event seperti nama event, nomor blok tempat event terjadi, hash transaksi yang memicu event, data terkait event, dan waktu terjadinya event.

Respon dari server berisi daftar event yang terkait dengan kontrak pada alamat yang diberikan. Setiap event memiliki informasi tentang nama event, nomor blok, hash transaksi, data terkait event, dan waktu terjadinya event.


### 24. /getTokenTransfers/{contractAddress}
___

Deskripsi: Endpoint ini digunakan oleh klien untuk mendapatkan daftar transfer token untuk suatu kontrak ERC-20 tertentu berdasarkan alamat kontrak tersebut. Server akan mengambil data transfer token yang terkait dengan kontrak pada alamat yang diberikan oleh klien dan mengembalikan daftar transfer token tersebut.

Metode: GET

Parameter Input:
- `contractAddress`: Alamat kontrak token ERC-20 yang ingin diperoleh daftar transfer tokennya.

Contoh Request:
```
GET /getTokenTransfers/0x...
```

Contoh Response:
```json
{
  "contractAddress": "0x...",
  "transfers": [
    {
      "transactionHash": "0x...",
      "from": "0x...",
      "to": "0x...",
      "value": "1000000000000000000",
      "timestamp": 1624567890
    },
    {
      "transactionHash": "0x...",
      "from": "0x...",
      "to": "0x...",
      "value": "2000000000000000000",
      "timestamp": 1624567900
    }
  ]
}
```

Parameter Output:
- `contractAddress`: Alamat kontrak token ERC-20 yang diminta.
- `transfers`: Array yang berisi informasi tentang setiap transfer token yang terjadi pada kontrak.
  - `transactionHash`: Hash transaksi yang memicu transfer token.
  - `from`: Alamat pengirim token.
  - `to`: Alamat penerima token.
  - `value`: Jumlah nilai token yang ditransfer.
  - `timestamp`: Waktu terjadinya transfer token dalam format UNIX timestamp.

Deskripsi: Klien mengirimkan permintaan untuk mendapatkan daftar transfer token untuk suatu kontrak ERC-20 tertentu dengan menyertakan alamat kontrak token ERC-20 yang ingin diperoleh daftar transfer tokennya. Server akan mengambil data transfer token yang terkait dengan kontrak tersebut dan mengembalikan daftar transfer token tersebut, termasuk informasi tentang setiap transfer token seperti hash transaksi, alamat pengirim token, alamat penerima token, jumlah nilai token yang ditransfer, dan waktu terjadinya transfer token.

Respon dari server berisi daftar transfer token yang terkait dengan kontrak pada alamat yang diberikan. Setiap transfer token memiliki informasi tentang hash transaksi, alamat pengirim, alamat penerima, jumlah nilai token yang ditransfer, dan waktu terjadinya transfer token.

### 25. /createERC20Token
___

Deskripsi: Endpoint ini digunakan oleh klien untuk membuat token ERC20 baru. Klien akan mengirimkan parameter input yang mencakup informasi tentang token yang ingin dibuat seperti nama token, simbol token, jumlah desimal, total pasokan, kemampuan mintable, jumlah mint, dan parameter lain yang dibutuhkan. Server akan memproses permintaan tersebut dan mengembalikan byte code yang merupakan hasil dari kontrak token ERC20 yang baru dibuat.

Metode: POST

Parameter Input:
- `name`: Nama token ERC20 baru.
- `symbol`: Simbol token ERC20 baru.
- `decimals`: Jumlah desimal token ERC20 baru.
- `totalSupply`: Total pasokan token ERC20 baru.
- `mintable`: Status mintable token ERC20 baru (true/false).
- `mintAmount`: Jumlah token yang akan di-mint jika token ERC20 dapat di-mint.
- Parameter-parameter lain yang diperlukan untuk membuat kontrak token ERC20, seperti parameter konstruktor dan lainnya.

Contoh Request:
```
POST /createERC20Token
Content-Type: application/json

{
  "name": "My Token",
  "symbol": "MTK",
  "decimals": 18,
  "totalSupply": "1000000000000000000000",
  "mintable": true,
  "mintAmount": "1000000000000000000",
  "otherParams": { ... }
}
```

Contoh Response:
```json
{
  "bytecode": "0x..."
}
```

Parameter Output:
- `bytecode`: Byte code dari kontrak token ERC20 yang baru dibuat.

Deskripsi: Klien mengirimkan permintaan dengan metode POST untuk membuat token ERC20 baru dengan menyertakan parameter input seperti nama token, simbol token, jumlah desimal, total pasokan, kemampuan mintable, jumlah mint, dan parameter lain yang dibutuhkan. Server akan memproses permintaan tersebut dan mengembalikan byte code yang merupakan hasil dari kontrak token ERC20 yang baru dibuat.

Respon dari server berisi byte code dari kontrak token ERC20 yang baru dibuat. Byte code tersebut dapat digunakan oleh klien untuk melakukan implementasi kontrak token ERC20 di jaringan blockchain yang sesuai.

Penting untuk memastikan bahwa parameter input yang diberikan valid dan mematuhi standar yang ditetapkan untuk token ERC20. Selain itu, perlu diperhatikan kebijakan keamanan yang ketat untuk melindungi privasi dan integritas byte code yang dikirimkan serta melakukan verifikasi dan pengujian yang memadai sebelum mengirimkan permintaan ke server.
