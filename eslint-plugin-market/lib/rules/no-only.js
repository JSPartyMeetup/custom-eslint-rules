module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow "only" in makeSuite',
            category: 'Possible Errors',
        },
        fixable: 'code',
    },
    create(context) {
        return {
            'CallExpression[callee.name=makeSuite]'(node) {
                if (node.arguments[0] && node.arguments[0].value.includes('only')) {
                    context.report({
                        node,
                        message: 'Don\'t use "only"',
                        loc: node.arguments[0].loc,
                        fix(fixer) {
                            const raw = node.arguments[0].raw;

                            return fixer.replaceText(node.arguments[0], `${raw.replace('only', '')}`);
                        },
                    });
                }
            },
        };
    },
};

// makeSuite('Описание only.', {...})