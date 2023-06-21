exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('address', 255).unique().notNullable();
            table.string('presale_address', 255).unique().notNullable();
            table.integer('parent_reff');
            table.string('iv', 255).notNullable();;
            table.string('content', 255).notNullable();;
            table.decimal('specta_balance', 18, 10).notNull().defaultTo(0);
            table.decimal('specta_reward', 18, 10).notNull().defaultTo(0);
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('users');
};
