import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { mapPropsToClassName } from 'recustom';

import './Bubble.css';

class Bubble extends PureComponent {

    render() {
        const { className, style, children } = this.props;
        return (<b className={className} style={style}>
            {children}
        </b>)
    }
}

export default compose(
    mapPropsToClassName(({ value, focused }, displayName) => ({
        [displayName]: true,
        expanded: value || focused
    }))
)(Bubble);