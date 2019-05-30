const { RuleTester } = require('eslint');

const rule = require('../../../lib/rules/no-only');

const ruleTester = new RuleTester();

const expectedErrors = [
    { message: 'Don\'t use "only"' },
];

ruleTester.run('no-only', rule, {
    valid: [
        'makeSuite("Проверка", {})',
        'makeSuite()',
    ],
    invalid: [
        {
            code: 'makeSuite("only Страница", {})',
            errors: expectedErrors,
        },
        {
            code: 'makeSuite("Страница only", {})',
            errors: expectedErrors,
        },
    ],
});
