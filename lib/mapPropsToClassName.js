"use strict";
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
var react_1 = require("react");
var classNames = require("classnames");
var getDisplayName_1 = require("recompose/getDisplayName");
var setDisplayName_1 = require("recompose/setDisplayName");
var wrapDisplayName_1 = require("recompose/wrapDisplayName");
exports.default = (function (propsToClassNamesMapper) { return function (BaseComponent) {
    var factory = react_1.createFactory(BaseComponent);
    var classNameFactory = function (_a) {
        var ownClassName = _a.className, props = __rest(_a, ["className"]);
        return classNames(ownClassName, propsToClassNamesMapper(props, getDisplayName_1.default(BaseComponent)));
    };
    var MapProps = function (props) {
        return factory(__assign({}, props, { className: classNameFactory(props) }));
    };
    if (process.env.NODE_ENV !== "production") {
        return setDisplayName_1.default(wrapDisplayName_1.default(BaseComponent, "mapPropsToClassName"))(MapProps);
    }
    return MapProps;
}; });
//# sourceMappingURL=mapPropsToClassName.js.map