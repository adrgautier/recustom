import helper from '../formatCustomPropertiesName';

describe('format custom properties name helper', () => {
    it('should format name', () => {
        expect(helper('--prop')).toEqual('--prop');
        expect(helper('-prop')).toEqual('--prop');
        expect(helper('prop')).toEqual('--prop');
        expect(helper('someProp')).toEqual('--some-prop');
        expect(helper('-someProp')).toEqual('--some-prop');
        expect(helper('--someProp')).toEqual('--some-prop');
        expect(helper('--some-prop')).toEqual('--some-prop');
        expect(helper('-some-prop')).toEqual('--some-prop');
        expect(helper('SomeProp')).toEqual('--some-prop');
        expect(helper('-SomeProp')).toEqual('--some-prop');
        expect(helper('--SomeProp')).toEqual('--some-prop');
        expect(helper('--Some-prop')).toEqual('--some-prop');
        expect(helper('-Some-prop')).toEqual('--some-prop');
    });
});