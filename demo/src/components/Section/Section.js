import "./Section.css";
import React, {PureComponent} from 'react';
import custom from 'recustom';

class Section extends PureComponent {

    constructor(props) {
        super(props);

        this.state = { active: false };
    }

    handleClick = () => {
        const { active } = this.state;
        this.setState({
            active: !active
        })
    }

    render() {
        const { handleClick } = this;
        const { className, style, children } = this.props;

        
        this.props.bindState(this.state);

        return (<div className={className} style={style} onClick={handleClick}>
            {children}
        </div>);
    }
}

export default style(
    props => ({
        textAlign: props.alignment 
    }),
    (props, {active}) => ({
        active
    })
)(Section);