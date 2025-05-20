/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddBrandCountryToCardSchema extends Schema {
        up() {
                this.table('cards', table => {
                        // alter table
                        // drop columns
                        table.dropColumn('expirymonth');
                        table.dropColumn('expiryyear');

                        // rename card_bin, last4digits and embed token
                        table.renameColumn('embed_token', 'token');
                        table.renameColumn('cardBIN', 'first_6digits');
                        table.renameColumn('last4digits', 'last_4digits');
                        table.string('expiry', 20);
                        table.string('issuer', 100);
                        table.string('country', 100).defaultTo('NIGERIA NG');
                });
        }

        down() {
                this.table('cards', table => {
                        // reverse alternations
                        table.string('expirymonth', 2).notNullable();
                        table.string('expiryyear', 4).notNullable();
                        table.renameColumn('token', 'embed_token');
                        table.renameColumn('first_6digits', 'cardBIN');
                        table.renameColumn('last_4digits', 'last4digits');

                        table.dropColumn('expiry');
                        table.dropColumn('issuer');
                        table.dropColumn('country');
                });
        }
}

module.exports = AddBrandCountryToCardSchema;
