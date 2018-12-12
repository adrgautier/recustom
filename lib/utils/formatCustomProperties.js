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
exports.default = (function (customProperties) {
    return Object.keys(customProperties).reduce(function (properties, propertyName) {
        var _a;
        return (__assign({}, properties, (_a = {}, _a[formatCustomPropertiesName_1.default(propertyName)] = customProperties[propertyName], _a)));
    }, {});
});
//# sourceMappingURL=formatCustomProperties.js.map