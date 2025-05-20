/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
// eslint-disable-next-line no-undef
const Role = use('App/Models/Role');

class RoleSeeder {
        // eslint-disable-next-line class-methods-use-this
        async run() {
                await Role.createMany([
                        { role_name: 'child' },
                        { role_name: 'user' },
                        { role_name: 'business' },
                        { role_name: 'admin' },
                        { role_name: 'superadmin' },
                ]);
        }
}

module.exports = RoleSeeder;
