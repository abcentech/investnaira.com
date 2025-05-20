/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class TransactionSchema extends Schema {
        up() {
                this.create('transactions', table => {
                        table.string('tx_ref', 50)
                                .notNullable()
                                .primary();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.string('type', 20).notNullable();
                        table.string('description', 50);
                        table.integer('channel', 3)
                                .references('id')
                                .inTable('channels')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.float('amount', 15, 4).notNullable();
                        table.float('balance', 15, 4).notNullable();
                        table.timestamps();
                });
        }

        down() {
                this.drop('transactions');
        }
}

module.exports = TransactionSchema;
