import * as React from "react";

interface HOCFunction extends Function {
    apply(this: HOCFunction, component: React.Component): React.ComponentClass;
}

export interface HOCFactoryFunction extends Function {
    apply(this: HOCFactoryFunction, componentName: String, mappers: Array<Mapper>): HOCFunction;
}

interface MapperFunction extends Function {
    apply(this: MapperFunction, props: Object, state: Object): Object;
}

export type Mapper = MapperFunction | Object | undefined;

export interface StylableComponent extends React.ComponentClass {
    stateClassesMappers: Array<Mapper>,
    isStylable: boolean
}

export interface StylableProps {
    className: string | undefined,
    style: Object | undefined,
    bindState: Function | undefined
}

export type CompositeComponent<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;