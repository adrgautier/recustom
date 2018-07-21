import getName from "./getComponentName";
import { Component as C } from "react";
import { HOCFactoryFunction, Mapper, StylableComponent } from "../types";
import getStateClassesMappers from "./getStateClassesMappers";

export default (hoc: HOCFactoryFunction) => (...mappers) => (
  Component: C | StylableComponent
) => {
  if (typeof mappers[0] === "string") {
    return hoc(mappers[0], mappers[1], [
      ...getStateClassesMappers(Component),
      mappers[2]
    ])(Component);
  }
  return hoc(getName(Component), mappers[0], [
    ...getStateClassesMappers(Component),
    mappers[1]
  ])(Component);
};
