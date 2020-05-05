import ReactDOM from 'react-dom';
import React from 'react';
import Person from "./components/Person";
import gedcom from './assets/111.ged';
import { GedcomParseService } from "./services/gedcom-parse.service";

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
        firstName: 'Сидор',
        middleName: 'Сидорович',
        lastName: 'Сидоров',
        dateOfBirth: '10 jan 1926',
        dateOfDeath: '5 may 1986'
    },
    {
        sex: 'female',
        firstName: 'Татьяна',
        middleName: 'Петровна',
        lastName: 'Иванова',
        maidenName: 'Петрова',
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
    const gedcomService = new GedcomParseService(gedcom);
    console.log(gedcomService.results);

    return (
        <>
{/*
            <div>
                {conf.map((person, index) => <Person key={index} {...person}/>)}
            </div>
*/}
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Person {...conf[0]}></Person>
                        </td>
                        <td>
                            <Person {...conf[1]}></Person>
                        </td>
                        <td>
                            <Person {...conf[2]}></Person>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Person {...conf[2]}></Person>
                        </td>
                        <td>
                            <Person {...conf[1]}></Person>
                        </td>
                        <td>
                            <Person {...conf[0]}></Person>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Person {...conf[0]}></Person>
                        </td>
                        <td>
                            <Person {...conf[1]}></Person>
                        </td>
                        <td>
                            <Person {...conf[2]}></Person>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};


const wrapper = document.getElementById('root-app');
ReactDOM.render(<App/>, wrapper);

