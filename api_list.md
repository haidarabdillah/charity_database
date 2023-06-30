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

### 1. /get my fundraiser profile

<details>
<summary> API /get /api/v1/fundraiser_profile <br>
 </summary>

Endpoint digunakan untuk mendapatkan detail fundraiser profile details, bank account, social media, visi-misi dll.<br>
**Response valid:**

  ```json
   {
    "fundraiser_profile": {
      "user_id": 123,
      "full_name": "John Doe",
      "profile_picture_url": "https://example.com/profile-picture.jpg",
      "vision_mission": "To help those in need",
      "background": "Experienced fundraiser",
      "is_personal": true,
      "is_org": false,
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

- `is_personal`: boolean yang menunjukan status personal user
- `is_org`: boolean yang menunjukan status personal user
- `payment_method_id`: merujuk pada id payment methods yang tersedia, bisa di check di re-use api

</details>

### 2. /post fundraiser profile 

<details>
<summary> API /post /api/v1/fundraiser_profile <br>
 </summary>

Endpoint digunakan untuk mendapatkan detail fundraiser profile details, bank account, social media, visi-misi dll.<br>
**Response valid:**

  ```json
     {
    "fundraiser_profile": {
      "user_id": 123,
      "profile_picture_url": "https://example.com/profile-picture.jpg",
      "full_name": "John Doe",
      "vision_mission": "To help those in need",
      "background": "Experienced fundraiser",
      "contacts": {
        "id": 1,
        "website": "https://example.com",
        "instagram": "example_instagram",
        "youtube": "example_youtube",
        "facebook": "example_facebook",
        "twitter": "example_twitter"
      }
    }
  }

  ```

**Detail Field response**:

- `verified`: status user bisa berupa "not_verified", "personal", "org"
- `payment_method_id`: merujuk pada id payment methods yang tersedia, bisa di check di re-use api

</details>

### 3. /get My fundraiser campaign

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

### 3. /post new campaign

<details>
<summary>API /post /api/v1/campaign
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

### 4. Fundraiser verify kyc

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

### 5. API /post /api/v1/kyc-org
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


### 6. Bank

<details>
<summary> Create a new bank <br>
 </summary>
<br>
/api/v1/bank
<br>
<br>
Endpoint digunakan untuk menambahkan data bank
<br>
<br>

**Request body:**

```json
{
   "account_number": "001",
   "account_name": "Bank BCA",
   "is_verified": true,
   "fundraiser_profile_id": 123,
   "payment_method_id": 313
}
```

**Response valid:**

```json
{
   "id": "34r2332-wfwer24-2423432-wdf2trth",
   "account_number": "001",
   "account_name": "Bank BCA",
   "is_verified": true,
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
            "is_verified": true
         },
         {
            "payment_method_id": 2,
            "account_number": "0987654321",
            "account_name": "yayasan peduli sesama",
            "is_verified": false
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
         "verification_status": "success"
      },
      "kyc_org": {
         "full_name": "John Doe",
         "id_number": "1234567890",
         "address": "123 Main Street, City",
         "photo_id_front": "https://example.com/photo-id-front.jpg",
         "photo_id_back": "https://example.com/photo-id-back.jpg",
         "selfie_photo": "https://example.com/selfie-photo.jpg",
         "verification_status": "pending"
      }
   },
   "payment_methods": [
      {
         "id": 1,
         "method_code": "bank1",
         "method_type": "bank",
         "minimum_deposit": 1000.0,
         "minimum_withdrawal": 500.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/bank1-logo.png"
      },
      {
         "id": 2,
         "method_code": "ewallet1",
         "method_type": "e-wallet",
         "minimum_deposit": 500.0,
         "minimum_withdrawal": 100.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/ewallet1-logo.png"
      },
      {
         "id": 3,
         "method_code": "bank2",
         "method_type": "bank",
         "minimum_deposit": 2000.0,
         "minimum_withdrawal": 1000.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/bank2-logo.png"
      },
      {
         "id": 4,
         "method_code": "ewallet2",
         "method_type": "e-wallet",
         "minimum_deposit": 100.0,
         "minimum_withdrawal": 50.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/ewallet2-logo.png"
      }
   ]
}
```

</details>

### 7. Update campaign

<details>
<summary> Create a new Update campaign <br>
 </summary>

<br>
/api/v1/update-campaign
<br>
<br>
Endpoint digunakan untuk menambahkan data update campaign
<br>
<br>

**Request body:**

```json
{
   "update_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
   "update_type": "penyaluran",
   "campaign_id": 123,
   "fundraiser_withdrawal_id": 345
}
```

**Response valid:**

```json
{
   "update_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
   "update_type": "penyaluran",
   "campaign": {
      "id": "gwttw2-gwrt542-2twgw42-2452twrg",
      "title": "Title campaign",
      "description": "lorem ipsum dolor sit amet, consect",
      "required_amount": "3232323.00",
      "total_collected_amount": "3232323.00",
      "total_withdrawn_amount": "3232323.00"
   },
   "fundraiser_withdrawal_id": 345
}
```

</details>

### 8. Withdrawals

<details>
<summary> Create a new withdrawals<br>
 </summary>

<br>
/api/v1/withdrawals
<br>
<br>
Endpoint digunakan untuk menambahkan data withdrawals
<br>
<br>

**Response valid:**

```json
{
   "id": "rheu645-3hrwghj-34vfbjs-u2gfhvsh",
   "amount": "4242.42",
   "status": "success",
   "requested_at": "2023-06-30T01:40:21.537617Z",
   "completed_at": "2023-06-30T01:40:21.537617Z",
   "external_id_transaction": "kwewek",
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
            "is_verified": true
         },
         {
            "payment_method_id": 2,
            "account_number": "0987654321",
            "account_name": "yayasan peduli sesama",
            "is_verified": false
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
         "verification_status": "success"
      },
      "kyc_org": {
         "full_name": "John Doe",
         "id_number": "1234567890",
         "address": "123 Main Street, City",
         "photo_id_front": "https://example.com/photo-id-front.jpg",
         "photo_id_back": "https://example.com/photo-id-back.jpg",
         "selfie_photo": "https://example.com/selfie-photo.jpg",
         "verification_status": "pending"
      }
   },
   "campaigns": {
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
   }
}
```

</details>

## Settings

### 1. Profile

<details>
<summary>Get</summary>
<br>
/api/v1/profile
<br>
<br>

**Response valid:**

```json
{
   "id": "a4969284-710f-4948-affd-c3d538bf32c4",
   "created_at": "2023-06-30T07:15:10.861Z",
   "updated_at": "2023-06-30T07:20:28.656Z",
   "name": "Adib",
   "phone_number": "62895704447596",
   "balance": "0.00",
   "profile_picture": null,
   "is_fundraiser": true,
   "is_name_hidden": true,
   "role": "admin"
}
```

</details>
<details>
<summary>Put</summary>
<br>
/api/v1/profile
<br>
<br>

**Body**

```json
{
   "name": "Adib Zamroni",
   "phone_number": "62895704447596",
   "profile_picture": "https://satunusa.com/static/users/avatar-1678347348734.jpeg",
   "is_name_hidden": true
}
```

**Response valid:**

```json
{
   "id": "a4969284-710f-4948-affd-c3d538bf32c4",
   "created_at": "2023-06-30T07:15:10.861Z",
   "updated_at": "2023-06-30T07:20:28.656Z",
   "name": "Adib Zamroni",
   "phone_number": "62895704447596",
   "balance": "0.00",
   "profile_picture": "https://satunusa.com/static/users/avatar-1678347348734.jpeg",
   "is_fundraiser": true,
   "is_name_hidden": true,
   "role": "admin"
}
```

</details>

### 2. Deposit methods

<details>
<summary>Get</summary>
<br>
/api/v1/deposit-methods
<br>
<br>

**Response valid:**

```json
[
   {
      "id": "32af6ff4-bb2a-4806-9aa6-43bd47ad896f",
      "created_at": "2023-06-30T03:40:00.706Z",
      "updated_at": "2023-06-30T03:40:00.706Z",
      "external_id": "external_id",
      "account_number": "5684576857",
      "name": "Account name",
      "status": "available",
      "expiration_date": "2023-06-30T03:19:19.791Z",
      "payment_method": {
         "id": "075f0a42-4264-4b17-abf3-c3e42be2f0b9",
         "created_at": "2023-06-30T01:41:41.096Z",
         "updated_at": "2023-06-30T01:41:41.096Z",
         "code": null,
         "name": "GOPAY",
         "type": "e-wallet",
         "minimum_deposit": "25000.00",
         "minimum_withdrawal": "120000.00",
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "http://example.com"
      },
      "user": {
         "id": "e1296628-785a-43d8-8a83-012d33498453",
         "created_at": "2023-06-30T01:40:21.537Z",
         "updated_at": "2023-06-30T01:40:21.537Z",
         "name": "Husain",
         "phone_number": "62895704447600",
         "balance": "0.00",
         "profile_picture": null,
         "is_fundraiser": false,
         "is_name_hidden": false,
         "role": "user"
      }
   },
   {
      "id": "347900e0-8a64-4a7d-bc1d-114849bc1dbf",
      "created_at": "2023-06-30T03:56:41.467Z",
      "updated_at": "2023-06-30T04:04:22.861Z",
      "external_id": "2589475843739457",
      "account_number": "5684576857",
      "name": "Bayu",
      "status": "enabled",
      "expiration_date": "2023-06-30T03:19:19.791Z",
      "payment_method": {
         "id": "075f0a42-4264-4b17-abf3-c3e42be2f0b9",
         "created_at": "2023-06-30T01:41:41.096Z",
         "updated_at": "2023-06-30T01:41:41.096Z",
         "code": null,
         "name": "GOPAY",
         "type": "e-wallet",
         "minimum_deposit": "25000.00",
         "minimum_withdrawal": "120000.00",
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "http://example.com"
      },
      "user": {
         "id": "e1296628-785a-43d8-8a83-012d33498453",
         "created_at": "2023-06-30T01:40:21.537Z",
         "updated_at": "2023-06-30T01:40:21.537Z",
         "name": "Husain",
         "phone_number": "62895704447600",
         "balance": "0.00",
         "profile_picture": null,
         "is_fundraiser": false,
         "is_name_hidden": false,
         "role": "user"
      }
   }
]
```

</details>

### 3. Change password

<details>
<summary>post</summary>
<br>
/api/v1/profile/password
<br>
<br>

**Body**

```json
{
   "old_password": "17Kokomo#",
   "new_password": "17Kokomo#",
   "confirm_password": "17Kokomo#"
}
```

**Response**

```json
OK
```

</details>

### 4. Change phone

<details>
<summary>post</summary>
<br>
/api/v1/profile/phone
<br>
<br>

**Body**

```json
{
   "phone_number": "62895704447596",
   "verification_code": "123456"
}
```

**Response**

```json
OK
```

</details>

### 4. Change Social media

<details>
<summary>post</summary>
<br>
/api/v1/profile/social-medias
<br>
<br>

**Body**

```json
{
   "website": "https://www.roisuladib.com",
   "instagram": "https://www.instagram.com/adib_id/",
   "youtube": "https://www.youtube.com/@adibid",
   "facebook": "https://www.facebook.com/@adibid",
   "twitter": "https://www.twitter.com/@adibid"
}
```

**Response**

```json
OK
```

</details>

## re-use API

- API /get /api/v1/provinsi_list<br>

**Details:** Endpoint ini digunakan untuk meminta data list provinsi pada
kategori yang tersedia serta settingan yang lainya

- API /get /api/v1/kabupaten_list<br>
- API /get /api/v1/kecamatan_list<br>

### API /get /api/v1/payment_methods

<details>
<summary> Details API payment_methods</summary>

**Details:** Endpoint ini digunakan untuk meminta payment mothods yang tersedia

**Response valid:**

```json
{
   "data": [
      {
         "id": 1,
         "method_code": "bank1",
         "method_type": "bank",
         "minimum_deposit": 1000.0,
         "minimum_withdrawal": 500.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/bank1-logo.png"
      },
      {
         "id": 2,
         "method_code": "ewallet1",
         "method_type": "e-wallet",
         "minimum_deposit": 500.0,
         "minimum_withdrawal": 100.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/ewallet1-logo.png"
      },
      {
         "id": 3,
         "method_code": "bank2",
         "method_type": "bank",
         "minimum_deposit": 2000.0,
         "minimum_withdrawal": 1000.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/bank2-logo.png"
      },
      {
         "id": 4,
         "method_code": "ewallet2",
         "method_type": "e-wallet",
         "minimum_deposit": 100.0,
         "minimum_withdrawal": 50.0,
         "enable_deposit": true,
         "enable_withdrawal": true,
         "url_logo": "https://example.com/ewallet2-logo.png"
      }
   ]
}
```

</details>

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
