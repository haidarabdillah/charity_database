exports.up = function (knex) {
  return knex.schema
    // table untuk calon donatur
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('phone_number').unique().notNullable();
      table.string('name');
      table.string('profile_picture');
      table.boolean('is_name_hidden').defaultTo(false);
      table.string('password_hash');
      table.decimal('balance', 10, 2).defaultTo(0);
      table.boolean('is_fundraiser').defaultTo(false);
      table.boolean('is_org').defaultTo(false);
      table.boolean('is_generated_va').defaultTo(false);
      table.enum('role', ['user', 'admin', 'sub-admin']).defaultTo('user');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // Tabel "payment_methods" untuk menyimpan daftar bank dan metode payment yang valid untuk deposit dan withdrawal bisa dikonfigurasi oleh admin dan bisa di cek berdasarkan worker xendit
    .createTable('payment_methods', function (table) {
      table.increments('id').primary();
      table.string('method_code');
      table.enum('method_type', ['bank', 'e-wallet']);
      table.decimal('minimum_deposit');
      table.decimal('minimum_withdrawal');
      table.boolean('enable_deposit').defaultTo(true);
      table.boolean('enable_withdrawal').defaultTo(true);
      table.string('url_logo');
    })

    // metode deposit untuk masing masing user sesuai api dalam xendit
    .createTable('deposit_methods', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('payment_methods_id').unsigned().references('id').inTable('payment_methods');
      table.string('external_id');
      table.string('account_number');
      table.string('name');
      table.boolean('status');
      table.dateTime('expiration_date');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // history deposit user sesuai dengan external id dari xendit
    .createTable('deposit_history', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.integer('payment_method_id').unsigned().notNullable();
      table.decimal('amount').notNullable();
      table.timestamp('timestamp').defaultTo(knex.fn.now());
      table.string('virtual_account_id').notNullable();
      table.enum('status', ['pending', 'success', 'failed']).defaultTo('pending');
      table.string('external_id_transaction');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // tabel fundraiser_profile dengan skema user bisa menjadi personal dan organisasi, ini juga menjadi dasar dari public fundraiser data
    .createTable('fundraiser_profile', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('full_name');
      table.string('profile_picture_url');
      table.string('vision_mission');
      table.string('background');
      table.boolean('is_personal').defaultTo(false);
      table.boolean('is_org').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // personal kyc untuk user dengan mencantumkan photo ktp selfie dan kk
    .createTable('fundraiser_kyc_personal', (table) => {
      table.increments('kyc_id').primary();
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.string('id_number_ktp').notNullable();
      table.string('id_number_kk').notNullable();
      table.string('address').notNullable();
      table.integer('id_desa').unsigned().notNullable();
      table.string('photo_id_front').notNullable();
      table.string('photo_id_back').notNullable();
      table.string('photo_kk').notNullable();
      table.string('selfie_photo').notNullable();
      table.enum('verification_status', ['pending', 'approved', 'rejected']).defaultTo('pending');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // Tabel "kyc_org" untuk menyimpan data KYC organisasi (lembaga penyalur donasi)
    .createTable('fundraiser_kyc_org', (table) => {
      table.increments('kyc_id').primary();
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.string('org_name');
      table.string('tax_id');
      table.string('akta_number');
      table.string('url_tax_id');
      table.string('url_akta');
      table.string('address');
      table.integer('desa_id').unsigned().notNullable().references('id').inTable('desa');
      table.enum('verification_status', ['pending', 'approved', 'rejected']).defaultTo('pending');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // Tabel "banks" untuk menyimpan informasi bank account users untuk wd
    .createTable('fundraiser_bank_accounts', (table) => {
      table.increments('bank_id').primary();
      table.string('account_number');
      table.string('account_name');
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.enum('verification_status', ['pending', 'approved', 'rejected']).defaultTo('pending');
      table.integer('payment_methods_id').unsigned().references('id').inTable('payment_methods');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })


    // Skema untuk tabel fundraiser_contacts
    .createTable('fundraiser_contacts', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('website');
      table.string('instagram');
      table.string('youtube');
      table.string('facebook');
      table.string('twitter');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // skema untuk kategori dari campaigns
    .createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('icon').notNullable();
      table.string('color').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // list provinsi yang tersedia
    .createTable('provinsi', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })

    // list kabupaten yang tersedia
    .createTable('kabupaten', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })

    // list kecamatan yang tersedia
    .createTable('kecamatan', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })

    // list desa yang tersedia
    .createTable('desa', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })

    // campaigns data dengan penempatan desa_id untuk parameter lokasi serta ada langitude dan longitude untuk next step
    .createTable('campaigns', function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.decimal('required_amount', 10, 2).notNullable();
      table.decimal('total_collected_amount', 10, 2).notNullable();
      table.decimal('total_withdrawn_amount', 10, 2).notNullable();
      table.string('detail_required_amount').notNullable();
      table.integer('category_id').unsigned().references('id').inTable('categories');
      table.integer('desa_id').unsigned().notNullable().references('id').inTable('desa');
      table.float('longitude').notNullable();
      table.float('latitude').notNullable();
      table.enum('verification_status', ['pending', 'approved', 'rejected', 'closed']).defaultTo('pending');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('deadline_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // dokument yang diperlukan untuk verifikasi lanjutan ketika user membuat campaign baru eg. verifikasi data pasien
    .createTable('campaigns_doc', function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('url_doc').notNullable();
      table.integer('campaigns_id').unsigned().references('id').inTable('campaigns');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // banner list untuk campaign
    .createTable('banners', function (table) {
      table.increments('id').primary();
      table.string('link').notNullable();
      table.integer('campaigns_id').unsigned().references('id').inTable('campaigns');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // fundraiser request withdrawals 
    .createTable('fundraiser_withdrawals', function (table) {
      table.increments('id').primary();
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.integer('campaigns_id').unsigned().references('id').inTable('campaigns');
      table.integer('fundraiser_bank_accounts_id').unsigned().references('id').inTable('fundraiser_bank_accounts');
      table.decimal('amount', 10, 2).notNullable();
      table.string('status').notNullable();
      table.timestamp('completed_at');
      table.string('external_id_transaction');
      table.enum('verification_status', ['pending', 'approved', 'rejected', 'success', 'issue']).defaultTo('pending'); // pending awal, approved = approve admin, rejected=reject admin, success= setelah dikirim oleh xendit, issues= isu yang ada di xendit
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // fundraiser updates kontent setelah atau dalam masa campaigns berlangsung
    .createTable('campaign_updates', function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('campaign_id').unsigned().notNullable().references('id').inTable('campaigns');
      table.enum('update_type', ['penyaluran', 'berita', 'withdraw']).notNullable();
      table.text('update_description').notNullable();
      table.integer('fundraiser_withdrawal_id').unsigned().references('id').inTable('fundraiser_withdrawals').onDelete('SET NULL');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // table untuk story campaign (feature seprti instastroy)
    .createTable('campaign_story', function (table) {
      table.increments('id').primary();
      table.integer('campaign_id').unsigned().notNullable().references('id').inTable('campaigns');
      table.string('url_image').notNullable();
      table.text('story_description').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // table untuk transaksi calon donasi ketika melakukan donasin ke campaign
    .createTable('donations', function (table) {
      table.increments('id').primary();
      table.decimal('amount', 10, 2).notNullable();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.integer('campaign_id').unsigned().notNullable().references('id').inTable('campaigns');
      table.text('comment');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    // table untuk perhitungan static agar lebih mudah diakses frontend
    .createTable('statistics', function (table) {
      table.increments('id').primary();
      table.integer('total_donations').defaultTo(0);
      table.integer('total_donors').defaultTo(0);
      table.integer('total_campaigns').defaultTo(0);
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

};
// exports.down = function (knex) {
//   return knex.schema
//     .dropTableIfExists('donations')
//     .dropTableIfExists('campaign_updates')
//     .dropTableIfExists('fundraiser_geolocation')
//     .dropTableIfExists('campaigns')
//     .dropTableIfExists('categories')
//     .dropTableIfExists('fundraiser_withdrawals')
//     .dropTableIfExists('fundraiser_contacts')
//     .dropTableIfExists('fundraiser_bank_accounts')
//     .dropTableIfExists('kyc_org_documents')
//     .dropTableIfExists('fundraiser_kyc_org')
//     .dropTableIfExists('fundraiser_kyc_personal')
//     .dropTableIfExists('fundraiser_profile')
//     .dropTableIfExists('deposit_history')
//     .dropTableIfExists('deposit_methods')
//     .dropTableIfExists('payment_methods')
//     .dropTableIfExists('users')
//     .dropTableIfExists('statistics')
//     .then(() => {
//       console.log('All tables dropped successfully.');
//     })
//     .catch((error) => {
//       console.error('Failed to drop tables:', error);
//     });
// };
