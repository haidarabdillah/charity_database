# ENDOPOINT LIST

## 1. Register

<details>
<summary>Register - Meminta Kode Verifikasi</summary>

Details Register - Meminta Kode Verifikasi <br>
**Endpoint:** POST /api/register/request-verification-code

Endpoint ini digunakan untuk meminta kode verifikasi melalui nomor telepon yang telah diinpost oleh pengguna.

**Request Body:**

```json
{
  "phone_number": "081234567890"
}
```

**Response valid:**

```json
{
  "message": "Verification code has been sent to 081234567890"
}
```

**Response notvalid:**

```json
{
  "error": "Invalid phone number",
  "message": "The provided phone number is not valid."
}
```

  </details>

<details>
<summary>Register - verify Kode Verifikasi</summary>

**Endpoint:** POST /api/register-verify-code

Endpoint ini digunakan untuk memverifikasi kode yang dikirimkan ke nomor HP pengguna selama proses registrasi.

**Request Body:**

```json
{
  "phone_number": "081234567890",
  "verification_code": "123456"
}
```

**Response (Verifikasi Sukses):**

```json
{
  "message": "Verification code is valid"
}
```

**Response (Verifikasi Gagal - Kode Tidak Valid):**

```json
{
  "error": "Invalid code",
  "message": "The provided verification code is not valid."
}
```

  </details>

<details>
<summary>Register - Kirim Kode Verifikasi dan Password</summary>

**Endpoint:** POST /api/register/verify-and-set-password

Endpoint ini digunakan untuk mengirimkan kode verifikasi dan password pengguna untuk menyelesaikan proses registrasi.

**Request Body:**

```json
{
  "phone_number": "081234567890",
  "verification_code": "123456",
  "password": "password123",
}
```

**Response valid:**

```json
{
  "message": "Registration successful",
  "user_id": 1,
  "phone_number": "081234567890",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJwaG9uZV9udW1iZXIiOiIwODEyMzQ1Njc4OTAiLCJpYXQiOjE2MzA3MzQ1OTEsImV4cCI6MTYzMDc0NjE5MX0.LicdxVmqpwPxGydzz3oGnAgt5kNR-LNQp-4GH6LAD0I"
}
```

**Response invalid:**

```json
{
  "error": "Invalid password",
  "message": "The password must be at least 8 characters long and contain a combination of letters, numbers, and special characters."
}

```

</details>

## 2. Login

<details>
<summary>Login - standart user login</summary>

**Endpoint:** POST /api/login

Endpoint ini digunakan untuk melakukan proses login pengguna.

**Request Body:**

```json
{
  "phone_number": "081234567890",
  "password": "password123"
}
```

**Response (Login Sukses):**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NTY3ODkwLCJpYXQiOjE2MzE3MzQ3MjN9.6hv9BFmQ9VY_MVr2fnJ78InGutFc4g_7COgV4vT8G6k"
}
```

**Response (Login Gagal - Kombinasi Nomor HP dan Password Salah):**

```json
{
  "error": "Invalid credentials",
  "message": "The provided phone number and password combination is invalid."
}
```

  </details>

## 3. Forgot Password

<details>
<summary>Forgot - Meminta Kode Verifikasi</summary>

**Endpoint:** POST /api/register/request-forgot-code

Endpoint ini digunakan untuk meminta kode verifikasi melalui nomor telepon yang telah diinpost oleh pengguna.

**Request Body:**

```json
{
  "phone_number": "081234567890"
}
```

**Response valid:**

```json
{
  "message": "Verification code has been sent to 081234567890"
}
```

**Response notvalid:**

```json
{
  "error": "Invalid phone number",
  "message": "The provided phone number is not valid pr not registered"
}
```

  </details>
<details>
<summary>Forgot - Kirim Kode Verifikasi dan Password</summary>

**Endpoint:** POST /api/register/forgot-and-set-password

Endpoint ini digunakan untuk mengirimkan kode verifikasi dan password pengguna untuk menyelesaikan proses forgot password.

**Request Body:**

```json
{
  "phone_number": "081234567890",
  "verification_code": "123456",
  "password": "password123",
}
```

**Response valid:**

```json
{
  "message": "Registration successful",
  "user_id": 1,
  "phone_number": "081234567890",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJwaG9uZV9udW1iZXIiOiIwODEyMzQ1Njc4OTAiLCJpYXQiOjE2MzA3MzQ1OTEsImV4cCI6MTYzMDc0NjE5MX0.LicdxVmqpwPxGydzz3oGnAgt5kNR-LNQp-4GH6LAD0I"
}
```

**Response invalid:**

```json
{
  "error": "Invalid password",
  "message": "The password must be at least 8 characters long and contain a combination of letters, numbers, and special characters."
}

```

  </details>

## 4. Dashboard

<details>
<summary> get dashboard data</summary>

**Endpoint: GET /dashboard**

**Response:**

```json
{
  "banners": [
    {
      "image": "https://example.com/banner1.jpg",
      "donation_id": 2
    },
    {
      "image": "https://example.com/banner2.jpg",
      "donation_id": 3
    },
    {
      "image": "https://example.com/banner3.jpg",
      "donation_id": 23
    },
    {
      "image": "https://example.com/banner4.jpg",
      "donation_id": 12
    },
    {
      "image": "https://example.com/banner5.jpg",
      "donation_id": 4
    }
  ],
  "statistics": {
    "total_donations": 1500,
    "total_donatur": 500,
    "total_campaigns": 100
  },
  "urgentCampaigns": [
    {
      "title": "Campaign 3",
      "deadline": "2023-06-30",
      "tittle": "Bantu Tetangga, Bantu Saudara",
      "fundraiser_name": "Fundraiser 3",
      "fundraiser_status": "org",
      "fundraiser_id": 3,
      "donation_id": 1,
      "banners":["https://example.com/banner5.jpg","https://example.com/banner5.jpg","https://example.com/banner5.jpg","https://example.com/banner5.jpg"],
      "location":{
          "desa":"nama desa",
          "kecamatan":"nama kecamatan",
          "kota":"nama kota", // kabupaten
          "provinsi":"nama provinsi" // provinsi
      },
      "fundraiser_id": 4,
      "donation_id": 2,
      "total_donation_needed": 20000,
      "total_conation_received": 10000
    },
    {
      "title": "Campaign 4",
      "tittle": "Bantu Tetangga, Bantu Saudara",
      "deadline": "2023-07-10",
      "fundraiser_name": "Fundraiser 4",
      "fundraiser_status": "personal",   
      "banners":["https://example.com/banner5.jpg","https://example.com/banner5.jpg","https://example.com/banner5.jpg","https://example.com/banner5.jpg"],
      "location":{
          "desa":"nama desa",
          "kecamatan":"nama kecamatan",
          "kota":"nama kota", // kabupaten
          "provinsi":"nama provinsi" // provinsi
      },
      "fundraiser_id": 4,
      "donation_id": 2,
      "total_donation_needed": 20000,
      "total_conation_received": 10000
    }
  ],
  "testimonials": [
    {
      "donorName": "Donor 1",
      "donationAmount": 100,
      "comment": "Great campaign!",
      "donation_id":4
    },
    {
      "donorName": "Donor 2",
      "donationAmount": 50,
      "comment": "Happy to contribute!",
      "donation_id": 4
    }
  ],
  "news": [
    {
      "type": "campaign",
      "creator": "Fundraiser 4",
      "tittle": "Update Pendistribusian dana ",
      "content": "Campaign 1 has reached 50% of its donation target.",
      "link_id": 2
    },
    {
      "type": "news",
      "creator": "Admin",
      "tittle": "Bantu Tetangga, Bantu Saudara",
      "content": "dengan berdonasi ke tetangga kita bisa mendapatkan hikmah secara langsung yaitu ..... ",
      "link_id": 323
    }
  ]
}
```

  </details>

<details>
<summary> get campaign nearby</summary>

**Endpoint: POST /campaigns/nearby**

**Request Body:**

</details>

## 4. List Donasi

<details>
<summary>GET - Kategori list</summary>

**Endpoint:** GET /api/v1/category_list

Endpoint ini digunakan untuk meminta list kategori

**Response valid:**

```json
{
  "data": [
    [
      {
        "category": "pendidikan",
        "icon": "example link"
      },
      {
        "category": "social",
        "icon": "example link"
      },
      {
        "category": "agama",
        "icon": "example link"
      },
      {
        "category": "pondok",
        "icon": "example link"
      },
      {
        "category": "tahfidz",
        "icon": "example link"
      },
      {
        "category": "dhuafa",
        "icon": "example link"
      }
    ]
  ]
}
```

</details>

## 5. Penggalang dana

### 1. my fundraiser profile

<details>
<summary> API /get /api/v1/fundraiser_profile <br>
 </summary>

Endpoint digunakan untuk mendapatkan detail fundraiser profile details, bank account, social media, visi-misi dll.<br>
**Response valid:**

  ```json
   {
    "fundraiser_profile": {
      "user_id": 123,
      "profile_picture_url": "https://example.com/profile-picture.jpg",
      "vision_mission": "To help those in need",
      "background": "Experienced fundraiser",
      "verified": "personal",
      "bank_accounts": [
        {
          "payment_method_id": 1,
          "account_number": "1234567890",
          "account_name": "yayasan peduli sesama",
          "is_verified": true,
        },
        {
          "payment_method_id": 2,
          "account_number": "0987654321",
          "account_name": "yayasan peduli sesama",
          "is_verified": false,
        }
      ],
      "contacts": {
        "id": 1,
        "website": "https://example.com",
        "instagram": "example_instagram",
        "youtube": "example_youtube",
        "facebook": "example_facebook",
        "twitter": "example_twitter"
      },
      "kyc_personal": {
        "full_name": "John Doe",
        "id_number": "1234567890",
        "address": "123 Main Street, City",
        "photo_id_front": "https://example.com/photo-id-front.jpg",
        "photo_id_back": "https://example.com/photo-id-back.jpg",
        "selfie_photo": "https://example.com/selfie-photo.jpg",
        "verification_status": "success",
      },
      "kyc_org": {
        "full_name": "John Doe",
        "id_number": "1234567890",
        "address": "123 Main Street, City",
        "photo_id_front": "https://example.com/photo-id-front.jpg",
        "photo_id_back": "https://example.com/photo-id-back.jpg",
        "selfie_photo": "https://example.com/selfie-photo.jpg",
        "verification_status": "pending",
      }
    }
  }

  ```

**Detail Field response**:

- `verified`: status user bisa berupa "not_verified", "personal", "org"
- `payment_method_id`: merujuk pada id payment methods yang tersedia, bisa di check di re-use api

</details>

### 2. My fundraiser campaign

<details>
<summary>API /get /api/v1/fundraiser-campaigns
 </summary>

   Endpoint digunakan untuk mendapatkan list fundraiser campigns.<br>
  **Response valid:**

```json
{
  "campaign": [
    {
      "title": "Campaign 3",
      "deadline": "2023-06-30",
      "tittle": "Bantu Tetangga, Bantu Saudara",
      "fundraiser_name": "Fundraiser 3",
      "fundraiser_status": "org",
      "fundraiser_id": 3,
      "donation_id": 1,
      "banners": [
        "https://example.com/banner5.jpg",
        "https://example.com/banner5.jpg",
        "https://example.com/banner5.jpg",
        "https://example.com/banner5.jpg"
      ],
      "location": {
        "desa": "nama desa",
        "kecamatan": "nama kecamatan",
        "kota": "nama kota", // kabupaten
        "provinsi": "nama provinsi" // provinsi
      },
      "fundraiser_id": 4,
      "donation_id": 2,
      "total_donation_needed": 20000,
      "total_conation_received": 10000
    },
    {
      "title": "Campaign 4",
      "tittle": "Bantu Tetangga, Bantu Saudara",
      "deadline": "2023-07-10",
      "fundraiser_name": "Fundraiser 4",
      "fundraiser_status": "personal",
      "banners": [
        "https://example.com/banner5.jpg",
        "https://example.com/banner5.jpg",
        "https://example.com/banner5.jpg",
        "https://example.com/banner5.jpg"
      ],
      "location": {
        "desa": "nama desa",
        "kecamatan": "nama kecamatan",
        "kota": "nama kota", // kabupaten
        "provinsi": "nama provinsi" // provinsi
      },
      "fundraiser_id": 4,
      "donation_id": 2,
      "total_donation_needed": 20000,
      "total_conation_received": 10000
    }
  ]
}
```

</details>

### 3. Fundraiser verify kyc

<details>
<summary>API /post /api/v1/kyc-personal
</summary>

**Details:**
  Endpoint ini digunakan untuk memverifikasi data KYC fundraiser

**Request Body:**

```json
{
  "fundraiser_id": 123,
  "full_name": "John Doe",
  "id_number": "1234567890",
  "address": "123 Main Street, City",
  "desa_id": 211,
  "photo_id_front": "photo-id-front.jpg",
  "photo_id_back": "photo-id-back.jpg",
  "selfie_photo": "selfie-photo.jpg"
}
```

**Response valid:**

```json
{
  "status": "success",
  "message": "KYC verification request has been submitted successfully.",
  "data": {
    "verification_status": "pending"
  }
}
```

**Response notvalid:**

```json
{
  "status": "error",
  "message": "Ukuran file tidak sesuai dengan persyaratan.",
  "errors": [
    {
      "field": "file",
      "message": "Ukuran file harus antara 100KB hingga 10MB."
    }
  ]
}
```
```json
{
  "status": "error",
  "message": "Tipe file tidak sesuai dengan persyaratan.",
  "errors": [
    {
      "field": "file",
      "message": "Tipe file yang diunggah harus dalam format JPG, PNG, atau JPEG."
    }
  ]
}

```json
{
  "status": "error",
  "message": "kelurahan is not valid",
}
```
</details>

#### API /post /api/v1/kyc-org
<details>
<summary> API /post /api/v1/kyc-org
</summary>

**Details:**
  Endpoint ini digunakan untuk memverifikasi data KYC fundraiser

**Request Body:**

```json
{
  "fundraiser_id": 123,
  "full_name": "John Doe",
  "id_number": "1234567890",
  "address": "123 Main Street, City",
  "desa_id": 211,
  "photo_id_front": "photo-id-front.jpg",
  "photo_id_back": "photo-id-back.jpg",
  "selfie_photo": "selfie-photo.jpg"
}
```

**Response valid:**

```json
{
  "message": "Verification code has been sent to 081234567890"
}
```

**Response notvalid:**

```json
{
  "status": "error",
  "message": "Ukuran file tidak sesuai dengan persyaratan.",
  "errors": [
    {
      "field": "file",
      "message": "Ukuran file harus antara 100KB hingga 10MB."
    }
  ]
}
```
```json
{
  "status": "error",
  "message": "Tipe file tidak sesuai dengan persyaratan.",
  "errors": [
    {
      "field": "file",
      "message": "Tipe file yang diunggah harus dalam format JPG, PNG, atau JPEG."
    }
  ]
}

```json
{
  "status": "error",
  "message": "kelurahan is not valid",
}
```
</details>
</details>



- API /post /api/v1/bank
- API /put /api/v1/bank
- API /post /api/v1/campaign
- API /post /api/v1/update-campaign
- API /post /api/v1/withdraw

## Settings

- API /get /api/v1/me  (+balance)
- API /put /api/v1/user
- API /get /api/v1/deposit_methods
- API /put /api/v1/change_password
- API /put /api/v1/phone
- API /put /api/v1/social_media

## re-use API

- API /get /api/v1/provinsi_list<br>

**Details:**
  Endpoint ini digunakan untuk meminta data list provinsi pada kategori yang tersedia serta settingan yang lainya

- API /get /api/v1/kabupaten_list<br>
- API /get /api/v1/kecamatan_list<br>

### API /get /api/v1/payment_methods

<details>
<summary> Details API payment_methods</summary>

**Details:**
  Endpoint ini digunakan untuk meminta payment mothods yang tersedia

  **Response valid:**

  ```json
{
  "data": [
    {
      "id": 1,
      "method_code": "bank1",
      "method_type": "bank",
      "minimum_deposit": 1000.00,
      "minimum_withdrawal": 500.00,
      "enable_deposit": true,
      "enable_withdrawal": true,
      "url_logo": "https://example.com/bank1-logo.png"
    },
    {
      "id": 2,
      "method_code": "ewallet1",
      "method_type": "e-wallet",
      "minimum_deposit": 500.00,
      "minimum_withdrawal": 100.00,
      "enable_deposit": true,
      "enable_withdrawal": true,
      "url_logo": "https://example.com/ewallet1-logo.png"
    },
    {
      "id": 3,
      "method_code": "bank2",
      "method_type": "bank",
      "minimum_deposit": 2000.00,
      "minimum_withdrawal": 1000.00,
      "enable_deposit": true,
      "enable_withdrawal": true,
      "url_logo": "https://example.com/bank2-logo.png"
    },
    {
      "id": 4,
      "method_code": "ewallet2",
      "method_type": "e-wallet",
      "minimum_deposit": 100.00,
      "minimum_withdrawal": 50.00,
      "enable_deposit": true,
      "enable_withdrawal": true,
      "url_logo": "https://example.com/ewallet2-logo.png"
    }
  ]
}
  ```

</details>

### API /get /api/v1/camapaign_list

<details>
<summary>Details API campaign_list</summary>

**Details:**
  Endpoint ini digunakan untuk meminta data campaign berdasarkan filter yang diminita users

**Endpoint:**

  ```json
  GET /api/campaign_list?category=pendidikan,tahfidz&deadline=true&fundraiser=org&minimum=1000000&maximum=10000000000&kabupaten=semarang
  ```

**Detail Field params**:

- `category`: dipakai untuk kategori berupa array yang diformat dengan koma
- `deadline`: parameter true/false dimana jika true maka akan muncul data campaign yang hampir selesai.
- `fundraiser`: status fundraiser bisa org/personal.
- `minimum`: filter berdasarkan minimal `total_donation_needed` dalam campaign
- `maximum`: filter berdasarkan maximum `total_donation_needed` dalam campaign
- `provinsi`: filter berdasarkan maximum `total_donation_needed` dalam campaign
- `kabupaten`: filter berdasarkan maximum `total_donation_needed` dalam campaign
- `kecamatan`: filter berdasarkan maximum `total_donation_needed` dalam campaign
- `desa`: filter berdasarkan maximum `total_donation_needed` dalam campaign

  Endpoint ini digunakan untuk meminta data berdasarkan pada kategori yang tersedia serta settingan yang lainya

  **Response valid:**

  ```json
    {
        "data": {
            "campaign": [
                {
                    "title": "Campaign 3",
                    "deadline": "2023-06-30",
                    "tittle": "Bantu Tetangga, Bantu Saudara",
                    "fundraiser_name": "Fundraiser 3",
                    "fundraiser_status": "org",
                    "fundraiser_id": 3,
                    "donation_id": 1,
                    "banners": [
                      "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg"
                    ],
                    "location": {
                      "desa": "nama desa",
                        "kecamatan": "nama kecamatan",
                        "kota": "nama kota", // kabupaten
                        "provinsi": "nama provinsi" // provinsi
                    },
                    "fundraiser_id": 4,
                    "donation_id": 2,
                    "total_donation_needed": 20000,
                    "total_conation_received": 10000
                },
                {
                  "title": "Campaign 4",
                    "tittle": "Bantu Tetangga, Bantu Saudara",
                    "deadline": "2023-07-10",
                    "fundraiser_name": "Fundraiser 4",
                    "fundraiser_status": "personal",
                    "banners": [
                      "https://example.com/banner5.jpg", 
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg"
                    ],
                    "location": {
                      "desa": "nama desa",
                        "kecamatan": "nama kecamatan",
                        "kota": "nama kota", // kabupaten
                        "provinsi": "nama provinsi" // provinsi
                    },
                    "fundraiser_id": 4,
                    "donation_id": 2,
                    "total_donation_needed": 20000,
                    "total_conation_received": 10000
                }
            ],
            "nearby_campaign": [
              {
                "title": "Campaign 3",
                    "deadline": "2023-06-30",
                    "tittle": "Bantu Tetangga, Bantu Saudara",
                    "fundraiser_name": "Fundraiser 3",
                    "fundraiser_status": "org",
                    "fundraiser_id": 3,
                    "donation_id": 1,
                    "banners": [
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg"
                    ],
                    "location": {
                      "desa": "nama desa",
                        "kecamatan": "nama kecamatan",
                        "kota": "nama kota", // kabupaten
                        "provinsi": "nama provinsi" // provinsi
                    },
                    "fundraiser_id": 4,
                    "donation_id": 2,
                    "total_donation_needed": 20000,
                    "total_conation_received": 10000
                },
                {
                  "title": "Campaign 4",
                    "tittle": "Bantu Tetangga, Bantu Saudara",
                    "deadline": "2023-07-10",
                    "fundraiser_name": "Fundraiser 4",
                    "fundraiser_status": "personal",
                    "banners": [
                      "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg",
                        "https://example.com/banner5.jpg"
                    ],
                    "location": {
                      "desa": "nama desa",
                        "kecamatan": "nama kecamatan",
                        "kota": "nama kota", // kabupaten
                        "provinsi": "nama provinsi" // provinsi
                    },
                    "fundraiser_id": 4,
                    "donation_id": 2,
                    "total_donation_needed": 20000,
                    "total_conation_received": 10000
                }
            ]
        }
    }  
  ```

- `nearby_campaign`: merupakan response yang muncul jika user memilih lokasi, nearby campaign merupakan daerah yang masih dalam 1 kecamatan atau kabupaten atau provinsi

</details>
