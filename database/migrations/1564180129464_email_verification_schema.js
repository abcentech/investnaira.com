/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class EmailVerificationSchema extends Schema {
        up() {
                this.create('email_verifications', table => {
                        table.increments();
                        table.timestamps();
                        table.string('email')
                                .references('email')
                                .inTable('users')
                                .notNullable();
                        table.string('token')
                                .notNullable()
                                .unique();
                });
        }

        down() {
                this.drop('email_verifications');
        }
}

module.exports = EmailVerificationSchema;
