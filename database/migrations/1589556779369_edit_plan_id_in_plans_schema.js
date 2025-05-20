/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
const uuidv4 = require('uuid/v4');

class EditPlanIdInPlansSchema extends Schema {
        up() {
                this.table('plans', table => {
                        // alter table
                        table.dropPrimary();
                        table.uuid('plan_id')
                                .notNullable()
                                .primary()
                                .defaultTo(uuidv4())
                                .alter();
                });
        }

        down() {
                this.table('plans', table => {
                        // reverse alternations

                        table.dropPrimary();

                        table.integer('id')
                                .primary()
                                .notNullable()
                                .alter();
                });
        }
}

module.exports = EditPlanIdInPlansSchema;
