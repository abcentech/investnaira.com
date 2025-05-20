/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ArticlesSchema extends Schema {
        up() {
                this.create('articles', table => {
                        table.increments();
                        table.json('content');
                        table.timestamps();
                });
        }

        down() {
                this.drop('articles');
        }
}

module.exports = ArticlesSchema;
