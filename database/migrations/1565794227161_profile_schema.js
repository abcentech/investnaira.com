/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class ProfileSchema extends Schema {
        up() {
                this.create('profiles', table => {
                        table.increments();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.enu('gender', ['male', 'female', 'other']);
                        table.string('address');
                        table.string('city');
                        table.string('state');
                        table.string('next_of_kin_name');
                        table.string('next_of_kin_phone');
                        table.timestamp('date_of_birth');
                        table.string('place_of_birth');

                        table.timestamps();
                });
        }

        down() {
                this.drop('profiles');
        }
}

module.exports = ProfileSchema;
