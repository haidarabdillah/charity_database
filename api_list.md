# ENDOPOINT LIST

## 1. Resgister

### *Register - Meminta Kode Verifikasi*

**Endpoint:** POST /api/register/request-verification-code

Endpoint ini digunakan untuk meminta kode verifikasi melalui nomor telepon yang telah diinput oleh pengguna.

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

Berikut adalah contoh implementasi endpoint untuk verifikasi kode pada proses registrasi:

### *Register - verify Kode Verifikasi*

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

### *Register - Kirim Kode Verifikasi dan Password*

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

## 2. Login

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

## 3. Forgot Password

### *Forgot - Meminta Kode Verifikasi*

**Endpoint:** POST /api/register/request-forgot-code

Endpoint ini digunakan untuk meminta kode verifikasi melalui nomor telepon yang telah diinput oleh pengguna.

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

### *Forgot - Kirim Kode Verifikasi dan Password*

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
