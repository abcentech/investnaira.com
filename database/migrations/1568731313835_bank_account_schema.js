/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class BankAccountSchema extends Schema {
        up() {
                this.create('bank_accounts', table => {
                        table.increments();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.string('account_no', 10)
                                .unique()
                                .notNullable();
                        table.string('account_name', 100).notNullable();
                        table.string('bank_code', 3)
                                .references('bank_code')
                                .inTable('banks')
                                .onUpdate('CASCADE')
                                .notNullable();

                        table.timestamps();
                });
        }

        down() {
                this.drop('bank_accounts');
        }
}

module.exports = BankAccountSchema;
