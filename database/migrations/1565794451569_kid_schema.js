/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class KidSchema extends Schema {
        up() {
                this.create('kids', table => {
                        table.uuid('id')
                                .notNullable()
                                .unique()
                                .primary();
                        // table.integer('plan_id').notNullable();
                        table.uuid('user_id') // parent id
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.string('short_id', 10)
                                .notNullable()
                                .unique();
                        table.string('firstname', 100).notNullable();
                        table.string('lastname', 100).notNullable();
                        table.enu('gender', ['male', 'female', 'other']);
                        table.timestamp('date_of_birth');
                        table.timestamps();
                });
        }

        down() {
                this.drop('kids');
        }
}

module.exports = KidSchema;
