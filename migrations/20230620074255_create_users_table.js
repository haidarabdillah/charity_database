exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('user_id').primary();
      table.string('phone_number').unique().notNullable();
      table.string('name');
      table.string('profile_picture');
      table.boolean('is_name_hidden').defaultTo(false);
      table.string('password_hash');
      table.decimal('balance', 10, 2).defaultTo(0);
      table.boolean('is_fundraiser').defaultTo(false);
      table.timestamps(true, true);
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
      table.string('url_log');
    })

    .createTable('deposit_methode', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.integer('payment_methods_id').unsigned().references('payment_methods.bank_id');
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
      table.integer('user_id').unsigned().notNullable();
      table.integer('payment_method_id').unsigned().notNullable();
      table.decimal('amount').notNullable();
      table.timestamp('timestamp').defaultTo(knex.fn.now());
      table.string('virtual_account_id').notNullable();
      table.enum('status', ['pending', 'success', 'failed']).defaultTo('pending');
      table.string('external_id_transaction');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('kyc_personal', (table) => {
      table.increments('kyc_id').primary();
      table.integer('user_id').unsigned().references('users.user_id');
      table.string('full_name');
      table.string('id_number');
      table.string('address');
      table.string('photo_id_front');
      table.string('photo_id_back');
      table.string('selfie_photo');
      table.enum('verification_status', ['pending', 'approved', 'rejected']).defaultTo('pending');
      table.timestamps(true, true);
    })

    // Tabel "kyc_org" untuk menyimpan data KYC organisasi (lembaga penyalur donasi)
    .createTable('kyc_org', (table) => {
      table.increments('kyc_id').primary();
      table.integer('user_id').unsigned().references('users.user_id');
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
      table.integer('kyc_id').unsigned().references('kyc_org.kyc_id');
      table.string('document_name');
      table.string('file_path');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // Tabel "banks" untuk menyimpan informasi bank account users untuk wd
    .createTable('fundraiser_bank_accounts', (table) => {
      table.increments('bank_id').primary();
      table.string('account_number');
      table.integer('user_id').unsigned().references('users.user_id');
      table.boolean('is_verified').defaultTo(false);
      table.integer('payment_methods_id').unsigned().references('payment_methods.bank_id');
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

    // Skema untuk tabel fundraiser_profile
    .createTable('fundraiser_profile', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('profile_picture_url');
      table.string('vision_mission');
      table.string('background');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })



    .createTable('campaigns', function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.decimal('target_amount', 10, 2).notNullable();
      table.integer('fundraiser_id').unsigned().nullable();
      table.foreign('fundraiser_id').references('users.id');
      table.integer('category_id').unsigned().notNullable();
      table.foreign('category_id').references('categories.id');
      table.timestamps(true, true);
    })



    .createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('parent_category_id').unsigned().nullable();
      table.foreign('parent_category_id').references('categories.id');
      table.timestamps(true, true);
    })
    .createTable('donations', function (table) {
      table.increments('id').primary();
      table.decimal('amount', 10, 2).notNullable();
      table.integer('donor_id').unsigned().notNullable();
      table.foreign('donor_id').references('users.id');
      table.integer('project_id').unsigned().notNullable();
      table.foreign('project_id').references('campaigns.id');
      table.timestamps(true, true);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('transactions')
    .dropTableIfExists('payment_methods')
    .dropTableIfExists('donations')
    .dropTableIfExists('campaigns')
    .dropTableIfExists('users')
    .dropTableIfExists('categories');
};
