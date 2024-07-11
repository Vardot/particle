const tailwindcss = require('tailwindcss');
const tailwindconfig = require('./tailwind.config');
const cssnano = require('cssnano');

module.exports = ({ options, env }) => {
    return {
        plugins: [
            tailwindcss({
                config: tailwindconfig
            }),
        ]
    };
};