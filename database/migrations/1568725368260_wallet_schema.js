/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class WalletSchema extends Schema {
        up() {
                this.create('wallets', table => {
                        table.increments();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.string('wallet_id', 10)
                                .notNullable()
                                .unique();
                        table.float('balance', 15, 4).defaultTo(0);
                        table.timestamps();
                });
        }

        down() {
                this.drop('wallets');
        }
}

module.exports = WalletSchema;
