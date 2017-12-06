import React, { Component } from 'react';
import styleClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id: '0', name: 'Max', age: '28'},
            {id: '1', name: 'Manu', age: '29'},
            {id: '2', name: 'Stephanie', age: '26'}
        ],
        showPersons: false
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
        this.setState({showPersons: !doesShow})
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {
        let persons = null;
        let btnClass = '';

        if(this.state.showPersons){
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <div className={styleClasses.App}>
                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App<'))
    }
}

export default App;