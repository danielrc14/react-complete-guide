import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styleClasses from './Person.css';
import Aux from '../../../hoc/Auxx';
import withClass from '../../../hoc/withClass';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor', props)
    }

    componentWillMount(){
        console.log('[Person.js] Component will mount')
    }

    componentDidMount(){
        console.log('[Person.js] Component did mount')
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render(){
        console.log('[Person.js] Inside render');

        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => {this.inputElement = inp}}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, styleClasses.Person);