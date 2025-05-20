/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ChildProfileSchema extends Schema {
        up() {
                this.create('child_profiles', table => {
                        table.increments();
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable()
                                .unique();
                        table.string('gender', 30);
                        table.timestamp('date_of_birth');
                        table.float('allowance', 15, 4);
                        table.integer('allowance_frequency')
                                .references('id')
                                .inTable('frequencies')
                                .onUpdate('CASCADE');
                        table.float('spend_limit', 15, 4);
                        table.integer('spend_limit_frequency')
                                .references('id')
                                .inTable('frequencies')
                                .onUpdate('CASCADE');
                        table.string('card_status', 30).defaultTo('Not Created');

                        table.timestamps();
                });
        }

        down() {
                this.drop('child_profiles');
        }
}

module.exports = ChildProfileSchema;
