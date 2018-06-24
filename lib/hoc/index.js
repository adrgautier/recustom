"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
var HOCFactory_1 = require("../helpers/HOCFactory");
var getClasses_1 = require("../helpers/getClasses");
var getCustomProperties_1 = require("../helpers/getCustomProperties");
exports.default = HOCFactory_1.default(function (componentName, customPropertiesMapper, stateClassesMappers) { return function (Component) {
    var _a;
    return (_a = (function (_super) {
            __extends(Style, _super);
            function Style(props) {
                var _this = _super.call(this, props) || this;
                _this.bindState = function (state) {
                    var bindState = _this.props.bindState;
                    if (bindState) {
                        bindState(state);
                    }
                    else {
                        _this.setState(state);
                    }
                };
                _this.state = null;
                return _this;
            }
            Object.defineProperty(Style.prototype, "className", {
                get: function () {
                    var state = this.state;
                    var _a = this.props, descendingClassName = _a.className, style = _a.style, bindState = _a.bindState, props = __rest(_a, ["className", "style", "bindState"]);
                    if (typeof bindState === "undefined") {
                        return classNames(componentName, __assign({}, stateClassesMappers.reduce(function (classes, mapper) {
                            return (__assign({}, classes, getClasses_1.default(mapper, props, state)));
                        }, {})), descendingClassName);
                    }
                    return classNames(componentName, descendingClassName);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Style.prototype, "style", {
                get: function () {
                    var state = this.state;
                    var _a = this.props, className = _a.className, descendingStyle = _a.style, bindState = _a.bindState, props = __rest(_a, ["className", "style", "bindState"]);
                    return __assign({}, getCustomProperties_1.default(customPropertiesMapper, props, state), descendingStyle);
                },
                enumerable: true,
                configurable: true
            });
            Style.prototype.render = function () {
                var _a = this, className = _a.className, style = _a.style, bindState = _a.bindState;
                return (React.createElement(Component, __assign({}, this.props, { className: className, style: style, bindState: bindState })));
            };
            return Style;
        }(React.PureComponent)),
        _a.displayName = "withStyle(" + componentName + ")",
        _a.stateClassesMappers = stateClassesMappers,
        _a);
}; });
//# sourceMappingURL=index.js.map