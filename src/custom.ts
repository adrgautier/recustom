import { compose } from "recompose";
import mapPropsToCustomProperties from "./mapPropsToCustomProperties";
import mapPropsToClassName from "./mapPropsToClassName";

export default (customPropertiesMapper, classNameMapper) =>
  compose(
    mapPropsToCustomProperties(customPropertiesMapper),
    mapPropsToClassName(classNameMapper)
  );
