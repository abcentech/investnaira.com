/*
|--------------------------------------------------------------------------
| ChannelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
// eslint-disable-next-line no-undef
const Channel = use('App/Models/Channel');

class ChannelSeeder {
        // eslint-disable-next-line class-methods-use-this
        async run() {
                await Channel.createMany([
                        { channel_name: 'bank' },
                        { channel_name: 'cash' },
                        { channel_name: 'dashboard' },
                        { channel_name: 'wallet' },
                        { channel_name: 'plan' },
                        { channel_name: 'user' },
                        { channel_name: 'investnaira' },
                ]);
        }
}

module.exports = ChannelSeeder;
