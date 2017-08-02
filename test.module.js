"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "lastr",
			"path": "lastr/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/lastr.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"lastr": "lastr"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const lastr = require( "./lastr.js" );
//: @end-server

//: @client:
const lastr = require( "./lastr.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "lastr", ( ) => {

	describe( `"lastr( [ 1, 2, 3 ] )"`, ( ) => {
		it( "should return 3", ( ) => {

			assert.equal( lastr( [ 1, 2, 3 ] ), 3 );

		} );
	} );

	describe( `"lastr( [ false, true ] )"`, ( ) => {
		it( "should return true", ( ) => {

			assert.equal( lastr( [ false, true ] ), true );

		} );
	} );

	describe( `"lastr( [ "", "yeah", object, null ] )"`, ( ) => {
		it( "should return empty object" , ( ) => {

			let object = { };
			assert.deepEqual( lastr( [ "", "yeah", object, null ] ), object);

		} );
	} );


	describe( `"lastr( [ null, undefined, 2 ] )"`, ( ) => {
		it( "should return 2", ( ) => {

			assert.equal( lastr( [ null, undefined, 2 ] ), 2 );

		} );
	} );

	describe( `"lastr( [ null, Symbol.for( "hello" )"`, ( ) => {
		it( "should return true" , ( ) => {

			assert.equal( lastr( [ null, Symbol.for( "hello" ), true ] ), true );

		} );
	} );

} );


//: @end-server


//: @client:

describe( "lastr", ( ) => {

	describe( `"lastr( [ 1, 2, 3 ] )"`, ( ) => {
		it( "should return 3", ( ) => {

			assert.equal( lastr( [ 1, 2, 3 ] ), 3 );

		} );
	} );

	describe( `"lastr( [ false, true ] )"`, ( ) => {
		it( "should return true", ( ) => {

			assert.equal( lastr( [ false, true ] ), true );

		} );
	} );

	describe( `"lastr( [ "", "yeah", object, null ] )"`, ( ) => {
		it( "should return empty object" , ( ) => {

			let object = { };
			assert.deepEqual( lastr( [ "", "yeah", object, null ] ), object );

		} );
	} );


	describe( `"lastr( [ null, undefined, 2 ] )"`, ( ) => {
		it( "should return 2", ( ) => {

			assert.equal( lastr( [ null, undefined, 2 ] ), 2 );

		} );
	} );

	describe( `"lastr( [ null, Symbol.for( "hello" )"`, ( ) => {
		it( "should return true" , ( ) => {

			assert.equal( lastr( [ null, Symbol.for( "hello" ), true ] ), true );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "lastr", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( `"lastr( [ 1, 2, 3 ] )"`, ( ) => {
		it( "should return 3", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return lastr( [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, 3 );

		} );
	} );


	describe( `"lastr( [ false, true ] )"`, ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute(
				function( ){
					return lastr( [ false, true ] );
				}
			).value;

			assert.equal( result, true );

		} );
	} );


	describe( `"lastr( [ "", "yeah", object, null ] )"`, ( ) => {
		it( "should return empty object" , ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(
				function( ){
					let object = { };
					return JSON.stringify( lastr( [ "", "yeah", object, null ] ) );
				}
			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), { } );
		} );
	} );


	describe( `"lastr( [ null, undefined, 2 ] )"`, ( ) => {
		it( "should return 2", ( ) => {

			let result = browser.url( bridgeURL ).execute(
				function( ){
					return lastr( [ null, undefined, 2 ] );
				}
			).value;

			assert.equal( result, 2 );

		} );
	} );


	describe( `"lastr( [ null, Symbol.for( "hello" ) ] )"`, ( ) => {
		it( "should return true" , ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(
				function( ){
					return lastr( [ null, Symbol.for( "hello" ), true ] );
				}
			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
