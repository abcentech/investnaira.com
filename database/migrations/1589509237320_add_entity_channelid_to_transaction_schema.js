/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddEntityChannelidToTransactionSchema extends Schema {
        up() {
                this.alter('transactions', table => {
                        // alter table
                        table.string('entity', 100).notNullable();
                        table.string('entity_id', 100).notNullable();
                        table.string('channel_id', 100);
                        table.string('status', 100).notNullable();
                        table.string('related_tx_ref', 100);
                });
        }

        down() {
                this.alter('transactions', table => {
                        // reverse alternations
                        table.dropColumn('entity');
                        table.dropColumn('entity_id');
                        table.dropColumn('channel_id');
                        table.dropColumn('status');
                        table.dropColumn('related_tx_ref');

                });
        }
}

module.exports = AddEntityChannelidToTransactionSchema;
