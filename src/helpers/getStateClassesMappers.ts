import { StylableComponent, CompositeComponent } from "../types";

export default (Component: any) =>
  Component.hasOwnProperty("stateClassesMappers")
    ? Component.stateClassesMappers
    : [];
