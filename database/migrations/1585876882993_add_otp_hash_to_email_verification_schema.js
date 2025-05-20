/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddOtpHashToEmailVerificationSchema extends Schema {
        up() {
                this.table('email_verifications', table => {
                        // alter table
                        table.string('email_otp', 60).notNullable();
                });
        }

        down() {
                this.table('email_verifications', table => {
                        // reverse alternations
                        table.dropColumn('email_otp');

                });
        }
}

module.exports = AddOtpHashToEmailVerificationSchema;
