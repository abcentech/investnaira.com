/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserDeviceSchema extends Schema {
        up() {
                this.create('user_devices', table => {
                        table.uuid('id')
                                .notNullable()
                                .primary();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .onDelete('CASCADE')
                                .notNullable();
                        table.string('push_token', 60)
                                .notNullable()
                                .unique();
                        table.string('brand', 60);
                        table.string('model_name', 60);
                        table.boolean('is_active').defaultTo(true);
                        table.timestamps();
                });
        }

        down() {
                this.drop('user_devices');
        }
}

module.exports = UserDeviceSchema;
