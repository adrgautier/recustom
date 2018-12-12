"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var mapPropsToCustomProperties_1 = require("./mapPropsToCustomProperties");
var mapPropsToClassName_1 = require("./mapPropsToClassName");
exports.default = (function (customPropertiesMapper, classNameMapper) { return recompose_1.compose(mapPropsToCustomProperties_1.default(customPropertiesMapper), mapPropsToClassName_1.default(classNameMapper)); });
//# sourceMappingURL=custom.js.map