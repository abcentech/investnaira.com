/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class BankSchema extends Schema {
        up() {
                this.create('banks', table => {
                        table.string('bank_code', 3)
                                .notNullable()
                                .primary();
                        table.string('bank_name', 100)
                                .notNullable()
                                .unique();
                        table.timestamps();
                });
        }

        down() {
                this.drop('banks');
        }
}

module.exports = BankSchema;
