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
			assert.equal( lastr( [ "", "yeah", object, null ] ), object);

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






