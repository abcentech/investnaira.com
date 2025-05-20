/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddOtpHashToPasswordResetSchema extends Schema {
        up() {
                this.table('password_resets', table => {
                        // alter table
                        table.string('email_otp', 60).notNullable();
                });
        }

        down() {
                this.table('password_resets', table => {
                        // reverse alternations
                        table.dropColumn('email_otp');
                });
        }
}

module.exports = AddOtpHashToPasswordResetSchema;
