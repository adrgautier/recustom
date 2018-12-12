# Recustom

[![written in: typescript](https://img.shields.io/badge/written%20in-typescript-0B72C2.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Yet another way to handle styles in React.

## How to use

Recustom is an "HOC factory" which helps mapping a component props and state to CSS custom properties and classes. It is inspired by the [react-redux](https://github.com/reduxjs/react-redux) `connect` API.

```jsx
import custom from "recustom";

// will be computed as custom properties
const mapPropsToCustomProperties = props => ({
  color: props.important ? "red" : "black",
  textAlign: props.alignment // computed as --text-align
});

// will be computed as classname
const mapPropsToClassName = ({ active }) => ({ active });

export default custom(mapPropsToCustomProperties, mapPropsToClassName)(Section);
```

Your wrapped component must receive in its props the className and the style.

```jsx
// wrapped component
class Section extends PureComponent {
  render() {
    const { className, style } = this.props;

    return (
      <div className={className} style={style}>
        <div className="subelement" />
      </div>
    );
  }
}
```

Your are now able to write powerful vanilla CSS :

```css
.Section {
  padding: 20px;
  color: var(--color);
  text-align: var(--text-align);
}

/* a state */
.Section.active {
  font-weight: bold;
}

/* a sub element */
.Section .subelement {
  ...;
}
```

The `.Section` className can be retrieve from the component `displayName`. You can get the `displayName` from the propsToClassName mapper like so:

```js
import { mapPropsToClassName } from "recustom";

mapPropsToClassName(({ active }, displayName) => ({
  [displayName]: true,
  active
}));
```

## Motivations

One of the most interesting feature of styled-components is the ability to pass props carried in our react components to the actual style.

We can leverage props in three different ways :

- the prop contains a value relevant for the style :

  ```js
  const Section = styled.section`
    text-align: ${props => props.alignment}; // i.e. alignment = 'left'
  `;
  ```

- the prop conditions a value :

  ```js
  const Section = styled.section`
    color: ${props => (props.important ? "red" : "inherit")};
  `;
  ```

- the prop conditions a set of properties :

  ```js
  const Section = styled.section`
    color: grey;
    font-weight: 300;
    ${props =>
      props.active &&
      css`
        color: black;
        font-weight: 700;
      `};
  `;
  ```

### Translate props to CSS custom properties

The first two use-cases can be handled with CSS custom properties.

```css
.Section {
  text-align: var(--text-align);
  color: var(--color);
}
```

But how can we translate component's props into CSS custom properties ?

[This approach](https://github.com/danbahrami/react-custom-properties) by Dan Bahrami is really interesting. It allows us to define custom properties locally in the following way :

```jsx
<CustomProperties properties={{ "--text-align": "left" }}>
  <section className="Section">this will be aligned left</section>
</CustomProperties>
```

However these declarative approach may lead to some unnecessary complexity on the render function. Thus I decided to take the HOC approach.

```js
import { mapPropsToCustomProperties } from "recustom";

mapPropsToCustomProperties(({ alignment, important }) => ({
  textAlign: alignment,
  color: important ? "red" : "inherit"
}))(Section);
```

It allows to easily map props received by our components to CSS custom properties. Note that `textAlign` will be translated to `--text-align`.
