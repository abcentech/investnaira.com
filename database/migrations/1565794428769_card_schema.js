/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class CardSchema extends Schema {
        up() {
                this.create('cards', table => {
                        table.uuid('id')
                                .notNullable()
                                .primary();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.string('embed_token', 100).notNullable();
                        table.string('expirymonth', 2).notNullable();
                        table.string('expiryyear', 4).notNullable();
                        table.string('cardBIN', 6).notNullable();
                        table.string('last4digits', 4).notNullable();
                        table.string('type', 50).notNullable();
                        table.timestamps();
                });
        }

        down() {
                this.drop('cards');
        }
}

module.exports = CardSchema;
