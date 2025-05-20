/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ParentChildSchema extends Schema {
        up() {
                this.create('parent_children', table => {
                        table.uuid('parent_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .onDelete('CASCADE')
                                .notNullable();
                        table.uuid('child_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .onDelete('CASCADE')
                                .notNullable()
                                .primary();
                        table.timestamps();
                });
        }

        down() {
                this.drop('parent_children');
        }
}

module.exports = ParentChildSchema;
