"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatCustomPropertiesName_1 = require("../formatCustomPropertiesName");
describe('format custom properties name helper', function () {
    it('should format name', function () {
        expect(formatCustomPropertiesName_1.default('--prop')).toEqual('--prop');
        expect(formatCustomPropertiesName_1.default('-prop')).toEqual('--prop');
        expect(formatCustomPropertiesName_1.default('prop')).toEqual('--prop');
        expect(formatCustomPropertiesName_1.default('someProp')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('-someProp')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('--someProp')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('--some-prop')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('-some-prop')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('SomeProp')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('-SomeProp')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('--SomeProp')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('--Some-prop')).toEqual('--some-prop');
        expect(formatCustomPropertiesName_1.default('-Some-prop')).toEqual('--some-prop');
    });
});
//# sourceMappingURL=formatCustomPropertiesName.test.js.map