import './TextInput.css';
import React, { PureComponent } from "react";
import { compose, withState } from 'recompose';
import { mapPropsToClassName, mapPropsToCustomProperties} from 'recustom';

import Bubble from './components/Bubble';
import Input from './components/Input';

import { colors, shapes } from '../../themes';

class TextInput extends PureComponent {

    handleFocus = () => {
        const { setFocused } = this.props;
        setFocused(true);
    }

    handleBlur = () => {
        const { setFocused } = this.props;
        setFocused(false);
    }

    render() {
        const { handleFocus, handleBlur } = this;
        const { className, style, placeholder, name, value, error, focused, type, onChange: handleChange } = this.props;

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

export default compose(
    withState('focused', 'setFocused', false),
    mapPropsToCustomProperties(
        ({ value, error, focused}) => 
        ({
            color: colors.base04,
            backgroundColor: colors.base06,
            boxShadow: focused ? shapes.shadow( value ? error ? colors.red : colors.blue : colors.base06): 'none'
        })
    ),
    mapPropsToClassName(
        ({disabled}, displayName) => 
        ({
            [displayName]: true,
            disabled
        })
    )
) (TextInput);