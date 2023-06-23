exports.up = function(knex) {
  return knex.schema
    .createTable('categories', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('parent_category_id').unsigned().nullable();
      table.foreign('parent_category_id').references('categories.id');
      table.timestamps(true, true);
    })
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.decimal('balance', 10, 2).defaultTo(0);
      table.boolean('is_fundraiser').defaultTo(false);
      table.string('kyc_verification').nullable();
      table.timestamps(true, true);
    })
    .createTable('projects', function(table) {
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
    .createTable('donations', function(table) {
      table.increments('id').primary();
      table.decimal('amount', 10, 2).notNullable();
      table.integer('donor_id').unsigned().notNullable();
      table.foreign('donor_id').references('users.id');
      table.integer('project_id').unsigned().notNullable();
      table.foreign('project_id').references('projects.id');
      table.timestamps(true, true);
    })
    .createTable('payment_methods', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('users.id');
      table.string('method').notNullable();
      table.timestamps(true, true);
    })
    .createTable('transactions', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('users.id');
      table.string('transaction_type').notNullable();
      table.decimal('amount', 10, 2).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('transactions')
    .dropTableIfExists('payment_methods')
    .dropTableIfExists('donations')
    .dropTableIfExists('projects')
    .dropTableIfExists('users')
    .dropTableIfExists('categories');
};
