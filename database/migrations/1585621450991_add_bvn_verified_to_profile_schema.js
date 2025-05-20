/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddBvnVerifiedToProfileSchema extends Schema {
        up() {
                this.table('profiles', table => {
                        // alter table
                        table.boolean('bvn_verified')
                                .notNullable()
                                .default(false);
                });
        }

        down() {
                this.table('profiles', table => {
                        // reverse alternations
                        table.dropColumn('bvn_verified');
                });
        }
}

module.exports = AddBvnVerifiedToProfileSchema;
