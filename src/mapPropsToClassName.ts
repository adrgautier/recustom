import { createFactory } from "react";
import * as classNames from "classnames";
import setDisplayName from "recompose/setDisplayName";
import wrapDisplayName from "recompose/wrapDisplayName";

const mapPropsToClassName = propsToClassNamesMapper => BaseComponent => {
  const factory = createFactory(BaseComponent);
  const classNameFactory = ({ className: ownClassName, ...props }) =>
    classNames(ownClassName, propsToClassNamesMapper(props));
  const MapProps = props =>
    factory({
      ...props,
      className: classNameFactory(props)
    });
  if (process.env.NODE_ENV !== "production") {
    return setDisplayName(
      wrapDisplayName(BaseComponent, "mapPropsToClassName")
    )(MapProps);
  }
  return MapProps;
};

export default mapPropsToClassName;
