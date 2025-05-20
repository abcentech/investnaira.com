/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
const uuidv4 = require('uuid/v4');

class CampaignSchema extends Schema {
        up() {
                this.create('campaigns', table => {
                        table.uuid('id')
                                .notNullable()
                                .primary()
                                .defaultTo(uuidv4());
                        table.uuid('user_id')
                                .unsigned()
                                .references('id')
                                .inTable('users')
                                .onUpdate('CASCADE')
                                .notNullable();

                        table.string('name', 100).notNullable();
                        table.text('description');
                        table.string('type', 20).defaultTo('fees'); // fees, health, startup, energy

                        table.string('status', 20).defaultTo('pending');

                        table.float('balance', 15, 4).defaultTo(0);
                        table.float('target', 15, 4).defaultTo(0);

                        table.timestamp('maturity_date');
                        table.string('maturity_trigger', 20).defaultTo('date');
                        table.string('logo_pic', 200).notNullable();
                        table.string('cover_pic', 200).notNullable();
                        table.string('supporting_docs', 200);
                        table.string('color_code', 20).defaultTo('4caf50');

                        table.timestamps();
                });
        }

        down() {
                this.drop('campaigns');
        }
}

module.exports = CampaignSchema;
