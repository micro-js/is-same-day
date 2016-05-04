
# is-same-day

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if two dates are on the same day

## Installation

    $ npm install @f/is-same-day

## Usage

```js
var isSameDay = require('@f/is-same-day')

if (isSameDay(post1.createdAt, post2.createdAt)) {
  alert('post1 and post2 were created on the same day')
}
```

## API

### isSameDay(date1, date2)

- `date1` - Date object.
- `date2 - Date object.

**Returns:** Boolean indicating whether or not `date1` and `date2` are on the same calendar day.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-same-day.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-same-day
[git-image]: https://img.shields.io/github/tag/micro-js/is-same-day.svg?style=flat-square
[git-url]: https://github.com/micro-js/is-same-day
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/is-same-day.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/is-same-day
