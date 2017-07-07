
const assert = require( "assert" );
const lastr = require( "./lastr.js" );

assert.equal( lastr( [ 1, 2, 3 ] ), 3, "should return 3" );

assert.equal( lastr( [ false, true ] ), true, "should return true" );

let object = { };
assert.equal( lastr( [ "", "yeah", object, null ] ), object, "should return empty object" );

assert.equal( lastr( [ null, undefined, 2 ] ), 2, "should return 2" );

assert.equal( lastr( [ null, Symbol.for( "hello" ), true ] ), true, "should return true" );

console.log( "ok" );
