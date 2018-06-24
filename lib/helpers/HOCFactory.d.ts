import { Component as C } from 'react';
import { HOCFactoryFunction, StylableComponent } from '../types';
declare const _default: (hoc: HOCFactoryFunction) => (...mappers: any[]) => (Component: C<{}, {}, any> | StylableComponent) => any;
export default _default;
