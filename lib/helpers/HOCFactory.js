"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getComponentName_1 = require("./getComponentName");
var getStateClassesMappers_1 = require("./getStateClassesMappers");
exports.default = (function (hoc) { return function () {
    var mappers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mappers[_i] = arguments[_i];
    }
    return function (Component) {
        if (typeof mappers[0] === "string") {
            return hoc(mappers[0], mappers[1], getStateClassesMappers_1.default(Component).concat([mappers[2]]))(Component);
        }
        return hoc(getComponentName_1.default(Component), mappers[0], getStateClassesMappers_1.default(Component).concat([mappers[1]]))(Component);
    };
}; });
//# sourceMappingURL=HOCFactory.js.map