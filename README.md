Rules: Strict Mode
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) rules for using strict mode.


## Installation

``` bash
$ npm install eslint-rules-strict
```


## Usage

``` javascript
var rules = require( 'eslint-rules-strict' );
```

#### rules

[ESLint](http://eslint.org/) rules for using `strict mode`.

``` javascript
console.dir( rules );
/*
	{
		'strict': [ 2, 'global' ]
	}
*/
```


## Examples

``` javascript
var merge = require( 'utils-merge2' )(),
	rules = require( 'eslint-rules-strict' ),
	RULES = require( './existing_rules.json' );

// Merge the rules for using strict mode into an existing ESLint rule set...
RULES = merge( RULES, rules );

console.dir( RULES );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-rules-strict.svg
[npm-url]: https://npmjs.org/package/eslint-rules-strict

[travis-image]: http://img.shields.io/travis/kgryte/eslint-rules-strict/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-rules-strict

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-rules-strict/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-rules-strict?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-rules-strict.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-rules-strict

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-rules-strict.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-rules-strict

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-rules-strict.svg
[github-issues-url]: https://github.com/kgryte/eslint-rules-strict/issues
