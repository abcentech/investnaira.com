/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TaskSchema extends Schema {
        up() {
                this.create('tasks', table => {
                        table.uuid('id')
                                .notNullable()
                                .primary();
                        table.string('user_id', 100).notNullable();
                        table.string('name', 100).notNullable();
                        table.string('type', 50).notNullable();
                        table.integer('frequency')
                                .references('id')
                                .inTable('frequencies')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.float('reward', 15, 4).defaultTo(0);
                        table.string('starts_at').defaultTo(0);
                        table.integer('completion_level').defaultTo(1); // 1: not completed
                        // 2: child has completed 3. parent confirmed and reward paid

                        table.timestamps();
                });
        }

        down() {
                this.drop('tasks');
        }
}

module.exports = TaskSchema;
