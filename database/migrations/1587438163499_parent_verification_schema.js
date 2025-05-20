/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ParentVerificationSchema extends Schema {
        up() {
                this.create('parent_verifications', table => {
                        table.increments();
                        table.string('parent_email').notNullable();
                        table.string('child_short_id')
                                .unsigned()
                                .references('short_id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .onDelete('CASCADE')
                                .notNullable()
                                .unique();
                        table.string('verify_otp', 60).notNullable();

                        table.timestamps();
                });
        }

        down() {
                this.drop('parent_verifications');
        }
}

module.exports = ParentVerificationSchema;
