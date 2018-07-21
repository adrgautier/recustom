# Recustom

[![written in: typescript](https://img.shields.io/badge/written%20in-typescript-0B72C2.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Yet another way to handle styles in React.

## How to use

Recustom is an "HOC factory" which helps mapping a component props and state to CSS custom properties and classes. It is inspired by the [react-redux](https://github.com/reduxjs/react-redux) `connect` API.

```jsx
import custom from "recustom";

// will be computed as custom properties
const mapCustomProperties = (props, state) => ({
  color: props.important ? "red" : "black",
  textAlign: props.alignment // computed as --text-align
});

// will be computed as state classes
const mapStateClasses = (props, { active }) => ({ active });

export default custom(mapCustomProperties, mapStateClasses)(Section);
```

Your wrapped component must receive in its props the className and the style.

```jsx
// wrapped component
class Section extends PureComponent {
  render() {
    const { className, style, bindState } = this.props;

    bindState(this.state); // allow the hoc to map state to custom properties and classes

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

The `.Section` is generated from your component `displayName`. You can however force any class name by passing a string as the first argument.

```js
export default custom("NotASection", mapCustomProperties, mapStateClasses)(
  Section
);
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
custom(
  ({ alignment, important }) => ({
    textAlign: alignment,
    color: important ? "red" : "inherit"
  }),
  mapStateClasses
)(Section);
```

It allows to easily map props received by our components to CSS custom properties. Note that `textAlign` will be translated to `--text-align`.

### Translate props to classes

The last use-case is a bit different. In fact we cannot rely on CSS custom properties anymore. However we can rely on the most old school way to deal with dynamism with CSS : "state classes". It is a common way (still used in Bootstrap v4) to handle how an element change its display throughout interactions. And this is exactly what styled-components do in background.

```js
mapStateClasses({ active }) {
    return { active }; // return anything 'classnames' npm module can handle
}

export default custom(
	mapCustomProperties,
	mapStateClasses
)(Section);
```

To deal with this use case, I decided to go for the same approach as the "props to custom properties" mapper. Here you actually map the props of your component to "state classes" (i.e. active, visible, ...).

### Extension

It is possible to extend an already stylized component using the same HOC, the exact same way :

```js
import Section from './Section';

mapStateClasses(state) {
    return {
        active: false // overide the inherited behavior
    }
}

export default custom(
    'AlternativeSection',
	mapCustomProperties,
	mapStateClasses
)(Section);
```

You may have noticed our first argument which is mandatory to avoid className collision. If not provided, the className will fallback to the displayName of the wrapped component (in this case Section).

The provided mappers allows us to override the inherited behavior. Think that the response of the upper mapper is merged with the inherited mapper. That mean if you want to disable the `active` "state class", you just need to return false for this key.
