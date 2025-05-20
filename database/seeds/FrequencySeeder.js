/* eslint-disable class-methods-use-this */
/*
|--------------------------------------------------------------------------
| FrequencySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Frequency = use('App/Models/Frequency');

class FrequencySeeder {
        async run() {
                await Frequency.createMany([
                        { frequency_type: 'once' },
                        { frequency_type: 'daily' },
                        { frequency_type: 'weekly' },
                        { frequency_type: 'monthly' },
                ]);
        }
}

module.exports = FrequencySeeder;
