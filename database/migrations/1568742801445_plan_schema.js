/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class PlanSchema extends Schema {
        up() {
                this.create('plans', table => {
                        table.increments();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.timestamps();
                        table.integer('plan_id').notNullable();
                        table.string('plan_name', 100).notNullable();
                        table.integer('fund', 3)
                                .references('id')
                                .inTable('funds')
                                .onUpdate('CASCADE')
                                .notNullable();
                        table.float('balance', 15, 4).defaultTo(0);
                        table.float('returns', 15, 4).defaultTo(0);
                        table.float('target', 15, 4).defaultTo(0);
                        table.float('accrued_interest', 15, 4).defaultTo(0);
                        table.timestamp('maturity_date');
                        table.integer('frequency')
                                .references('id')
                                .inTable('frequencies')
                                .onUpdate('CASCADE')
                                .notNullable();
                });
        }

        down() {
                this.drop('plans');
        }
}

module.exports = PlanSchema;
