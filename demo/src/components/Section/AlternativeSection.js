import custom from 'recustom';
import Section from './Section';

export default custom(
    'AlternativeSection',
    props => ({
        fontWeight: props.important? 'bold': 'normal'
    }),
    (props,{active}) => ({
        focused: active
    })
)(Section);