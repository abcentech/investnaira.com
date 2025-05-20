/* eslint-disable class-methods-use-this */
/*
|--------------------------------------------------------------------------
| BankSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Bank = use('App/Models/Bank');

class BankSeeder {
        async run() {
                await Bank.createMany([
                        {
                                bank_code: '560',
                                bank_name: 'Page MFBank',
                        },
                        {
                                bank_code: '304',
                                bank_name: 'Stanbic Mobile Money',
                        },
                        {
                                bank_code: '308',
                                bank_name: 'FortisMobile',
                        },
                        {
                                bank_code: '328',
                                bank_name: 'TagPay',
                        },
                        {
                                bank_code: '309',
                                bank_name: 'FBNMobile',
                        },
                        {
                                bank_code: '011',
                                bank_name: 'First Bank of Nigeria',
                        },
                        {
                                bank_code: '326',
                                bank_name: 'Sterling Mobile',
                        },
                        {
                                bank_code: '990',
                                bank_name: 'Omoluabi Mortgage Bank',
                        },
                        {
                                bank_code: '311',
                                bank_name: 'ReadyCash (Parkway)',
                        },
                        {
                                bank_code: '057',
                                bank_name: 'Zenith Bank',
                        },
                        {
                                bank_code: '068',
                                bank_name: 'Standard Chartered Bank',
                        },
                        {
                                bank_code: '306',
                                bank_name: 'eTranzact',
                        },
                        {
                                bank_code: '070',
                                bank_name: 'Fidelity Bank',
                        },
                        {
                                bank_code: '023',
                                bank_name: 'CitiBank',
                        },
                        {
                                bank_code: '215',
                                bank_name: 'Unity Bank',
                        },
                        {
                                bank_code: '323',
                                bank_name: 'Access Money',
                        },
                        {
                                bank_code: '302',
                                bank_name: 'Eartholeum',
                        },
                        {
                                bank_code: '324',
                                bank_name: 'Hedonmark',
                        },
                        {
                                bank_code: '325',
                                bank_name: 'MoneyBox',
                        },
                        {
                                bank_code: '301',
                                bank_name: 'JAIZ Bank',
                        },
                        {
                                bank_code: '050',
                                bank_name: 'Ecobank Plc',
                        },
                        {
                                bank_code: '307',
                                bank_name: 'EcoMobile',
                        },
                        {
                                bank_code: '318',
                                bank_name: 'Fidelity Mobile',
                        },
                        {
                                bank_code: '319',
                                bank_name: 'TeasyMobile',
                        },
                        {
                                bank_code: '999',
                                bank_name: 'NIP Virtual Bank',
                        },
                        {
                                bank_code: '320',
                                bank_name: 'VTNetworks',
                        },
                        {
                                bank_code: '221',
                                bank_name: 'Stanbic IBTC Bank',
                        },
                        {
                                bank_code: '501',
                                bank_name: 'Fortis Microfinance Bank',
                        },
                        {
                                bank_code: '329',
                                bank_name: 'PayAttitude Online',
                        },
                        {
                                bank_code: '322',
                                bank_name: 'ZenithMobile',
                        },
                        {
                                bank_code: '303',
                                bank_name: 'ChamsMobile',
                        },
                        {
                                bank_code: '403',
                                bank_name: 'SafeTrust Mortgage Bank',
                        },
                        {
                                bank_code: '551',
                                bank_name: 'Covenant Microfinance Bank',
                        },
                        {
                                bank_code: '415',
                                bank_name: 'Imperial Homes Mortgage Bank',
                        },
                        {
                                bank_code: '552',
                                bank_name: 'NPF MicroFinance Bank',
                        },
                        {
                                bank_code: '526',
                                bank_name: 'Parralex',
                        },
                        {
                                bank_code: '035',
                                bank_name: 'Wema Bank',
                        },
                        {
                                bank_code: '084',
                                bank_name: 'Enterprise Bank',
                        },
                        {
                                bank_code: '063',
                                bank_name: 'Diamond Bank',
                        },
                        {
                                bank_code: '305',
                                bank_name: 'Paycom',
                        },
                        {
                                bank_code: '100',
                                bank_name: 'SunTrust Bank',
                        },
                        {
                                bank_code: '317',
                                bank_name: 'Cellulant',
                        },
                        {
                                bank_code: '401',
                                bank_name: 'ASO Savings and & Loans',
                        },
                        {
                                bank_code: '030',
                                bank_name: 'Heritage',
                        },
                        {
                                bank_code: '402',
                                bank_name: 'Jubilee Life Mortgage Bank',
                        },
                        {
                                bank_code: '058',
                                bank_name: 'GTBank Plc',
                        },
                        {
                                bank_code: '032',
                                bank_name: 'Union Bank',
                        },
                        {
                                bank_code: '232',
                                bank_name: 'Sterling Bank',
                        },
                        {
                                bank_code: '076',
                                bank_name: 'Skye Bank',
                        },
                        {
                                bank_code: '082',
                                bank_name: 'Keystone Bank',
                        },
                        {
                                bank_code: '327',
                                bank_name: 'Pagatech',
                        },
                        {
                                bank_code: '559',
                                bank_name: 'Coronation Merchant Bank',
                        },
                        {
                                bank_code: '601',
                                bank_name: 'FSDH',
                        },
                        {
                                bank_code: '313',
                                bank_name: 'Mkudi',
                        },
                        {
                                bank_code: '214',
                                bank_name: 'First City Monument Bank',
                        },
                        {
                                bank_code: '314',
                                bank_name: 'FET',
                        },
                        {
                                bank_code: '523',
                                bank_name: 'Trustbond',
                        },
                        {
                                bank_code: '315',
                                bank_name: 'GTMobile',
                        },
                        {
                                bank_code: '033',
                                bank_name: 'United Bank for Africa',
                        },
                        {
                                bank_code: '044',
                                bank_name: 'Access Bank',
                        },
                ]);
        }
}

module.exports = BankSeeder;
