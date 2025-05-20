/** @type {import('@adonisjs/lucid/src/Schema')} */
// eslint-disable-next-line no-undef
const Schema = use('Schema');

class ChannelSchema extends Schema {
        up() {
                this.create('channels', table => {
                        table.increments();
                        table.string('channel_name', 100)
                                .notNullable()
                                .unique();
                        table.timestamps();
                });
        }

        down() {
                this.drop('channels');
        }
}

module.exports = ChannelSchema;
