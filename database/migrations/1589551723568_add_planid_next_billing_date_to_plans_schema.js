/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
const uuidv4 = require('uuid/v4');

class AddPlanidNextBillingDateToPlansSchema extends Schema {
        up() {
                this.alter('plans', table => {
                        // alter table
                        table.string('plan_id').alter();
                        table.timestamp('next_billing_date');
                });
        }

        down() {
                this.alter('plans', table => {
                        // reverse alternations
                        table.string('plan_id')
                                .notNullable()
                                .alter();
                        table.dropColumn('next_billing_date');
                });
        }
}

module.exports = AddPlanidNextBillingDateToPlansSchema;
