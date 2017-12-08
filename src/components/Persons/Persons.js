import React, {PureComponent} from 'react';

import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor', props)
    }

    componentWillMount(){
        console.log('[Persons.js] Component will mount')
    }

    componentDidMount(){
        console.log('[Persons.js] Component did mount')
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] Inside compnentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate');
    //
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     //return true;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Person.js] Indise componentWillUPdate')
    }

    componentDidUpdate(){
        console.log('[UPDATE Person.js] Inside componentDidUpdate')
    }

    render(){
        console.log('[Persons.js] Inside render');

        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                position={index}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}



export default Persons;