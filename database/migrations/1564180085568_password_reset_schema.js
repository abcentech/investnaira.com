/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class PasswordResetSchema extends Schema {
        up() {
                this.create('password_resets', table => {
                        table.increments();
                        table.timestamps();
                        table.string('email')
                                .references('email')
                                .inTable('users');
                        table.string('email_token')
                                .notNullable()
                                .unique();
                });
        }

        down() {
                this.drop('password_resets');
        }
}

module.exports = PasswordResetSchema;
