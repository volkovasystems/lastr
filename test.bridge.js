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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("lastr", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("\"lastr( [ 1, 2, 3 ] )\"", function () {
		it("should return 3", function () {

			assert.equal(lastr(true, true));

		});
	});

	describe("\"lastr( [ false, true ] )\"", function () {
		it("should return true", function () {

			assert.equal(lastr(true, true));

		});
	});

	describe("\"lastr( [ \"\", \"yeah\", object, null ] )\"", function () {
		it("should return empty object", function () {

			var object = {};
			assert.equal(lastr(true, true));

		});
	});


	describe("\"lastr( [ null, undefined, 2 ] )\"", function () {
		it("should return 2", function () {

			assert.equal(lastr(true, true));

		});
	});

	describe("\"lastr( [ null, Symbol.for( \"hello\" )\"", function () {
		it("should return true", function () {

			assert.equal(lastr(true, true));

		});
	});



});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwiZXF1YWwiLCJsYXN0ciIsIm9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87OztBQUd6QixLQUFJQyxZQUFZQyxTQUFoQjtBQUNBLEtBQUlDLGFBQWFKLEtBQUtLLE9BQUwsQ0FBY0gsU0FBZCxFQUF5QixhQUF6QixDQUFqQjtBQUNBLEtBQUlJLHdCQUF1QkYsVUFBM0I7O0FBRUFILHNDQUFvQyxZQUFPO0FBQzFDTSxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTlCVCxVQUFPVSxLQUFQLENBQWFDLE1BQVEsSUFBUixFQUFjLElBQWQsQ0FBYjs7QUFFQyxHQUpEO0FBS0EsRUFORDs7QUFRQVIsMENBQXdDLFlBQU87QUFDOUNNLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFakNULFVBQU9VLEtBQVAsQ0FBYUMsTUFBUSxJQUFSLEVBQWMsSUFBZCxDQUFiOztBQUVDLEdBSkQ7QUFLQSxFQU5EOztBQVFBUiwyREFBcUQsWUFBTztBQUMzRE0sS0FBSSw0QkFBSixFQUFtQyxZQUFPOztBQUV6QyxPQUFJRyxTQUFTLEVBQWI7QUFDRFosVUFBT1UsS0FBUCxDQUFhQyxNQUFRLElBQVIsRUFBYyxJQUFkLENBQWI7O0FBRUMsR0FMRDtBQU1BLEVBUEQ7OztBQVVBUixpREFBK0MsWUFBTztBQUNyRE0sS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU5QlQsVUFBT1UsS0FBUCxDQUFhQyxNQUFRLElBQVIsRUFBYyxJQUFkLENBQWI7O0FBRUMsR0FKRDtBQUtBLEVBTkQ7O0FBUUFSLHdEQUFvRCxZQUFPO0FBQzFETSxLQUFJLG9CQUFKLEVBQTJCLFlBQU87O0FBRWxDVCxVQUFPVSxLQUFQLENBQWFDLE1BQVEsSUFBUixFQUFjLElBQWQsQ0FBYjs7QUFFQyxHQUpEO0FBS0EsRUFORDs7OztBQVVBLENBbkREOztBQXFEQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJsYXN0clwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJsYXN0ci90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGFzdHIuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJsYXN0clwiOiBcImxhc3RyXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJsYXN0clwiLCAoICkgPT4ge1xyXG5cclxuXHRcclxuXHRsZXQgZGlyZWN0b3J5ID0gX19kaXJuYW1lO1xyXG5cdGxldCB0ZXN0QnJpZGdlID0gcGF0aC5yZXNvbHZlKCBkaXJlY3RvcnksIFwiYnJpZGdlLmh0bWxcIiApO1xyXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHRlc3RCcmlkZ2UgfWA7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJsYXN0ciggWyAxLCAyLCAzIF0gKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gM1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdGFzc2VydC5lcXVhbChsYXN0ciAoIHRydWUsIHRydWUgKSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJsYXN0ciggWyBmYWxzZSwgdHJ1ZSBdIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRhc3NlcnQuZXF1YWwobGFzdHIgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwibGFzdHIoIFsgXCJcIiwgXCJ5ZWFoXCIsIG9iamVjdCwgbnVsbCBdIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGVtcHR5IG9iamVjdFwiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCBvYmplY3QgPSB7IH07XHRcclxuXHRcdGFzc2VydC5lcXVhbChsYXN0ciAoIHRydWUsIHRydWUgKSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblx0XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJsYXN0ciggWyBudWxsLCB1bmRlZmluZWQsIDIgXSApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiAyXCIsICggKSA9PiB7XHJcblxyXG5cdFx0YXNzZXJ0LmVxdWFsKGxhc3RyICggdHJ1ZSwgdHJ1ZSApICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImxhc3RyKCBbIG51bGwsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIgLCAoICkgPT4ge1xyXG5cclxuXHRcdGFzc2VydC5lcXVhbChsYXN0ciAoIHRydWUsIHRydWUgKSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdFxyXG5cdFxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
