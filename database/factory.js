/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/
/** @type {import('@adonisjs/lucid/src/Factory')} */
const randomString = require('crypto-random-string');
const uuidv4 = require('uuid/v4');

// eslint-disable-next-line no-undef
const Factory = use('Factory');
Factory.blueprint('App/Models/User', (faker, i, data) => ({
        id: data.id || null,
        short_id: data.short_id || faker.string({ length: 10 }),
        email: data.email || `${faker.first().toLowerCase()}@investnaira.me`,
        firstname: data.firstname || faker.first(),
        lastname: data.lastname || faker.last(),
        password: data.password || 'testing123',
        phone_no: data.phone_no || faker.phone(),
        source: 'search',
        role_id: data.role_id || 2,
        referrer: data.referrer || 'invrty',
        email_verified: data.email_verified || true,
}));

Factory.blueprint('App/Models/Wallet', (faker, i, data) => ({
        user_id: data.user_id,
        wallet_id: data.wallet_id || randomString({ length: 10, characters: '1234567890' }),
        balance: data.balance || 10000,
}));

Factory.blueprint('App/Models/BankAccount', (faker, i, data) => ({
        account_name: data.account_name || 'Alexis Sanchez',
        user_id: data.user_id,
        bank_code: data.bank_code || '044',
        account_no: data.account_no || '0690000040',
}));

Factory.blueprint('App/Models/Profile', (faker, i, data) => ({
        user_id: data.user_id,
        gender: data.gender || 'female',
        address: data.address || 'no 67 ademola crescent',
        city: data.city || 'Jalingo',
        state: data.state || 'Taraba',
        next_of_kin_name: data.next_of_kin_name || 'Chuks Amadi',
        next_of_kin_phone: data.next_of_kin_phone || '+2347045670983',
        date_of_birth: data.date_of_birth || '1999-01-20',
        place_of_birth: data.place_of_birth || 'Jigawa',
}));

Factory.blueprint('App/Models/Plan', (faker, i, data) => ({
        user_id: data.user_id,
        plan_id: data.plan_id || uuidv4(),
        plan_name: faker.word(),
        fund: 1,
        frequency: 1,
        balance: 1000,
}));

Factory.blueprint('App/Models/EmailVerification', faker => ({
        email: 'investnaira1@gmail.com',
        token: randomString({ length: 32, type: 'url-safe' }),
        email_otp: '123456',
}));

Factory.blueprint('App/Models/PasswordReset', faker => ({
        email: 'investnaira1@gmail.com',
        email_token: randomString({ length: 32, type: 'url-safe' }),
        email_otp: '123456',
}));

Factory.blueprint('App/Models/BvnVerification', (faker, i, data) => ({
        user_id: data.user_id,
        otp: '123456',
        firstname: 'Test',
        lastname: 'User',
        phone_no: '+2349098463524',
        date_of_birth: '2000-01-01',
}));

Factory.blueprint('App/Models/ParentVerification', (faker, i, data) => ({
        parent_email: data.parent_email || 'investnaira1@gmail.com',
        child_short_id: data.child_short_id,
        verify_otp: '123456',
}));

Factory.blueprint('App/Models/ParentChild', (faker, i, data) => ({
        parent_id: data.parent_id,
        child_id: data.child_id,
}));

Factory.blueprint('App/Models/Task', (faker, i, data) => ({
        user_id: data.id || data.user_id,
        id: data.task_id,
        name: 'Wash Car',
        type: 'housekeeping',
        frequency: 1,
        reward: 500,
}));

Factory.blueprint('App/Models/UserDevice', (faker, i, data) => ({
        user_id: data.parent_id || data.user_id,
        push_token: 'ExponentPushToken[otsZwyBLfBjc-TIXJMDS5H]',
        brand: 'Apple',
        model_name: 'Ipad',
}));

Factory.blueprint('App/Models/VirtualCard', (faker, i, data) => ({
        id: data.id,
        user_id: data.user_id,
        name_on_card: data.name_on_card,
        card_hash: data.id,
        first_6digits: data.card_pan.slice(0, 6),
        last_4digits: data.card_pan.slice(-4),
        card_type: data.card_type,
        expiration: data.expiration,
        currency: data.currency,
}));
