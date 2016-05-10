var postcss = require('postcss');

var flexRegex = /💪(🏻|🏼|🏽|🏾|🏿)?/;

module.exports = postcss.plugin('postcss-stronk', function () {
    return function (css) {
        css.walkDecls('display', function (decl) {
            if (decl.value.match(flexRegex)) {
                decl.value = 'flex';
            }
        });
        css.walkDecls(flexRegex, function (decl) {
            decl.prop = decl.prop.replace(flexRegex, 'flex');
        });
    };
});
