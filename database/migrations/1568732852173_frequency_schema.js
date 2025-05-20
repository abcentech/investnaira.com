/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class FrequencySchema extends Schema {
        up() {
                this.create('frequencies', table => {
                        table.increments();
                        table.string('frequency_type', 100)
                                .notNullable()
                                .unique();
                        table.timestamps();
                });
        }

        down() {
                this.drop('frequencies');
        }
}

module.exports = FrequencySchema;
