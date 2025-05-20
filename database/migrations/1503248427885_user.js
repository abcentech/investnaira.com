/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class UserSchema extends Schema {
        up() {
                this.create('users', table => {
                        table.uuid('id')
                                .notNullable()
                                .primary();
                        table.string('email', 100)
                                .notNullable()
                                .unique();
                        table.string('firstname', 100).notNullable();
                        table.string('lastname', 100).notNullable();
                        table.string('short_id', 10)
                                .notNullable()
                                .unique();
                        table.string('password', 60).notNullable();
                        table.enu('role', ['user', 'admin', 'superadmin'])
                                .notNullable()
                                .defaultTo('user');
                        table.string('phone_no', 20);

                        table.boolean('email_verified').defaultTo(false);
                        table.string('source', 20);
                        table.string('referrer', 10); // should reference short_id

                        table.timestamps();
                });
        }

        down() {
                this.drop('users');
        }
}

module.exports = UserSchema;
