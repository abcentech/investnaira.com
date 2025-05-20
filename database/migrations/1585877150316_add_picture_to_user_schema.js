/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddPictureToUserSchema extends Schema {
        up() {
                this.table('users', table => {
                        // alter table
                        table.string('picture');
                });
        }

        down() {
                this.table('users', table => {
                        // reverse alternations
                        table.dropColumn('picture');
                });
        }
}

module.exports = AddPictureToUserSchema;
