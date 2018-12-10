import formatName from "./formatCustomPropertiesName";

export default customProperties =>
  Object.keys(customProperties).reduce(
    (properties: Object, propertyName: string): Object => ({
      ...properties,
      [formatName(propertyName)]: customProperties[propertyName]
    }),
    {}
  );
