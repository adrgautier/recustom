import './TextInput.css';
import React, { PureComponent } from "react";
import custom from 'recustom';

import Bubble from './components/Bubble';
import Input from './components/Input';

import { colors, shapes } from '../../themes';

class TextInput extends PureComponent {

    state = { focused: false };

    handleFocus = () => {
        this.setState({ focused: true });
    }

    handleBlur = () => {
        this.setState({ focused: false });
    }

    render() {
        const { handleFocus, handleBlur } = this;
        const { className, style, bindState = () => {}, placeholder, name, value, error, type, onChange: handleChange, ...props } = this.props;
        const { focused } = this.state;

        // lift up "focused" state
        bindState(this.state);

        return (<label 
            className={className}
            style={style}
            htmlFor={name}
        >   
            {placeholder}
            <Bubble
                value={value}
                focused={focused}
            >
                <Input 
                    type={type} 
                    name={name} 
                    value={value}
                    error={error}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </Bubble>
        </label>);
    }
}

export default custom(
    ({ value, error}, {focused}) => ({
        color: colors.base04,
        backgroundColor: colors.base06,
        boxShadow: focused ? shapes.shadow( value ? error ? colors.red : colors.blue : colors.base06): 'none'
    }),
    ({disabled}) => ({
        disabled
    })
)
(TextInput);