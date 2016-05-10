import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('converts "💪" value to "flex"', t => {
    return run(t, 'a{ display: 💪; }', 'a{ display: flex; }', { });
});

test('converts "💪" prop to "flex"', t => {
    return run(t, 'a{ 💪: 2; }', 'a{ flex: 2; }', { });
});

test('converts "💪-grow" prop to "flex-grow"', t => {
    return run(t, 'a{ 💪-grow: 0.6; }', 'a{ flex-grow: 0.6; }', { });
});

test('won\'t break stronk content', t => {
    return run(t,
        'a::before{ content: \'💪\'; }',
        'a::before{ content: \'💪\'; }');
});

test('converts "-ms-💪-order" prop to "-ms-flex-order"', t => {
    return run(t, 'a{ -ms-💪-order: 2; }', 'a{ -ms-flex-order: 2; }', { });
});
