import formatName from './formatCustomPropertiesName';
import { Mapper } from '../types';
import { ComponentState, Props } from 'react';

export default (mapper: Mapper = {}, props: any, state: ComponentState) => {
    let customProperties: Object = mapper;
    if(typeof mapper === "function") {
        if(mapper.length === 2 && state === null) {
            console.warn("custom properties mapper expect a state but got null, you may have forgot to bind state");
            customProperties = mapper(props, {});
        }
        else {
            customProperties = mapper(props, state);
        }
    }

    return Object.keys(customProperties).reduce((properties: Object, propertyName: string): Object => (
        { 
            ...properties,
            [formatName(propertyName)]: customProperties[propertyName]
        }
    ), {});
}