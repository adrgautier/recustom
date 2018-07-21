import * as React from "react";
import * as classNames from "classnames";
import factory from "../helpers/HOCFactory";
import getClasses from "../helpers/getClasses";
import getCustomProperties from "../helpers/getCustomProperties";
import {
  Mapper,
  StylableComponent,
  StylableProps,
  CompositeComponent
} from "../types";

export default factory(
  (
    componentName: string,
    customPropertiesMapper: Mapper,
    stateClassesMappers: Array<Mapper>
  ) => (Component: CompositeComponent<StylableProps> | StylableComponent) =>
    class Style extends React.PureComponent<StylableProps> {
      static displayName = `withStyle(${componentName})`;

      static stateClassesMappers: Array<Mapper> = stateClassesMappers;

      constructor(props) {
        super(props);

        this.state = null;
      }

      bindState = (state: {} | null | undefined) => {
        const { bindState } = this.props;
        if (bindState) {
          bindState(state);
        } else {
          this.setState(state);
        }
      };

      get className() {
        const { state } = this;
        const {
          className: descendingClassName,
          style,
          bindState,
          ...props
        } = this.props;

        if (typeof bindState === "undefined") {
          // highest hoc
          return classNames(
            componentName,
            {
              ...stateClassesMappers.reduce(
                (classes, mapper) => ({
                  ...classes,
                  ...getClasses(mapper, props, state)
                }),
                {}
              )
            },
            descendingClassName // additionnal classes given to our stylable component
          );
        }
        return classNames(
          componentName, // stylable component inheritence
          descendingClassName
        );
      }

      get style() {
        const { state } = this;
        const {
          className,
          style: descendingStyle,
          bindState,
          ...props
        } = this.props;

        return {
          ...getCustomProperties(customPropertiesMapper, props, state),
          ...descendingStyle
        };
      }

      render() {
        const { className, style, bindState } = this;

        return (
          <Component
            {...this.props}
            className={className}
            style={style}
            bindState={bindState}
          />
        );
      }
    }
);
