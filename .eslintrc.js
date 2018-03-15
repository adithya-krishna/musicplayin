module.exports = {
    env: { browser: true, es6: true },
    plugins: ['react', 'import', 'prettier'],
    extends: [
        'eslint:recommended',
        'prettier',
        'prettier/react'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
        sourceType: 'module'
    },
    globals: {
        require: true,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4
            }
        ],
        'max-len': ['error', { code: 120 }],
        'linebreak-style': ['error', 'windows'],
        'no-const-assign': 'error',
        'prefer-const': 'warn',
        'no-new-object': 'error',
        'no-new-func': 'error',
        'object-shorthand': 'warn',
        'no-array-constructor': 'error',
        'array-callback-return': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-template': 'warn',
        'no-useless-escape': 'error',
        'prefer-rest-params': 'warn',
        'no-param-reassign': 'error',
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        'prefer-spread': 'warn',
        'prefer-arrow-callback': 'error',
        'no-confusing-arrow': 'error',
        'no-useless-constructor': 'error',
        'no-dupe-class-members': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/first': 'error',
        'dot-notation': 'warn',
        'one-var': ['warn', 'never'],
        'eqeqeq': 'error',
        'camelcase': ['error', { properties: 'never' }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-key': 'error',
        'react/self-closing-comp': 'warn',
        'react/jsx-no-bind': 'error',
        'react/require-render-return': 'error',
        'react/jsx-boolean-value': 'warn',
        'react/sort-comp': [
            1,
            {
                order: [
                    'type-annotations',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ]
            }
        ],
        'react/no-is-mounted': 'error',
        'react/no-string-refs': 'warn'
    }
};
