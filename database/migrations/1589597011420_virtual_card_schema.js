/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VirtualCardSchema extends Schema {
        up() {
                this.create('virtual_cards', table => {
                        table.uuid('id')
                                .notNullable()
                                .primary();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .onDelete('CASCADE')
                                .notNullable();
                        table.string('name_on_card', 100);
                        table.string('card_hash', 100).notNullable();
                        table.string('first_6digits', 20).notNullable();
                        table.string('last_4digits', 20).notNullable();
                        table.string('card_type', 30).notNullable();
                        table.string('expiration', 20).notNullable();
                        table.string('currency', 30)
                                .notNullable()
                                .defaultTo('NGN');
                        table.boolean('is_active')
                                .notNullable()
                                .defaultTo(true);
                        table.boolean('is_virtual')
                                .notNullable()
                                .defaultTo(true);
                        table.timestamps();
                });
        }

        down() {
                this.drop('virtual_cards');
        }
}

module.exports = VirtualCardSchema;
