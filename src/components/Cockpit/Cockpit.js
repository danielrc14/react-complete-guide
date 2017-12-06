import React from 'react';

import styleClasses from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = styleClasses.Red;
    }
    if(props.persons.length < 3){
        classes.push(styleClasses.red);
    }
    if(props.persons.length < 2){
        classes.push(styleClasses.bold);
    }

    return (
        <div className={styleClasses.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;