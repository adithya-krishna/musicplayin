module.exports = {
    syntax: 'postcss-scss',
    plugins: {
        'postcss-import': {
            addModulesDirectories: ['node_modules', 'app']
        },
        'postcss-cssnext': {
            features: {
                rem: false
            }
        },
        cssnano: {
            autoprefixer: false,
            zindex: false
        }
    }
};
