import { Component, ComponentClass } from "react";
interface HOCFunction extends Function {
    apply(this: HOCFunction, component: Component): ComponentClass;
}
export interface HOCFactoryFunction extends Function {
    apply(this: HOCFactoryFunction, componentName: String, mappers: Array<Mapper>): HOCFunction;
}
interface MapperFunction extends Function {
    apply(this: MapperFunction, props: Object, state: Object): Object;
}
export declare type Mapper = MapperFunction | Object | undefined;
export interface StylableComponent extends ComponentClass {
    stateClassesMappers: Array<Mapper>;
}
export {};
