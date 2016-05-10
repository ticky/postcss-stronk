var postcss = require('postcss');

module.exports = postcss.plugin('postcss-stronk', function () {
    return function (css) {
        css.walkDecls('display', function (decl) {
            if (decl.value.match(/💪(🏻|🏼|🏽|🏾|🏿)?/)) {
                decl.value = 'flex';
            }
        });
        css.walkDecls(/💪(🏻|🏼|🏽|🏾|🏿)?/, function (decl) {
            decl.prop = decl.prop.replace(/💪(🏻|🏼|🏽|🏾|🏿)?/, 'flex');
        });
    };
});
