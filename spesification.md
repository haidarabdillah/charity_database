spesification for service system : 
1. total online user ? 100.000
2. rps (request perseconds) ? 100rps
3. realtime data user ? dibutuhkan untuk realtime balance user(deposit), realtime status pembayaran via crypto, realtime user donasi list, realtime donasi total bertambah
4. 3rd party
    1. blockchain tracking integration
    2. smart contract integraion
    3. blockchain payment integration
    4. web3 login and payment integraion
    5. google maps untuk mapping lokasi sekitar
    6. onesignal notifikasi


-- Availability
    - data redundancy
    - async data
-- Latency
    - on chain dan offchain data
    - 1 server only no backup manager
-- Throughput
    - 100RPs cukup dengan 1 server dan 3 load balancer (callback payment methode harus running terpisah dari sini)
    - websocket for realtime data
-- consistency
    - credential standart 
    
Version 1 
- whatsapp register/login
- topup payment methode xendit balance schema
- mapping donasi disekitar
- KYC penggalangan dana, KTP, untuk user personal, CV atau yayasan untuk organisasi
- KYC rekening untuk penggalang dana
- Donasi, location, map point
- pencairan donasi ke rekening penggalang dana (manual confirmation admin auto xendit send transaction)
_- smart contract hash transaction = deposit /minting, donasi/transfer, penyaluran/transfer_
- websocket balance, donasi terkumpul, user donasi terbaru