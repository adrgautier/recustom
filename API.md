# API

## `withClassNames`

This helper aims to define the classnames of a React component.
`withClassNames` is a function **that returns an higher-order component**.

```js
withClassNames(
string | Object | (ownerProps: Object, ?bindedState: Object) => string | Object
)
```

### The enhanced component:

Before enhancing any component, you should make sure to fullfill one requirement :
Your component must accept the `className` prop:

```jsx
const BaseComponent = ({ className })(<div className={className}></div>)
```

### Attributes:
This factory accepts a single attribute with mixed types:

#### Passing a string 

```js
const EnhancedComponent = withClassNames(
    'someClassName'
)(BaseComponent)
```

#### Passing an object
You can define your custom properties by passing a simple object like so:

```js
const EnhancedComponent = withClassNames({
    myClassName: true
})(BaseComponent)
```

#### Passing a function

You can also pass a function to dynamically compute the custom properties according to descending props:

```js
const EnhancedComponent = withClassNames(({ active }) => ({
    active
}))(BaseComponent)
```

When my enhanced component has the active prop set to `true`, the computed react component will have the active class.  

#### Using state

You can also set className according to the component own state by lifting state like so:
```js
class BaseComponent extends Component {
    render() {
        const { className, bindState } = this.props;
        bindState(this.state);

        return /*** ... ***/
    }
}
```

## `withCustomProperties`

This helper aims to define and scope given custom properties on a React component.
`withCustomProperties` is a function **that returns an higher-order component**.

```js
withCustomProperties(
Object | (ownerProps: Object, ?bindedState: Object) => Object
)
```

### The enhanced component:

Before enhancing any component, you should make sure to fullfill one requirement :
Your component must accept the `style` prop:

```jsx
const BaseComponent = ({ style })(<div style={style}></div>)
```

### Attributes:
This factory accepts a single attribute with mixed types:

#### Passing an object
You can define your custom properties by passing a simple object like so:

```js
const EnhancedComponent = withCustomProperties({
    myCustomProperty: 'someValue'
})(BaseComponent)
```

#### Passing a function

You can also pass a function to dynamically compute the custom properties according to descending props:

```js
const EnhancedComponent = withCustomProperties(({ active }) => ({
fontWeight: active ? 700: 400
}))(BaseComponent)
```

When my enhanced component has the active prop set to `true`, the custom property `--font-weight` will equal 700, overwise it will be 400.  

#### Using state

You can also set custom properties according to the component own state by lifting state like so:
```js
class BaseComponent extends Component {
    render() {
        const { style, bindState } = this.props;
        bindState(this.state);

        return /*** ... ***/
    }
}
```
