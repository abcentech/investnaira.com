/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddShortidToCampaignSchema extends Schema {
        up() {
                this.table('campaigns', table => {
                        // alter table
                        table.string('short_id', 50)
                                .notNullable()
                                .unique();
                });
        }

        down() {
                this.table('campaigns', table => {
                        // reverse alternations
                        table.dropColumn('short_id');
                });
        }
}

module.exports = AddShortidToCampaignSchema;
