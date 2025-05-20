/* eslint-disable class-methods-use-this */
/*
|--------------------------------------------------------------------------
| VideoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Video = use('App/Models/Video');

class VideoSeeder {
        async run() {
                await Video.createMany([
                        {
                                name: 'Finance Basics',
                                length: '9:29',
                                url: 'https://www.youtube.com/watch?v=yhyVW6sbZeA',
                                thumbnail:
                                        'https://image.shutterstock.com/image-vector/cartoon-money-bills-dollar-cash-260nw-537742288.jpg',
                        },
                        {
                                name: 'Saving Basics',
                                length: '15:04',
                                url: 'https://www.youtube.com/watch?v=pV6-QqitjOc',
                                thumbnail:
                                        'https://img.favpng.com/14/18/0/money-cartoon-png-favpng-1yy2PUJVvuds4LnJe9zRbhzuF.jpg',
                        },
                ]);
        }
}

module.exports = VideoSeeder;
