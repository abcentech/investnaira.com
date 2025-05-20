/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VideoSchema extends Schema {
        up() {
                this.create('videos', table => {
                        table.increments();
                        table.string('name', 100)
                                .notNullable()
                                .unique();
                        table.string('length', 50).notNullable();
                        table.string('url', 100)
                                .notNullable()
                                .unique();
                        table.string('thumbnail', 100)
                                .notNullable()
                                .unique();
                        table.timestamps();
                });
        }

        down() {
                this.drop('videos');
        }
}

module.exports = VideoSchema;
