import React, { createFactory } from "react";
import * as classNames from "classnames";
import getDisplayName from "recompose/getDisplayName";
import setDisplayName from "recompose/setDisplayName";
import wrapDisplayName from "recompose/wrapDisplayName";

export default propsToClassNamesMapper => BaseComponent => {
  const factory = createFactory(BaseComponent);
  const classNameFactory = ({ className: ownClassName, ...props }) =>
    classNames(
      ownClassName,
      propsToClassNamesMapper(props, getDisplayName(BaseComponent))
    );
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
