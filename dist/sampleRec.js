"use strict";

System.register(["sample"], function (_export, _context) {
        "use strict";

        var MyFirstModule, _createClass, MainClass;

        function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                }
        }

        return {
                setters: [function (_sample) {
                        MyFirstModule = _sample.MyFirstModule;
                }],
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

                        _export("MainClass", MainClass = function () {
                                function MainClass() {
                                        _classCallCheck(this, MainClass);
                                }

                                _createClass(MainClass, [{
                                        key: "start",
                                        value: function start() {
                                                //==============================================
                                                //                   Profit!
                                                //==============================================
                                                new MyFirstModule().showMessage();

                                                var customModule1 = new MyFirstModule("Custom message 1");
                                                var customModule2 = new MyFirstModule("Custom message 2");

                                                customModule1.showMessage();

                                                customModule2.showMessage();

                                                customModule1.message = "Message changed";

                                                customModule1.showMessage();
                                        }
                                }]);

                                return MainClass;
                        }());

                        _export("MainClass", MainClass);
                }
        };
});