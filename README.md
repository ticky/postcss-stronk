# PostCSS Stronk [![Build Status][ci-img]][ci]

[PostCSS] plugin to really let you flex your muscles.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ticky/postcss-stronk.svg
[ci]:      https://travis-ci.org/ticky/postcss-stronk

```css
.foo {
    display: 💪;
}

.foo .bar {
    💪🏾-grow: 0.6;
    💪🏻-basis: min-content;
}
```

```css
.foo {
  display: flex;
}

.foo .bar {
    flex-grow: 0.6;
    flex-basis: min-content;
}
```


## Usage

```js
postcss([ require('postcss-stronk') ])
```

See [PostCSS] docs for examples for your environment.


## Caveats

* Using this plugin may result in excess 💪 desire.  Some users have reported wanting to 💪 after only seeing mention of the plugin.  You have been warned.
