/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddRolesToUsersSchema extends Schema {
        up() {
                this.table('users', table => {
                        // alter table
                        // drop role column
                        table.dropColumn('role');
                        // add roles column
                        table.integer('role_id', 3)
                                .references('id')
                                .inTable('roles')
                                .onUpdate('CASCADE')
                                .onDelete('CASCADE')
                                .notNullable()
                                .defaultTo(2);
                });
        }

        down() {
                this.table('users', table => {
                        // reverse alternations
                        // drop columns
                        table.dropForeign('role_id');
                        table.dropColumn('role_id');

                        // add role column
                        table.enu('role', ['user', 'admin', 'superadmin'])
                                .notNullable()
                                .defaultTo('user');
                });
        }
}

module.exports = AddRolesToUsersSchema;
