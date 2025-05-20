/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class FundSchema extends Schema {
        up() {
                this.create('funds', table => {
                        table.increments();
                        table.string('fund_name', 100)
                                .notNullable()
                                .unique();
                        table.timestamps();
                });
        }

        down() {
                this.drop('funds');
        }
}

module.exports = FundSchema;
