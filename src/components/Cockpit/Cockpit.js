import React from 'react';

import styleClasses from './Cockpit.css';
import Aux from '../../hoc/Auxx';

const cockpit = (props) => {
    const classes = [];
    let btnClass = styleClasses.Button;
    if(props.showPersons){
        btnClass = [styleClasses.Button, styleClasses.Red].join(' ');
    }
    if(props.persons.length < 3){
        classes.push(styleClasses.red);
    }
    if(props.persons.length < 2){
        classes.push(styleClasses.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
    );
};

export default cockpit;