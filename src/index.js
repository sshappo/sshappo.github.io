import ReactDOM from 'react-dom';
import React from 'react';
import Person from "./components/Person";

const conf = [
    {
        sex: 'male',
        firstName: 'Иван',
        middleName: 'Иванович',
        lastName: 'Иванов',
        dateOfBirth: '10 jan 1926',
        dateOfDeath: '5 may 1986'
    },
    {
        sex: 'male',
        firstName: 'Петр',
        middleName: 'Петрович',
        lastName: 'Петров',
        dateOfBirth: '18 apr 1916',
        dateOfDeath: '22 jun 1966'
    }
];

class PersonConfig {
    constructor(data) {
        Object.assign(this, data);
    }
}

const App = () => {
    return (
        <>
            <div>
                {conf.map((person, index) => <Person key={index} {...person}/>)}
            </div>
        </>
    );
};


const wrapper = document.getElementById('root-app');
ReactDOM.render(<App/>, wrapper);

