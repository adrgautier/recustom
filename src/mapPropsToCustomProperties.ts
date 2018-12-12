import React, { createFactory } from "react";
import setDisplayName from "recompose/setDisplayName";
import wrapDisplayName from "recompose/wrapDisplayName";
import formatCustomProperties from "./utils/formatCustomProperties";

export default propsToCustomPropertiesMapper => BaseComponent => {
  const factory = createFactory(BaseComponent);
  const styleFactory = ({ style: ownStyle, ...props }) => ({
    ...ownStyle,
    ...formatCustomProperties(propsToCustomPropertiesMapper(props))
  });
  const MapProps = props =>
    factory({
      ...props,
      style: styleFactory(props)
    });
  if (process.env.NODE_ENV !== "production") {
    return setDisplayName(
      wrapDisplayName(BaseComponent, "mapPropsToCustomProperties")
    )(MapProps);
  }
  return MapProps;
};
