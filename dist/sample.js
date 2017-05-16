"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, MyFirstModule;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("MyFirstModule", MyFirstModule = function () {
                //=====================
                //   ES6 IS AWESOME
                //=====================
                function MyFirstModule() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello from my module";

                    _classCallCheck(this, MyFirstModule);

                    this.message = message;
                }

                _createClass(MyFirstModule, [{
                    key: "showMessage",
                    value: function showMessage() {
                        console.log(this.message);
                    }
                }]);

                return MyFirstModule;
            }());

            _export("MyFirstModule", MyFirstModule);
        }
    };
});