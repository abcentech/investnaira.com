/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TransferSchema extends Schema {
        up() {
                this.create('transfers', table => {
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
                        table.string('status', 50).notNullable();
                        table.integer('plan');
                        table.float('amount', 15, 4).notNullable();
                        table.float('wallet_balance', 15, 4).notNullable();
                        table.float('plan_balance', 15, 4).notNullable();

                        table.timestamps();
                });
        }

        down() {
                this.drop('transfers');
        }
}

module.exports = TransferSchema;
