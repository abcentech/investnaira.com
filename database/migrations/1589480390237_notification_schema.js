/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class NotificationSchema extends Schema {
        up() {
                this.create('notifications', table => {
                        table.uuid('id')
                                .notNullable()
                                .primary();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.string('subject', 100).notNullable();
                        table.text('body');
                        table.string('related_screen', 100);
                        table.boolean('is_read').defaultTo(false);
                        table.timestamps();
                });
        }

        down() {
                this.drop('notifications');
        }
}

module.exports = NotificationSchema;
