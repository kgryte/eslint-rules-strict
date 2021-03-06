/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	rules = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'eslint-rules-strict', function tests() {

	it( 'should export an object', function test() {
		expect( rules ).to.be.an( 'object' );
	});

});
