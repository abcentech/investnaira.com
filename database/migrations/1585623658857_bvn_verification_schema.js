/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BvnVerificationSchema extends Schema {
        up() {
                this.create('bvn_verifications', table => {
                        table.increments();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.string('otp', 60).notNullable();
                        table.string('firstname', 100).notNullable();
                        table.string('lastname', 100).notNullable();
                        table.string('phone_no', 20);
                        table.timestamp('date_of_birth');
                        table.timestamps();
                });
        }

        down() {
                this.drop('bvn_verifications');
        }
}

module.exports = BvnVerificationSchema;
