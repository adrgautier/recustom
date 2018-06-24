"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var formatCustomPropertiesName_1 = require("./formatCustomPropertiesName");
exports.default = (function (mapper, props, state) {
    if (mapper === void 0) { mapper = {}; }
    var customProperties = mapper;
    if (typeof mapper === "function") {
        if (mapper.length === 2 && state === null) {
            console.warn("custom properties mapper expect a state but got null, you may have forgot to bind state");
            customProperties = mapper(props, {});
        }
        else {
            customProperties = mapper(props, state);
        }
    }
    return Object.keys(customProperties).reduce(function (properties, propertyName) {
        var _a;
        return (__assign({}, properties, (_a = {}, _a[formatCustomPropertiesName_1.default(propertyName)] = customProperties[propertyName], _a)));
    }, {});
});
//# sourceMappingURL=getCustomProperties.js.map