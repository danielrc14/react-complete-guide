import React, { PureComponent } from 'react';
import styleClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxx';
import withClass from '../hoc/withClass';

class App extends PureComponent {
    constructor(props){
        super(props);
        console.log('[App.js] Inside constructor', props)
    }

    componentWillMount(){
        console.log('[App.js] Component will mount')
    }

    componentDidMount(){
        console.log('[App.js] Component did mount')
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate');
    //
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Indise componentWillUPdate')
    }

    componentDidUpdate(){
        console.log('[UPDATE App.js] Inside componentDidUpdate')
    }

    state = {
        persons: [
            {id: '0', name: 'Max', age: 28},
            {id: '1', name: 'Manu', age: 29},
            {id: '2', name: 'Stephanie', age: 26}
        ],
        showPersons: false,
        toggleClicked: 0
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        //this.setState({})
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked +1
            }
        });
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {
        console.log('[App.js] inside render');

        let persons = null;

        if(this.state.showPersons){
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App<'))
    }
}

export default withClass(App, styleClasses.App);
