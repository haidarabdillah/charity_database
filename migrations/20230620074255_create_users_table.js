exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('phone_number').unique().notNullable();
      table.string('name');
      table.string('profile_picture');
      table.boolean('is_name_hidden').defaultTo(false);
      table.string('password_hash');
      table.decimal('balance', 10, 2).defaultTo(0);
      table.boolean('is_fundraiser').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // Tabel "payment_methods" untuk menyimpan daftar bank yang valid untuk deposit dan withdrawal
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

    .createTable('deposit_methods', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('payment_methods_id').unsigned().references('id').inTable('payment_methods');
      table.string('external_id');
      table.string('account_number');
      table.string('name');
      table.string('status');
      table.dateTime('expiration_date');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })


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

    // Skema untuk tabel fundraiser_profile
    .createTable('fundraiser_profile', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('profile_picture_url');
      table.string('vision_mission');
      table.string('background');
      table.enum('verified', ['not_verified', 'personal', 'org']).defaultTo('pending');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('fundraiser_kyc_personal', (table) => {
      table.increments('kyc_id').primary();
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.string('full_name');
      table.string('id_number');
      table.string('address');
      table.string('photo_id_front');
      table.string('photo_id_back');
      table.string('selfie_photo');
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
      table.string('registration_number');
      table.string('address');
      table.enum('verification_status', ['pending', 'approved', 'rejected']).defaultTo('pending');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    // Tabel "kyc_org_documents" untuk menyimpan dokumen-dokumen KYC organisasi
    .createTable('kyc_org_documents', (table) => {
      table.increments('document_id').primary();
      table.integer('kyc_id').unsigned().references('fundraiser_kyc_org.kyc_id');
      table.string('document_name');
      table.string('file_path');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // Tabel "banks" untuk menyimpan informasi bank account users untuk wd
    .createTable('fundraiser_bank_accounts', (table) => {
      table.increments('bank_id').primary();
      table.string('account_number');
      table.string('account_name');
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.boolean('is_verified').defaultTo(false);
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

    .createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('provinsi', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })
    .createTable('kabupaten', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })
    .createTable('kecamatan', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })
    .createTable('desa', function (table) {
      table.string('id', 10).primary().collate('utf8mb4_general_ci').notNullable();
      table.string('nama', 32).collate('utf8mb4_general_ci').notNullable();
    })
  
    .createTable('campaigns', function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.decimal('required_amount', 10, 2).notNullable();
      table.decimal('total_collected_amount', 10, 2).notNullable();
      table.decimal('total_withdrawn_amount', 10, 2).notNullable();
      table.integer('category_id').unsigned().references('id').inTable('categories');
      table.integer('desa_id').unsigned().notNullable().references('id').inTable('desa');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('banners', function (table) {
      table.increments('id').primary();
      table.integer('campaigns_id').unsigned().references('id').inTable('campaigns');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('fundraiser_withdrawals', function (table) {
      table.increments('id').primary();
      table.integer('fundraiser_id').unsigned().references('id').inTable('fundraiser_profile');
      table.integer('campaigns_id').unsigned().references('id').inTable('campaigns');
      table.decimal('amount', 10, 2).notNullable();
      table.string('status').notNullable();
      table.timestamp('requested_at').defaultTo(knex.fn.now());
      table.timestamp('completed_at');
      table.string('external_id_transaction');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })


    .createTable('campaign_updates', function (table) {
      table.increments('id').primary();
      table.integer('campaign_id').unsigned().notNullable().references('id').inTable('campaigns');
      table.enum('update_type', ['penyaluran', 'berita', 'withdraw']).notNullable();
      table.text('update_description').notNullable();
      table.integer('fundraiser_withdrawal_id').unsigned().references('id').inTable('fundraiser_withdrawals').onDelete('SET NULL');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('donations', function (table) {
      table.increments('id').primary();
      table.decimal('amount', 10, 2).notNullable();
      table.integer('donor_id').unsigned().notNullable().references('id').inTable('users');
      table.integer('campaign_id').unsigned().notNullable().references('id').inTable('campaigns');
      table.text('comment');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

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
