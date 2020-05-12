import ReactDOM from 'react-dom';
import React from 'react';
import Person from "./components/Person";
import gedcom from './assets/111.ged';
import { GedcomParseService } from "./services/gedcom-parse.service";
import { PersonConfig } from "./utils/PersonConfig";
import { Family } from "./components/Family";

const App = () => {
    const gedcomService = new GedcomParseService(gedcom);
    const person = new PersonConfig(gedcomService.results.I6);

    return (
        <>
            <Family {...person} data={gedcomService.results} id='I6'/>
        </>
    );
};


const wrapper = document.getElementById('root-app');
ReactDOM.render(<App/>, wrapper);

