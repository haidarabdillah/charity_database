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

    // Tabel "banks" untuk menyimpan informasi bank account
    .createTable('banks', (table) => {
      table.increments('bank_id').primary();
      table.string('account_number');
      table.integer('user_id').unsigned().references('users.user_id');
      table.boolean('is_verified').defaultTo(false);
      table.integer('bank_id').unsigned().references('bank_list.bank_id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })


    // Tabel "bank_list" untuk menyimpan daftar bank yang valid
    .createTable('bank_list', (table) => {
      table.increments('bank_id').primary();
      table.string('bank_name');
      table.string('logo_url');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('fixed_virtual_accounts', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.integer('bank_account_id').unsigned().references('bank_accounts.id');
      table.string('external_id');
      table.string('bank_code');
      table.string('name');
      table.decimal('fixed_amount');
      table.string('status');
      table.dateTime('expiration_date');
    })


    .createTable('allowed_deposit_methods', function(table) {
      table.increments('id').primary();
      table.string('method_code');
      table.enum('method_type', ['bank', 'e-wallet']);
      table.decimal('minimum_deposit');
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
    .createTable('payment_methods', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('users.id');
      table.string('method').notNullable();
      table.timestamps(true, true);
    })
    .createTable('transactions', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('users.id');
      table.string('transaction_type').notNullable();
      table.decimal('amount', 10, 2).notNullable();
      table.timestamps(true, true);
    });
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
