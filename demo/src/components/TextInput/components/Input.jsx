import React, { PureComponent } from 'react';
import { custom } from 'recustom';

import './Input.css';

import { colors } from '../../../themes';

class Input extends PureComponent {
    
    render() {
        const { className, style, error, ...props } = this.props;
        return (<input className={className} style={style} {...props} />);
    }
}

export default custom(
    ({ value, error, focused }) => ({
        color: 'white',
        backgroundColor: focused || value ? error ? colors.red : colors.blue : colors.base05
    }),
    ({ value, disabled, focused }, displayName) => ({
        [displayName]: true,
        expanded: value || focused,
        disabled
    })
)(Input);