import React, { PureComponent } from 'react';
import custom from 'recustom';

import './Bubble.css';

class Bubble extends PureComponent {

    render() {
        const { className, style, children, ...props} = this.props;
        return (<b className={className} style={style}>
            {children}
        </b>)
    }
}

export default custom(
    () => ({}),
    ({ value, focused }) => ({
        expanded: value || focused
    })
)(Bubble);