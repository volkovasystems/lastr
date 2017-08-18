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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var lastr = require("./lastr.support.js");
//: @end-client






//: @client:

describe("lastr", function () {

	describe("\"lastr( [ 1, 2, 3 ] )\"", function () {
		it("should return 3", function () {

			assert.equal(lastr([1, 2, 3]), 3);

		});
	});

	describe("\"lastr( [ false, true ] )\"", function () {
		it("should return true", function () {

			assert.equal(lastr([false, true]), true);

		});
	});

	describe("\"lastr( [ \"\", \"yeah\", object, null ] )\"", function () {
		it("should return empty object", function () {

			var object = {};
			assert.deepEqual(lastr(["", "yeah", object, null]), object);

		});
	});


	describe("\"lastr( [ null, undefined, 2 ] )\"", function () {
		it("should return 2", function () {

			assert.equal(lastr([null, undefined, 2]), 2);

		});
	});

	describe("\"lastr( [ null, Symbol.for( \"hello\" )\"", function () {
		it("should return true", function () {

			assert.equal(lastr([null, (0, _for2.default)("hello"), true]), true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibGFzdHIiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJvYmplY3QiLCJkZWVwRXF1YWwiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7QUFFekJBLHNDQUFvQyxZQUFPO0FBQzFDQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTdCSixVQUFPSyxLQUFQLENBQWNILE1BQU8sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBUCxDQUFkLEVBQW9DLENBQXBDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQywwQ0FBd0MsWUFBTztBQUM5Q0MsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLENBQUUsS0FBRixFQUFTLElBQVQsQ0FBUCxDQUFkLEVBQXdDLElBQXhDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQywyREFBcUQsWUFBTztBQUMzREMsS0FBSSw0QkFBSixFQUFtQyxZQUFPOztBQUV6QyxPQUFJRSxTQUFTLEVBQWI7QUFDQU4sVUFBT08sU0FBUCxDQUFrQkwsTUFBTyxDQUFFLEVBQUYsRUFBTSxNQUFOLEVBQWNJLE1BQWQsRUFBc0IsSUFBdEIsQ0FBUCxDQUFsQixFQUF5REEsTUFBekQ7O0FBRUEsR0FMRDtBQU1BLEVBUEQ7OztBQVVBSCxpREFBK0MsWUFBTztBQUNyREMsS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU3QkosVUFBT0ssS0FBUCxDQUFjSCxNQUFPLENBQUUsSUFBRixFQUFRTSxTQUFSLEVBQW1CLENBQW5CLENBQVAsQ0FBZCxFQUErQyxDQUEvQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUwsd0RBQW9ELFlBQU87QUFDMURDLEtBQUksb0JBQUosRUFBMkIsWUFBTzs7QUFFakNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxDQUFFLElBQUYsRUFBUSxtQkFBWSxPQUFaLENBQVIsRUFBK0IsSUFBL0IsQ0FBUCxDQUFkLEVBQThELElBQTlEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBLENBNUNEOztBQThDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGFzdHJcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibGFzdHIvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xhc3RyLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwibGFzdHJcIjogXCJsYXN0clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBsYXN0ciA9IHJlcXVpcmUoIFwiLi9sYXN0ci5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwibGFzdHJcIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImxhc3RyKCBbIDEsIDIsIDMgXSApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiAzXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxhc3RyKCBbIDEsIDIsIDMgXSApLCAzICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImxhc3RyKCBbIGZhbHNlLCB0cnVlIF0gKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBsYXN0ciggWyBmYWxzZSwgdHJ1ZSBdICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwibGFzdHIoIFsgXCJcIiwgXCJ5ZWFoXCIsIG9iamVjdCwgbnVsbCBdIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGVtcHR5IG9iamVjdFwiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCBvYmplY3QgPSB7IH07XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGxhc3RyKCBbIFwiXCIsIFwieWVhaFwiLCBvYmplY3QsIG51bGwgXSApLCBvYmplY3QgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIGBcImxhc3RyKCBbIG51bGwsIHVuZGVmaW5lZCwgMiBdIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIDJcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggbGFzdHIoIFsgbnVsbCwgdW5kZWZpbmVkLCAyIF0gKSwgMiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJsYXN0ciggWyBudWxsLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggbGFzdHIoIFsgbnVsbCwgU3ltYm9sLmZvciggXCJoZWxsb1wiICksIHRydWUgXSApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
