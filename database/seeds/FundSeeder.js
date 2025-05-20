/* eslint-disable class-methods-use-this */
/*
|--------------------------------------------------------------------------
| FundSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
// eslint-disable-next-line no-undef
const Fund = use('App/Models/Fund');

class FundSeeder {
        async run() {
                await Fund.createMany([
                        { fund_name: 'conservative' },
                        { fund_name: 'balanced' },
                        { fund_name: 'aggressive' },
                ]);
        }
}

module.exports = FundSeeder;
